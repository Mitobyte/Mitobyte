# Dependency Migration Plan

**Session:** 2026-07-17
**Status:** Phase 0 complete (2026-07-17). Phases 1 through 4 not started.
**Scope:** Full dependency modernization of the mitobyte site, preceded by package manager hardening.

## Why

An audit on 2026-07-17 found:

- 72 known vulnerabilities in the dependency tree (6 critical, 36 high). The critical ones include Next.js 14.2.6 itself (cache poisoning, image optimization DoS, Server Actions DoS).
- The deploy adapter `@cloudflare/next-on-pages` is in maintenance mode and does not support Next 15 or 16. OpenNext (`@opennextjs/cloudflare`) on Cloudflare Workers is the supported path, and it dropped Next 14 support in Q1 2026. The adapter swap and the Next upgrade must therefore happen together.
- `next.config.mjs` exposes `RESEND_API_KEY` through the `env` block. Verified against the live site bundles on 2026-07-17: the key did NOT leak (no client code references it), but the config is a landmine and must be removed. Key rotation is optional, cheap insurance.
- Eight dependencies are dead code (never imported anywhere in `src` or `.storybook`).
- Node 20 (pinned in `volta` and `mise.toml`) reached end of life in April 2026.

## Current vs. target

| Package            | Current                                                                                                                               | Target                           | Notes                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------- |
| package manager    | npm 10.9                                                                                                                              | npm 11.10+                       | needed for `min-release-age` (Phase 0)                   |
| node               | 20.18.0                                                                                                                               | 24 LTS                           | Node 20 is EOL; 24 is active LTS (support to April 2028) |
| next               | 14.2.6                                                                                                                                | 16.x                             | 14.2.35 as a stopgap in Phase 1                          |
| react / react-dom  | 18.2.0                                                                                                                                | 19.x                             | required by Next 16 App Router                           |
| @chakra-ui/react   | 2.8.2                                                                                                                                 | 3.x                              | the largest single work item (~73 files)                 |
| @chakra-ui/icons   | 2.1.1                                                                                                                                 | removed                          | does not exist in Chakra 3                               |
| @chakra-ui/next-js | 2.2.0                                                                                                                                 | removed                          | does not exist in Chakra 3                               |
| @emotion/styled    | 11.13.0                                                                                                                               | removed                          | not needed by Chakra 3                                   |
| framer-motion      | 11.3.29                                                                                                                               | removed                          | was only a Chakra 2 peer dep                             |
| deploy adapter     | @cloudflare/next-on-pages (Pages)                                                                                                     | @opennextjs/cloudflare (Workers) | Pages project becomes a Worker                           |
| storybook + addons | 8.3.5                                                                                                                                 | 10.x                             | 8.x does not support Next 16                             |
| eslint             | 8.x                                                                                                                                   | 9+ flat config                   | forced by Next 16 (`next lint` removed)                  |
| typescript         | 5.5                                                                                                                                   | latest 5.9.x                     | evaluate TS 7 separately, not in this effort             |
| dead deps          | jsonp, md5, @types/md5, nodemailer, @types/nodemailer, isbot, @mailchimp/mailchimp_marketing, @types/mailchimp\_\_mailchimp_marketing | removed                          | zero imports in the codebase                             |

Everything else (resend, sharp, react-icons, prettier, husky, lint-staged, chromatic, @types/\*) gets bumped to latest in its phase.

## Phase 0: npm supply chain hardening

Do this before touching any dependency versions, so every later install goes through the hardened path. We stay on npm: the cooldown feature we want landed natively in npm 11.10.0 (February 2026), so there is no need to migrate to pnpm.

1. Bump npm to 11.10+ and Node to 22 LTS in `mise.toml`. Update or remove the volta pins (mise is the source of truth on this machine; keeping both invites drift). Add an `engines` field to package.json.
2. Create a project `.npmrc` with:
   - `min-release-age=7` (days). New package versions are quarantined for a week before npm will resolve them. Most malicious releases are detected and yanked within hours or days, so this filters out smash-and-grab supply chain attacks. Note npm's initial implementation has no per-package exclusion list (pnpm has one); if a critical hotfix cannot wait a week, the temporary escape hatch is installing that one version with the setting overridden on the command line, documented here when it happens.
   - `ignore-scripts=true` if we want npm's blunt equivalent of pnpm's script blocking. Caveat: it also disables our own `prepare` hook (husky), so hooks would need `npm run prepare` once per clone. Decide during implementation; cooldown is the non-negotiable part, script blocking is nice to have.
3. Fix the husky `prepare` script (`husky install` is deprecated in v9; the script is just `husky`).
4. Update the Cloudflare build environment if needed so the build uses npm 11.10+ (or confirm the `.npmrc` is respected by the build image).

Verification: `npm install` clean, `npm run dev` serves the site, `npm run build` passes, and a deliberately fresh package version (published within the last week) refuses to resolve.

### Phase 0 completion notes (2026-07-17)

- Pinned node 24.13.1 (not 22; 24 is the active LTS with the longer runway) and npm 11.18.0 in `mise.toml`. npm 12.0.1 was skipped deliberately: published 7 days ago, inside our own cooldown window. Removed the volta block from package.json (volta is not installed on this machine); added `engines`.
- `.npmrc` created with `min-release-age=7`. Verified enforced: npm 11.18 refused to install a TypeScript nightly published the same day with an ETARGET "no matching version with a date before" error.
- npm 11.18 turned out to ship granular install-script blocking natively (`allowScripts`), superseding the `ignore-scripts` decision from the plan. Approved: sharp, esbuild, workerd, fsevents (pinned per version in package.json `allowScripts`). Left blocked: core-js-pure (postinstall is a funding banner, not needed).
- Pulled one Phase 1 item forward: `src/app/api/send-email/route.ts` constructed the Resend client at module scope, and the constructor throws without an API key, which broke `next build` on any machine without RESEND_API_KEY set (Cloudflare builds only passed because the key exists in that environment). The client is now constructed per request inside the handler.
- `npm run build` passes on node 24 / npm 11.18.
- Still open: confirm the Cloudflare Pages build image uses npm 11.10+ so the cooldown also applies to CI installs (an older npm ignores the setting with a warning, it does not fail).

## Phase 1: quick security wins on the current stack

Stop sitting on critical CVEs while the Chakra work happens.

1. Delete the `env` block from `next.config.mjs`. The Resend key is read server side at runtime from the Cloudflare environment; the block contributes nothing and exists only to leak.
2. Turn off `productionBrowserSourceMaps` unless someone is actively using them.
3. Optionally rotate the Resend API key (see Why section; not leaked, but cheap).
4. Remove the eight dead dependencies. Move remaining `@types/*` packages from dependencies to devDependencies.
5. Bump next to 14.2.35 and eslint-config-next to match. This clears the critical Next advisories without any breaking changes.
6. `npm audit` pass; patch-level bumps for prettier, husky, lint-staged, react-icons, sharp.
7. Escape user input (`name`, `email`, `message`) before interpolating into the email HTML in `src/app/api/send-email/route.ts`.

Verification: build passes, contact form works on a preview deploy, audit shows no criticals attributable to direct deps.

## Phase 2: Chakra 2 to 3 (the big lift)

Done on Next 14 / React 18, which Chakra 3 supports. This isolates the largest change from the framework upgrade.

1. Upgrade `@chakra-ui/react` to 3.x. Remove `@chakra-ui/icons`, `@chakra-ui/next-js`, `framer-motion`, `@emotion/styled`.
2. Rebuild the theme in `src/integrations/chakra` on the v3 system (`createSystem` / `defineConfig`).
3. Replace `CacheProvider` in `src/bootstrap/providers.tsx` with the v3 `Provider` setup.
4. Sweep the ~73 files importing Chakra: prop renames (`isOpen` to `open`, `spacing` to `gap`, etc.), recomposed components (Modal becomes Dialog, and similar), icon replacements (react-icons already in the tree covers most of what @chakra-ui/icons provided).
5. Replace `@chakra-ui/next-js` `Link` (about 10 hero/section files) with the v3 pattern: Chakra `Link` with `asChild` wrapping `next/link`.
6. Update the 6 Storybook stories enough to compile. Storybook itself stays on 8.x until Phase 3.
7. Consider deleting `src/app/home/__page__/SectionContact.tsx` (self-described placeholder, loads a Mailchimp script but was never finished).

Verification: every page visually checked against production, stories build, no Chakra 2 imports remain (`grep` for `@chakra-ui/icons`, `@chakra-ui/next-js`, `framer-motion`).

## Phase 3: Next 16, React 19, OpenNext on Workers

One branch; these cannot be separated because the old adapter caps at Next 14 and the new adapter no longer supports it.

1. Bump next to 16.x, react and react-dom to 19.x, matching @types. Run the official React 19 codemods (17 client components, no legacy patterns found in the scan).
2. Swap adapters: remove `@cloudflare/next-on-pages` and `eslint-plugin-next-on-pages`; add `@opennextjs/cloudflare` and current wrangler. Rewrite `wrangler.toml` as a Workers config (main, assets binding, keep `nodejs_compat`, bump `compatibility_date`). Add `open-next.config.ts`. Replace the pages:build / preview / deploy scripts with the OpenNext equivalents.
3. Delete `export const runtime = "edge"` from `src/app/api/send-email/route.ts`. OpenNext runs the Workers Node runtime; edge declarations must go.
4. Delete `src/middleware.ts`. Its 404 redirect never fires (middleware cannot see the rendered response status). Add `src/app/not-found.tsx` instead.
5. Replace `next lint` with direct ESLint: eslint 9+ flat config, eslint-config-next 16, drop the storybook eslint plugin until Phase 4.
6. Decide the `next/image` strategy on Workers (25 files use it): Cloudflare Images for real optimization, or a pass-through custom loader. Record the decision here.
7. Cloudflare dashboard work: create the Worker, re-enter env vars (RESEND_API_KEY), point the route/DNS, decommission the Pages project after cutover.

Verification: preview deploy on Workers, contact form end to end (email actually arrives), all pages render, image loading checked, production cutover last.

## Phase 4: tooling modernization and final sweep

1. Storybook 8.3.5 to 10.x (only 6 story files; alternatively decide to drop Storybook entirely and delete the stories, addons, and chromatic).
2. TypeScript to latest 5.9.x. Evaluate TS 7 (native compiler) as its own future decision.
3. `@types/node` to match Node 22.
4. resend to latest major (4 to 6; check for API changes in `emails.send`).
5. Everything remaining to latest; `npm outdated` should be empty or every exception documented here.
6. Final `npm audit` with zero high/critical.

## Decisions

| Date       | Decision                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------ |
| 2026-07-17 | Committing to Chakra 3 (not leaving Chakra).                                                                 |
| 2026-07-17 | Chakra migration happens before the Next 16 / adapter migration.                                             |
| 2026-07-17 | Staying on npm; its native `min-release-age` (npm 11.10+) provides the 7-day cooldown, so no pnpm migration. |
| 2026-07-17 | Node 24 LTS instead of 22 (active LTS, matches the machine default, support to April 2028).                  |
| 2026-07-17 | Install scripts governed by npm's `allowScripts` allowlist instead of blanket `ignore-scripts`.              |
| 2026-07-17 | Resend key rotation is optional; verified not leaked in live bundles.                                        |

## Open questions

- `next/image` strategy on Workers (Phase 3, step 6).
- Keep or drop Storybook (Phase 4, step 1).
- Who owns the Resend account? Contact form delivery depends on it. Check `git log` on `src/app/api/send-email/route.ts` for the author.
