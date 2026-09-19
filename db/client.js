const { createClient } = require('@libsql/client');

// Locally (no env vars set) this reads/writes db/thedal.db on disk.
// In production, set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN in Netlify's
// site settings, and it talks to your hosted Turso database instead.
// Same SQL either way — libSQL is SQLite-compatible.
function getClient() {
  const url = process.env.TURSO_DATABASE_URL || 'file:./db/thedal.db';
  const authToken = process.env.TURSO_AUTH_TOKEN; // fine to be undefined locally
  return createClient({ url, authToken });
}

module.exports = { getClient };
