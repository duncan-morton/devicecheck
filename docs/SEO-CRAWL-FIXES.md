# Technical SEO / Crawl Integrity Fixes

Summary of changes made to resolve Ahrefs-style crawl issues. No content or layout was modified.

## 1. Canonical fixes

- **Embed pages** (`/embed/mic`, `/embed/webcam`, `/embed/keyboard`): Canonical was pointing to the main tool URL (e.g. `https://devicecheck.io/mic`). Updated to **self-canonical** (`https://devicecheck.io/embed/mic`, etc.) so embed pages no longer declare another URL as canonical. Embed pages remain `noindex, follow`.
- **All other pages**: Canonicals are generated from `config.path` in `lib/seo/metadata.ts` and point to the page’s own URL (final 200 URL). No canonical chains introduced.
- **Issue pages**: Use `alternates.canonical` with `baseUrl + issuePath` (self). No change.

## 2. Internal links

- **Issue links**: All issue links use slugs from `data/issues.json`. Verified that every slug in `issues.json` has a corresponding `app/issues/[slug]/page.tsx` (104/104).
- **Guide links**: Hardcoded guide paths in components and pages match existing `app/guides/[slug]/page.tsx` routes. No 404s identified.
- **Hub links**: Fixed paths in `FixByPlatformSection`, `TroubleshootingMatrix`, `IssueLinksPanel`, and `HubPage` point to existing hub routes. No redirects in `next.config.ts`; no link lists changed.

## 3. Redirects

- **next.config.ts**: No `redirects` or `rewrites` defined. No redirect chains or loops.
- **Trailing slash**: Next.js default (no trailing slash) is used. No trailing-slash redirects added.

## 4. Sitemap

- **File**: `app/sitemap.ts`
- **Included**: Home, tools (mic, webcam, keyboard, screen, meeting-check), static routes (guides, issues, privacy, terms, contact, hubs), guide routes (full list including new guides), and all issue routes from `data/issues.json`.
- **Added guide routes**: `/guides/how-device-access-works`, `/guides/improve-webcam-quality` (in addition to existing `webcam-quality-improve`).
- **Excluded**: Embed routes (`/embed`, `/embed/mic`, `/embed/webcam`, `/embed/keyboard`) were never in the sitemap; no change.
- **Issue routes**: Built from `getIssuesData()` (issues.json); only valid issue slugs are included.

## 5. Validation

- **Script**: `scripts/validate-crawl.ts` checks that:
  - Every issue slug in `data/issues.json` has `app/issues/[slug]/page.tsx`.
  - Every guide route in the sitemap list has `app/guides/[slug]/page.tsx`.
  - All hub page files exist.
- **Run**: `npx tsx scripts/validate-crawl.ts` (or `node` with appropriate loader). Exit code 1 if any check fails.
- **Manual check**: `node -e "const fs=require('fs'); const path=require('path'); const issues=JSON.parse(fs.readFileSync('data/issues.json','utf-8')); issues.forEach(i=>{ const p=path.join('app/issues',i.slug,'page.tsx'); if(!fs.existsSync(p)) console.log('Missing',i.slug); });"` — run from project root to confirm no missing issue pages.

## Revalidate checklist

- [ ] No canonical points to a URL that redirects (embed now self-canonical; others self-canonical by design).
- [ ] No internal link targets a 4XX (issues from JSON + existing guides/hubs validated).
- [ ] Sitemap includes only indexable routes; all sitemap URLs should return 200.
- [ ] No redirect chains (no redirects configured in Next.js).
