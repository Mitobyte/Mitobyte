// Security headers for pages rendered by the Worker. public/_headers only
// applies to files served by Workers Static Assets, so HTML needs these here.
//
// script-src keeps 'unsafe-inline' because the App Router emits inline
// hydration scripts and a nonce-based CSP would force dynamic rendering on
// every page. Even so the policy still pins frames, objects, base URI, form
// targets and third-party origins. Dev builds add 'unsafe-eval' for webpack.
const isDev = process.env.NODE_ENV !== "production";

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://static.cloudflareinsights.com https://challenges.cloudflare.com`,
  // Chakra/Emotion inject styles at runtime.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  // Cloudflare Web Analytics beacon and Turnstile.
  "connect-src 'self' https://cloudflareinsights.com https://challenges.cloudflare.com",
  // YouTube embeds on the showcase page; Turnstile widget on the contact form.
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://challenges.cloudflare.com",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // One year, apex and www only. Other subdomains (shop, app) are separate
  // origins with their own hosting, so no includeSubDomains.
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The Workers runtime has no sharp-based optimizer. Revisit if we adopt
    // Cloudflare Images; see docs/sessions/2026-07-17-dependency-migration-plan.md.
    unoptimized: true,
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
