const { getClient } = require('../../db/client');
const { SCHEMA_SQL } = require('../../db/schema');

exports.handler = async () => {
  try {
    const client = getClient();
    await client.execute(SCHEMA_SQL);

    const result = await client.execute(`
      SELECT slug, title, language, category, difficulty
      FROM lessons
      ORDER BY language ASC, category ASC, title ASC
    `);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lessons: result.rows })
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Could not list lessons' })
    };
  }
};
