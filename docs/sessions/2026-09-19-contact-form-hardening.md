# Contact form hardening and security headers (2026-09-19)

Context: an outage investigation surfaced that `/api/send-email` accepted
anything from anyone, reported success when Resend failed, and that
Worker-rendered pages carried no security headers. This session fixed the code
side. The Cloudflare-side toggles are listed at the end.

## What changed

- `src/app/api/send-email/route.ts`
  - Rejects non-JSON, malformed JSON, oversized bodies (16 KB), and missing or
    over-length fields with real status codes instead of a generic 500.
  - Verifies a Turnstile token with Cloudflare siteverify **when
    `TURNSTILE_SECRET` is set on the Worker**. Fails closed on any error once
    enabled. Until the secret exists the form works as before.
  - Returns 502 when Resend rejects the send. Previously the route ignored the
    error and returned 200, so quota exhaustion dropped messages silently.
- `src/common/components/Forms/Contact/ContactUs.tsx`
  - Renders the Turnstile widget when `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set
    at build time, resets it after every submit (tokens are single-use), and
    shows the server's error message instead of only logging to the console.
  - `maxLength` on inputs mirrors the server limits.
- `next.config.mjs`: CSP, nosniff, frame denial, referrer and permissions
  policies, HSTS (apex/www only) on every Worker-rendered response. The
  `public/_headers` file only covers static assets.
- `wrangler.toml`: `TURNSTILE_HOSTNAMES` var.
- `.github/workflows/build.yaml`: passes the site key at build time, syncs
  `TURNSTILE_SECRET` to the Worker.
- `.github/dependabot.yml`: weekly npm and Actions updates with a 7-day
  cooldown, matching `min-release-age` in `.npmrc`.
- Removed `directive.ais` (stale Artisan Hosting config in a public repo).
- Bumped `wrangler` past the miniflare/sharp advisory; `npm audit fix` for the
  rest. Remaining findings are low severity inside Storybook's webpack
  polyfills and need a Storybook major to clear.

## Turnstile status

Done 2026-09-19 via the Cloudflare API:

- Widget `mitobyte-contact` (managed mode) exists for `mitobyte.com`,
  `www.mitobyte.com`, `localhost`, `127.0.0.1`. Site key
  `0x4AAAAAAE9fTTBNzm56kWp1` is the default in `ContactUs.tsx`.
- Its secret is stored on the `mitobyte` Worker as `TURNSTILE_SECRET`. It
  survives deploys; the workflow's sync step only overwrites it if a
  `TURNSTILE_SECRET` GitHub secret is also set (it is not).
- `TURNSTILE_HOSTNAMES` ships in `wrangler.toml`, so the Worker accepts tokens
  issued for the production hostnames only. `localhost` is on the widget for
  local development but is never accepted in production.

Pending until the next deploy: end-to-end validation. After deploy, submit
the form once on production and expect "Sent", then:

```
curl -s -o /dev/null -w "%{http_code}\n" -X POST https://www.mitobyte.com/api/send-email \
  -H 'Content-Type: application/json' \
  -d '{"name":"probe","email":"a@b.co","message":"no token"}'
```

Expect 403. A 200 there means the secret did not reach the Worker.

Local development: run with `TURNSTILE_SECRET=<secret> TURNSTILE_HOSTNAMES=localhost`
to exercise enforcement, or leave both unset to skip it. Read the secret from
the dashboard widget page; do not commit it.

## Still on the Cloudflare side (dashboard, not code)

- Rate limiting rule (free plan includes one): POST to `/api/send-email`,
  5 requests per 10 seconds per IP, block.
- Always Use HTTPS on, minimum TLS 1.2, then HSTS.
- Workers Paid and a Usage Based Billing alert (separate outage fix).

## CSP notes

`script-src` keeps `'unsafe-inline'` because the App Router emits inline
hydration scripts; a nonce would force dynamic rendering on every page and
this site is deliberately fully static. Allowed third parties: Cloudflare Web
Analytics beacon, Turnstile, YouTube embeds. If a new embed or script is added,
extend the matching directive in `next.config.mjs` or it will be blocked.
