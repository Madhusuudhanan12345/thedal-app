# Thedal on Netlify

This is Thedal rebuilt to run entirely on Netlify: the homepage, results
page, and language browser are served as static files, and the backend
(search, lesson lookup, run) is three small Netlify Functions instead of
one always-on Express server. The database is **Turso** — a hosted,
SQLite-compatible database that fits serverless functions well, since
functions can't keep a local SQLite file between requests.

## What's here

```
thedal-netlify/
  public/                  same three HTML pages as before
    index.html
    results.html
    languages.html
  db/
    lessons-data.js          all lesson content (unchanged)
    schema.js                 the CREATE TABLE statement, shared everywhere
    client.js                  connects to Turso in prod, a local file in dev
    seed.js                    upserts lessons-data.js into the database
  netlify/functions/
    search.js                  GET /api/search?q=...
    lessons-list.js             GET /api/lessons
    lessons-detail.js            GET /api/lessons/:slug
    run.js                       POST /api/run  (still a placeholder)
    healthz.js                   GET /api/healthz
  netlify.toml               routes /api/* to the right function, sets headers
  package.json
```

## One-time setup

### 1. Create a Turso database

Install the CLI and log in (opens a browser to authenticate via GitHub,
so this uses the GitHub account you already have):

```
curl -sSfL https://get.tur.so/install.sh | bash
turso auth login
```

Create the database:

```
turso db create thedal
```

Get the URL and an auth token — you'll need both in a moment:

```
turso db show thedal --url
turso db tokens create thedal
```

### 2. Push this project to GitHub

```
cd thedal-netlify
git init
git add .
git commit -m "Thedal — Netlify + Turso"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### 3. Connect the repo to Netlify

1. In the Netlify dashboard: **Add new site → Import an existing project**
2. Pick your GitHub repo
3. Build settings are already in `netlify.toml`, so Netlify should detect
   them automatically (publish directory `public`, functions directory
   `netlify/functions`, build command `npm run seed || true`)
4. Before the first deploy (or right after, then redeploy), go to
   **Site settings → Environment variables** and add:
   - `TURSO_DATABASE_URL` — the URL from step 1
   - `TURSO_AUTH_TOKEN` — the token from step 1
   - `ADMIN_KEY` — any password-like string you make up, used to protect
     the missed-searches admin page (see below)
5. Deploy

That's the whole setup. From here on:

## The part you actually asked for

**Every time you save a change and push it, the live site updates
automatically** — no manual redeploy step:

```
git add .
git commit -m "add more lessons"
git push
```

Netlify picks up the push, rebuilds, and the new version is live within
about a minute. This also means every time you add a new lesson to
`db/lessons-data.js` and push, the build re-runs `npm run seed`, which
updates the live Turso database to match — content and code deploy
together automatically.

## Local development

```
npm install
npm run seed          # seeds your Turso DB (or a local file if env vars aren't set)
netlify dev            # runs the site + functions together, with redirects working
```

`netlify dev` needs the Netlify CLI (`npm install -g netlify-cli`) — it's
what makes `/api/search` correctly reach the local function the way it
will in production. Opening `public/index.html` directly won't work, same
as before.

## Adding more lessons

Unchanged from before: add an object to `db/lessons-data.js`, then either
run `npm run seed` locally or just `git push` — the build does it for you.

## Finding out what people search for that you don't have yet

Every search that comes back with zero results gets logged to a
`missed_queries` table — the query text, how many times it's been
searched, and when it was first/last seen.

To review it, open `your-site.netlify.app/admin.html` and enter the
`ADMIN_KEY` value you set in Netlify's environment variables. You'll see
every missed search, most-searched first — that's your prioritized list
for what to add to `db/lessons-data.js` next.

This page isn't linked from anywhere in the public site, and the data
behind it requires the correct key, but keep in mind it's still just a
shared-secret check, not real authentication — don't put anything more
sensitive than search-query text behind it.

## About the "Run" button

Still a placeholder, same as the previous version — it returns a canned
response and doesn't execute code. Wiring it to a real sandboxed runner
(Piston or Judge0) is a `netlify/functions/run.js` change away when
you're ready; the shape (`{ language, code }` in, `{ output }` out) stays
the same.

## Why Turso instead of keeping SQLite as a plain file

Netlify Functions are stateless — each invocation can get a fresh
filesystem, so a local SQLite file wouldn't reliably persist writes (and
you can't guarantee two requests even hit the same instance). Turso is
libSQL, which is SQLite-compatible, so the SQL in every function is
nearly identical to the plain-SQLite version — the only real change was
switching from `better-sqlite3` to `@libsql/client` and pointing it at a
URL instead of a file path.

## Limits worth knowing about on Netlify's free tier

- Function execution has a time limit (10 seconds on the free tier,
  longer on paid plans) — fine for these lookups, but keep this in mind
  once you add anything heavier (like a real code-execution call)
- Turso's free tier has its own row/storage limits — comfortable for a
  lesson library, worth checking their pricing page once you're indexing
  crawled content at scale
