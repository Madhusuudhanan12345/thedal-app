const { getClient } = require('../../db/client');
const { SCHEMA_SQL, MISSED_QUERIES_SCHEMA_SQL } = require('../../db/schema');

exports.handler = async (event) => {
  const rawQ = (event.queryStringParameters && event.queryStringParameters.q) || '';
  const q = rawQ.trim().toLowerCase().slice(0, 100);

  if (!q) {
    return json(200, { query: '', results: [] });
  }

  try {
    const client = getClient();
    await client.execute(SCHEMA_SQL); // no-op if the table already exists

    const like = `%${q}%`;
    const result = await client.execute({
      sql: `
        SELECT slug, title, language, category, difficulty, explanation
        FROM lessons
        WHERE lower(title) LIKE ? OR lower(keywords) LIKE ?
        ORDER BY CASE WHEN lower(title) LIKE ? THEN 0 ELSE 1 END, title ASC
        LIMIT 10
      `,
      args: [like, like, like]
    });

    const results = result.rows.map((r) => ({
      slug: r.slug,
      title: r.title,
      language: r.language,
      category: r.category,
      difficulty: r.difficulty,
      snippet: r.explanation.length > 140 ? r.explanation.slice(0, 140) + '…' : r.explanation
    }));

    if (results.length === 0) {
      await logMissedQuery(client, q);
    }

    return json(200, { query: q, results });
  } catch (err) {
    console.error(err);
    return json(500, { error: 'Search failed' });
  }
};

async function logMissedQuery(client, query) {
  try {
    await client.execute(MISSED_QUERIES_SCHEMA_SQL);
    await client.execute({
      sql: `
        INSERT INTO missed_queries (query, hit_count, first_seen, last_seen)
        VALUES (?, 1, datetime('now'), datetime('now'))
        ON CONFLICT(query) DO UPDATE SET
          hit_count = hit_count + 1,
          last_seen = datetime('now')
      `,
      args: [query]
    });
  } catch (err) {
    // Logging a miss should never break the search response itself.
    console.error('Could not log missed query:', err);
  }
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
}
