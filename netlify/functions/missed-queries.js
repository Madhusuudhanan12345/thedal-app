const { getClient } = require('../../db/client');
const { MISSED_QUERIES_SCHEMA_SQL } = require('../../db/schema');

// Protected with a shared secret rather than real auth, since this project
// doesn't have user accounts yet. Set ADMIN_KEY in Netlify's environment
// variables, then visit /admin.html and enter the same value there.
exports.handler = async (event) => {
  const providedKey =
    (event.queryStringParameters && event.queryStringParameters.key) ||
    event.headers['x-admin-key'];

  const expectedKey = process.env.ADMIN_KEY;

  if (!expectedKey) {
    return json(500, { error: 'ADMIN_KEY is not configured on the server' });
  }
  if (!providedKey || providedKey !== expectedKey) {
    return json(401, { error: 'Invalid or missing admin key' });
  }

  try {
    const client = getClient();
    await client.execute(MISSED_QUERIES_SCHEMA_SQL);

    const result = await client.execute(`
      SELECT query, hit_count, first_seen, last_seen
      FROM missed_queries
      ORDER BY hit_count DESC, last_seen DESC
      LIMIT 200
    `);

    return json(200, { missed: result.rows });
  } catch (err) {
    console.error(err);
    return json(500, { error: 'Could not load missed queries' });
  }
};

function json(statusCode, body) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
}
