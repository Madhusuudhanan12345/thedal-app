const { getClient } = require('../../db/client');
const { SCHEMA_SQL } = require('../../db/schema');

// Reached via the netlify.toml redirect: /api/lessons/:slug ->
// /.netlify/functions/lessons-detail/:slug — so the slug is the last
// path segment.
exports.handler = async (event) => {
  const parts = event.path.split('/').filter(Boolean);
  const slug = parts[parts.length - 1];

  if (!slug || slug === 'lessons-detail') {
    return json(400, { error: 'Missing slug' });
  }

  try {
    const client = getClient();
    await client.execute(SCHEMA_SQL);

    const result = await client.execute({
      sql: 'SELECT * FROM lessons WHERE slug = ?',
      args: [slug]
    });

    if (result.rows.length === 0) {
      return json(404, { error: 'Lesson not found' });
    }

    const row = result.rows[0];
    return json(200, {
      slug: row.slug,
      title: row.title,
      language: row.language,
      category: row.category,
      difficulty: row.difficulty,
      syntax: row.syntax,
      explanation: row.explanation,
      code: row.code,
      filename: row.filename,
      output: row.output,
      facts: JSON.parse(row.facts || '[]'),
      steps: JSON.parse(row.steps || '[]'),
      related_languages: JSON.parse(row.related_languages || '[]')
    });
  } catch (err) {
    console.error(err);
    return json(500, { error: 'Could not load lesson' });
  }
};

function json(statusCode, body) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
}
