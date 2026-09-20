import { NextResponse, NextRequest } from "next/server";
import { CreateEmailOptions, Resend } from "resend";

// Form values are interpolated into the email HTML below; unescaped input
// would let a submitter inject markup into the email we receive.
const escapeHtml = (value: unknown) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ] as string,
  );

// Anything larger than this is not a contact form submission.
const MAX_BODY_BYTES = 16 * 1024;

// Keep in sync with the maxLength attributes in ContactUs.tsx.
const LIMITS = { name: 130, email: 254, message: 5000 } as const;

// Shape check only (something@something.tld, no whitespace). Resend does the
// strict validation when it sends.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Must match the `action` the widget is rendered with in ContactUs.tsx.
const TURNSTILE_ACTION = "contact";
const TURNSTILE_TOKEN_MAX = 2048;
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type Payload = {
  name: string;
  email: string;
  message: string;
  turnstileToken?: string;
};

const respond = (status: number, message: string) =>
  NextResponse.json({ message }, { status });

const parsePayload = (body: unknown): Payload | string => {
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return "Invalid request body";
  }
  const record = body as Record<string, unknown>;
  const str = (key: string) =>
    typeof record[key] === "string" ? (record[key] as string).trim() : "";

  const name = str("name");
  const email = str("email");
  const message = str("message");

  if (!name || name.length > LIMITS.name) {
    return `Name is required and must be ${LIMITS.name} characters or fewer`;
  }
  if (!email || email.length > LIMITS.email || !EMAIL_RE.test(email)) {
    return "A valid email address is required";
  }
  if (!message || message.length > LIMITS.message) {
    return `Message is required and must be ${LIMITS.message} characters or fewer`;
  }

  const turnstileToken =
    typeof record.turnstileToken === "string"
      ? record.turnstileToken
      : undefined;

  return { name, email, message, turnstileToken };
};

/**
 * Verifies the Turnstile token with Cloudflare (browser -> this route ->
 * siteverify; never from the browser directly).
 *
 * Enforced only once TURNSTILE_SECRET is configured on the Worker. Until the
 * widget exists the form keeps working as before, with the edge rate-limit
 * rule as the backstop. Once the secret is set this fails closed on any
 * network error, non-2xx, wrong action, or unexpected hostname.
 */
const verifyTurnstile = async (
  token: string | undefined,
  remoteip: string | null,
): Promise<boolean> => {
  const secret = process.env.TURNSTILE_SECRET;
  if (!secret) return true;

  const expectedHostnames = new Set(
    (process.env.TURNSTILE_HOSTNAMES ?? "")
      .split(",")
      .map((hostname) => hostname.trim())
      .filter(Boolean),
  );

  if (
    typeof token !== "string" ||
    token.length === 0 ||
    token.length > TURNSTILE_TOKEN_MAX ||
    expectedHostnames.size === 0
  ) {
    return false;
  }

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      signal: AbortSignal.timeout(10_000),
      body: new URLSearchParams({
        secret,
        response: token,
        ...(remoteip ? { remoteip } : {}),
      }),
    });
    if (!res.ok) return false;
    const result = (await res.json()) as {
      success?: boolean;
      action?: string;
      hostname?: string;
    };
    return (
      result.success === true &&
      result.action === TURNSTILE_ACTION &&
      expectedHostnames.has(result.hostname ?? "")
    );
  } catch {
    return false;
  }
};

export const POST = async (req: NextRequest) => {
  // Cheap rejection first, then a real check on the bytes actually read.
  const declaredLength = Number(req.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return respond(413, "Request too large");
  }
  if (!(req.headers.get("content-type") ?? "").includes("application/json")) {
    return respond(415, "Expected application/json");
  }

  let raw: unknown;
  try {
    const text = await req.text();
    if (text.length > MAX_BODY_BYTES) return respond(413, "Request too large");
    raw = JSON.parse(text);
  } catch {
    return respond(400, "Malformed JSON");
  }

  const parsed = parsePayload(raw);
  if (typeof parsed === "string") return respond(400, parsed);

  // Cloudflare sets cf-connecting-ip to the real client address.
  const remoteip = req.headers.get("cf-connecting-ip");
  if (!(await verifyTurnstile(parsed.turnstileToken, remoteip))) {
    return respond(403, "Verification failed. Please try again.");
  }

  const name = escapeHtml(parsed.name);
  const email = escapeHtml(parsed.email);
  const message = escapeHtml(parsed.message).replace(/\r?\n/g, "<br>");

  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: ["contact@mitobyte.com"],
    subject: `New Message from ${email}`,
    html: `
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>New Message from ${name}</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  color: #333;
                }
                .container {
                  padding: 20px;
                  max-width: 600px;
                  margin: 0 auto;
                  border: 1px solid #ddd;
                  border-radius: 4px;
                }
                .header {
                  font-size: 20px;
                  font-weight: bold;
                  margin-bottom: 10px;
                }
                .content {
                  line-height: 1.5;
                }
                .footer {
                  text-align: center;
                  font-size: 12px;
                  margin-top: 20px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h1 class="header">New message from your Website</h1>
                <p class="content">
                 A new message from <strong>${name}</strong> (${email}).
                </p>
                <p class="content">
                  <strong>Message:</strong><br>
                  ${message}
                </p>
                <p class="footer">
                  &copy; mitobyte.com ${new Date().getFullYear()}. All rights reserved.
                </p>
              </div>
            </body>
          </html>`,
  } as CreateEmailOptions;

  try {
    // Instantiated per request: the constructor throws without a key, which
    // breaks `next build` in environments where RESEND_API_KEY is not set.
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send(mailOptions);

    // Previously ignored, so quota exhaustion or a bad key reported success
    // while the message silently vanished.
    if (error) {
      console.error("Resend rejected contact email:", error);
      return respond(502, "Email could not be sent. Please try again later.");
    }

    return respond(200, "Email sent successfully");
  } catch (err) {
    console.error("Contact email failed:", err);
    return respond(500, "Internal Server Error");
  }
};
