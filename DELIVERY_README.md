# Ah Poong Sentul guide

Independent Indonesian and English visitor guide. Language is encoded in URLs: `/` and `/en/`, with topic-paired privacy, terms and cookie settings pages.

## Build and deployment

Use the pinned pnpm version from package.json. `pnpm check` checks TypeScript. `pnpm build` builds assets and renders all eight pages, a noindex 404, robots and sitemap. `pnpm deploy` builds and deploys the root wrangler.jsonc configuration. Root Worker project `ahpoongsentul` was confirmed by the official Cloudflare GitHub check on the baseline commit. The ASSETS binding serves `dist/public`; Worker handles HTTP/www canonical redirects and preserves actual 404 responses. There is no generated deployment configuration inside the public output.

The repository did not track build output at baseline; source images are committed under client/public/assets and the build copies them reproducibly. Keep that convention. No production deployment is established by local build or dry run alone.

## Verification

`node scripts/behavior-test.mjs` tests the Worker and consent runtime, including denied local storage, explicit current-page consent, immediate refusal and real 404 delegation. The source notes record public factual boundaries. Do not add private search performance information to source, output or publication text.
