import { NextRequest, NextResponse } from "next/server";

// Mailchimp's embedded-form endpoint for the Mitobyte audience. `u` and `id`
// are public (every embedded form ships them), so they live here rather than
// in a secret. The JSONP variant returns `cb({...})`; calling it from the
// Worker avoids CORS and keeps the visitor on the page instead of bouncing
// them to a Mailchimp confirmation screen.
const MAILCHIMP_FORM = "https://eepurl.us5.list-manage.com/subscribe/post-json";
const MAILCHIMP_U = "e1e45fd6e057c2ffc679ea161";
const MAILCHIMP_ID = "79264db8fd";

const MAX_BODY_BYTES = 4 * 1024;
const EMAIL_MAX = 254;
// Shape check only; Mailchimp does the strict validation.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SUCCESS = "You're on the list. Check your inbox to confirm your email.";
const ALREADY = "You're already on the list.";
const UNREACHABLE = "Could not reach the mailing list. Please try again later.";

const respond = (status: number, message: string) =>
  NextResponse.json({ message }, { status });

// Mailchimp error strings look like "0 - An email address must contain a
// single @." and may carry HTML ("<a href=...>Click here to update your
// profile</a>"). Keep the sentence, drop the rest.
const cleanMailchimpMessage = (msg: string) =>
  msg
    .replace(/^\d+\s*-\s*/, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

type MailchimpResult = { result?: "success" | "error"; msg?: string };

const parseJsonp = (text: string): MailchimpResult | null => {
  const start = text.indexOf("(");
  const end = text.lastIndexOf(")");
  if (start === -1 || end <= start) return null;
  try {
    return JSON.parse(text.slice(start + 1, end)) as MailchimpResult;
  } catch {
    return null;
  }
};

export const POST = async (req: NextRequest) => {
  if (Number(req.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) {
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
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return respond(400, "Invalid request body");
  }

  const body = raw as Record<string, unknown>;
  const email = typeof body.email === "string" ? body.email.trim() : "";

  // Honeypot. People never see the field; bots that fill it get a quiet
  // success and nothing is forwarded.
  if (typeof body.website === "string" && body.website.length > 0) {
    return respond(200, SUCCESS);
  }

  if (!email || email.length > EMAIL_MAX || !EMAIL_RE.test(email)) {
    return respond(400, "Enter a valid email address.");
  }

  const url = new URL(MAILCHIMP_FORM);
  url.searchParams.set("u", MAILCHIMP_U);
  url.searchParams.set("id", MAILCHIMP_ID);
  url.searchParams.set("EMAIL", email);
  url.searchParams.set("c", "cb");

  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
    const result = parseJsonp(await res.text());
    if (!res.ok || !result) {
      console.error("Mailchimp subscribe: unexpected response", res.status);
      return respond(502, UNREACHABLE);
    }
    if (result.result === "success") return respond(200, SUCCESS);

    const detail = cleanMailchimpMessage(result.msg ?? "");
    // Not an error from the visitor's point of view.
    if (/already subscribed/i.test(detail)) return respond(200, ALREADY);
    return respond(
      400,
      detail || "Could not add that email. Check it and try again.",
    );
  } catch (err) {
    console.error("Mailchimp subscribe failed:", err);
    return respond(502, UNREACHABLE);
  }
};
