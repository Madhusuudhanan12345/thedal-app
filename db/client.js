const { createClient } = require('@libsql/client');

// Locally (no env vars set) this reads/writes db/thedal.db on disk.
// In production, set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN in Netlify's
// site settings, and it talks to your hosted Turso database instead.
// Same SQL either way — libSQL is SQLite-compatible.
function getClient() {
  let url = process.env.TURSO_DATABASE_URL || 'file:./db/thedal.db';
  const authToken = process.env.TURSO_AUTH_TOKEN; // fine to be undefined locally

  // Force plain HTTP transport instead of the default libsql:// scheme,
  // which tries a WebSocket connection first. Netlify's build sandbox (and
  // serverless/edge environments generally) can block or mishandle that,
  // which shows up as an opaque "HTTP status 400" with no real detail.
  // Turso's own docs recommend https:// for exactly these environments.
  if (url.startsWith('libsql://')) {
    url = 'https://' + url.slice('libsql://'.length);
  }

  return createClient({ url, authToken });
}

module.exports = { getClient };
