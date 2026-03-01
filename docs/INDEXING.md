# Indexing: IndexNow and sitemaps

## IndexNow

IndexNow notifies search engines (Bing, Yandex, and others) when URLs are added or updated so they can recrawl without waiting for the next sitemap ping.

### Key file

The key file is served at:

- **https://devicecheck.io/<KEY>.txt**

The file lives in `public/<KEY>.txt` and must contain exactly the key string (same value as the `INDEXNOW_KEY` environment variable). Example: `public/dc-idx-4a2e1b9c3d5f6e7a8b9c0d1e2f.txt` with content `dc-idx-4a2e1b9c3d5f6e7a8b9c0d1e2f`.

### Running the submit script manually

1. Set the key (must match the key file name and content):

   ```bash
   export INDEXNOW_KEY=dc-idx-4a2e1b9c3d5f6e7a8b9c0d1e2f
   ```

2. Run the script:

   ```bash
   npm run indexnow
   ```

   Or with `npx`:

   ```bash
   INDEXNOW_KEY=dc-idx-4a2e1b9c3d5f6e7a8b9c0d1e2f npx tsx scripts/indexnow-submit.ts
   ```

3. Optional: dry run (print payloads without sending):

   ```bash
   DRY_RUN=1 INDEXNOW_KEY=dc-idx-4a2e1b9c3d5f6e7a8b9c0d1e2f npm run indexnow
   ```

4. Optional: override base URL (default `https://devicecheck.io`):

   ```bash
   NEXT_PUBLIC_SITE_URL=https://devicecheck.io INDEXNOW_KEY=... npm run indexnow
   ```

The script submits all sitemap-equivalent URLs (home, tools with locale variants, guides, issues, hubs, static pages) in batches of 10,000 to `https://api.indexnow.org/indexnow`. It deduplicates URLs and uses the canonical host (no `www`).

### Wiring into deploy (Vercel / GitHub Actions)

- **Vercel**: In the project dashboard, add an environment variable `INDEXNOW_KEY` with the same value as in the key file. Then add a **post-deploy** step that runs the submit script (e.g. a GitHub Action that runs after deploy, or a Vercel build step that runs a second command after `next build`).  
  Note: Vercel does not run arbitrary scripts after deploy by default. Options:
  - **GitHub Action**: On `workflow_run` or `deployment_status` for the deploy workflow, run `npm run indexnow` in a job with `INDEXNOW_KEY` set in the repo’s secrets.
  - **Vercel “Build”**: You could run both `next build` and `npm run indexnow` in the same build command (e.g. `next build && npm run indexnow`). This runs IndexNow on every build; use only if you want to notify on every deploy.

- **GitHub Actions**: Add a workflow that triggers after a successful deploy (or on push to `main`), checks out the repo, runs `npm ci`, sets `INDEXNOW_KEY` from a repository secret, and runs `npm run indexnow`.

The script does **not** run on local `npm run dev` or `npm run build` unless you add it to the build script yourself.

## Sitemap

The sitemap is generated at build time at **https://devicecheck.io/sitemap.xml** (or `/sitemap.xml`). It includes the same URL set as the IndexNow script (home, tools with supported locales, guides, issues, hubs, static pages). Search engines that support sitemaps will use it for discovery; IndexNow is an additional way to speed up recrawling after updates.
