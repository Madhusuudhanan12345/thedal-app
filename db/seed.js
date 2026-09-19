// Creates the lessons table (if needed) and upserts every lesson from
// lessons-data.js into your Turso database (or a local file if you haven't
// set TURSO_DATABASE_URL yet).
//
// Run locally with:  npm run seed
// Runs automatically on every Netlify build (see netlify.toml), so pushing
// a change to lessons-data.js updates the live database on your next deploy.

const { getClient } = require('./client');
const { SCHEMA_SQL } = require('./schema');
const lessons = require('./lessons-data');

const UPSERT_SQL = `
INSERT INTO lessons
  (slug, title, language, category, difficulty, keywords, syntax, facts, explanation, code, filename, output, steps, related_languages)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
ON CONFLICT(slug) DO UPDATE SET
  title=excluded.title, language=excluded.language, category=excluded.category,
  difficulty=excluded.difficulty, keywords=excluded.keywords, syntax=excluded.syntax,
  facts=excluded.facts, explanation=excluded.explanation, code=excluded.code,
  filename=excluded.filename, output=excluded.output, steps=excluded.steps,
  related_languages=excluded.related_languages;
`;

async function seed() {
  const client = getClient();
  await client.execute(SCHEMA_SQL);

  const statements = lessons.map((lesson) => ({
    sql: UPSERT_SQL,
    args: [
      lesson.slug,
      lesson.title,
      lesson.language,
      lesson.category,
      lesson.difficulty,
      lesson.keywords,
      lesson.syntax,
      JSON.stringify(lesson.facts),
      lesson.explanation,
      lesson.code,
      lesson.filename,
      lesson.output,
      JSON.stringify(lesson.steps),
      JSON.stringify(lesson.related_languages)
    ]
  }));

  // One atomic batch instead of N separate round trips.
  await client.batch(statements, 'write');

  console.log(`Seeded ${lessons.length} lesson(s).`);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
