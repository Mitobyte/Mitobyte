# Security dependency update (2026-10-22)

Context: Vercel published three critical Next.js advisories on 2026-10-14
(two unauthenticated RCEs and a Server Actions DoS), Storybook published a
critical preview code-injection advisory on 2026-10-12, and the same week saw
another round of npm supply-chain compromises (Shai-Hulud style worms via
stolen maintainer tokens). This session brought every direct dependency to
the newest version that clears the 7-day `min-release-age` cooldown and
cleared every fixable advisory. Starting point: 30 findings, 3 critical.
End point: 15 findings, 0 critical, 0 moderate, all in two unpatchable
dev-only chains (details below).

## Exposure before the update

The site was running next 16.3.3, inside the affected range for all three
critical advisories, but none of the vulnerable code paths were reachable in
production:

- GHSA-2464-fhr4-w9xw (SVG RCE in the Image Optimization API via sharp and
  librsvg): `images.unoptimized: true`, so the optimizer endpoint is never
  served. No `next/og` or `ImageResponse` usage. The Workers runtime is not
  glibc Linux either.
- GHSA-673q-mjm6-r5xr (RCE in `use cache` functions returning typed arrays):
  no `use cache` anywhere in `src`.
- GHSA-p3m5-59mp-jv5r (DoS via Server Actions): no `"use server"` anywhere;
  the two API routes are plain route handlers.
- GHSA-2vc4-c4r6-p6v6 (OpenNext Cloudflare middleware bypass): no middleware
  or proxy file in the repo.

Patched anyway. Exposure analysis is a reason not to panic, not a reason to
stay on a vulnerable version.

## Direct dependency bumps

All ranges in `package.json` were raised so the floor is the patched
version. Every target was published on or before 2026-10-15 and clears the
cooldown.

| Package                                                 | From            | To              | Why                                                  |
| ------------------------------------------------------- | --------------- | --------------- | ---------------------------------------------------- |
| next                                                    | 16.3.3          | 16.4.2          | 3 critical, 2 high, 5 moderate, 1 low advisories     |
| eslint-config-next                                      | 16.2.10         | 16.4.2          | tracks next                                          |
| react, react-dom                                        | 19.2.7          | 19.3.1          | released alongside the Next.js fixes on 2026-10-14   |
| @opennextjs/cloudflare                                  | 1.20.1          | 1.20.12         | GHSA-2vc4-c4r6-p6v6; also requires next >= 16.4.1    |
| wrangler                                                | 4.131.0         | 4.151.0         | miniflare/undici/sharp chain; opennext peer ^4.148   |
| sharp                                                   | 0.35.4          | 0.35.5          | CVE-2026-96889 (librsvg)                             |
| storybook, @storybook/nextjs, eslint-plugin-storybook   | 10.6.0 / 10.5.0 | 10.6.2          | GHSA-f2ph-cmg5-wxc8 (critical), GHSA-px85-f4q5-jh77  |
| @chromatic-com/storybook                                | 5.2.1           | 5.5.1           | peer of storybook 10.6                               |
| @chakra-ui/react, @chakra-ui/cli                        | 3.36.x          | 3.37.0          | routine minor; cli pulls undici 7.30 (10 advisories) |
| resend                                                  | 6.17.2          | 6.33.0          | routine; `emails.send` typechecks unchanged          |
| lint-staged, prettier, eslint-plugin-prettier, @types/* | various         | latest in-range | routine                                              |

Holds unchanged from the July plan: typescript 6.0.3 (TS 7 drops the JS
compiler API Next's build needs), eslint 9.39 (eslint-config-next's bundled
eslint-plugin-react crashes on ESLint 10), @types/node 24 (tracks the
runtime).

## Transitive fixes

`npm audit fix` (never `--force`) cleared proxy-addr (critical, IP spoofing
via express in @opennextjs/aws), fast-uri, source-map-js, brace-expansion,
postcss-selector-parser, pbkdf2 and undici.

Two chains needed `overrides` in `package.json` because the parent package
pins an old range and has not shipped a bump:

- `@node-minify/core` (pulled in by @opennextjs/aws) pins `glob@10.3.3`.
  GHSA-5j98-mcp5-4vw2 is in the glob CLI's `-c` flag, not the library API
  node-minify uses, so this was a false positive in practice, but the
  override to `^10.5.0` (same major, November 2025) clears four audit
  entries. Drop the override once @node-minify/core moves past glob 10.3.
- `@storybook/builder-webpack5` pins `webpack-dev-middleware@^6`.
  GHSA-g84c-rxfj-3j2c (path traversal) is fixed in 7.4.5+. Overrode to
  `^7.4.6`; `storybook dev` starts, serves the index and bundles, and a
  `..%2f` traversal probe returns 403. Drop the override when Storybook
  ships a builder on webpack-dev-middleware 7 or 8.

Overrides are invisible to Dependabot. Revisit them whenever the parent
package gets a major bump.

## Accepted findings (15, nothing fixable exists)

- braces GHSA-vfj7-8cjw-p6xm (stack exhaustion on deeply nested patterns):
  affected range is `<= 3.0.3`, which is every release that exists; no
  patched version has been published. Reaches us three ways, all dev-only
  glob matching on patterns we write ourselves, never user input:
  @chakra-ui/cli (typegen), @next/eslint-plugin-next (lint), and
  @storybook/react-docgen-typescript-plugin. npm's only "fix" is a downgrade
  to @chakra-ui/cli 2.5.8 and eslint-config-next 14, which is not a fix.
  Shows as 10 high entries because audit lists every package on the path.
- elliptic GHSA-848j-6mx2-7j84 (5 low): Storybook's webpack crypto polyfill
  chain, unchanged since July, no fixed version exists, local only.

Neither chain ships in `.open-next/worker.js`.

## Install-script allowlist

`npm install-scripts approve` refreshed `allowScripts` to the versions now
installed: esbuild 0.28.2, workerd 1.20261012.1, core-js-pure 3.49.0
(its postinstall is the harmless funding notice). Stale sharp 0.33/0.34 and
old esbuild/workerd entries were dropped. npm 11 still runs unlisted scripts
and only warns; npm 12 will block them, so keep this list current.

## Verification

- `tsc --noEmit` clean, `eslint src` clean.
- `opennextjs-cloudflare build` green (19 static pages, 2 dynamic routes).
- `wrangler dev` on the built worker: every page 200 with CSP, HSTS and
  X-Frame-Options present; unknown route 404; `POST /api/send-email`
  without secrets fails closed (500 from the missing Resend key, which is
  the pre-existing local behaviour; production checks Turnstile first).
- `storybook build` green; `storybook dev` smoke test above.

## Follow-ups

- Deploy happens on push to main. After it lands, run the Turnstile probe
  from `docs/sessions/2026-09-19-contact-form-hardening.md` and expect 403.
- `.github/workflows/build.yaml` runs `npm install -g npm@11`, which pulls
  the newest npm 11.x at build time with no cooldown. Pin it to the version
  in `mise.toml` (11.18.0) so CI resolves nothing the repo did not choose.
- The workflow references `actions/checkout@v5` and `actions/setup-node@v5`
  by tag. Pinning Actions to commit SHAs is the standard defence against
  the tag-rewrite supply-chain pattern; Dependabot already watches them and
  will keep SHA pins current.
- Dependabot's weekly grouped minor/patch PR will keep the routine bumps
  flowing; advisories that land inside the 7-day cooldown still need a
  manual run like this one.
