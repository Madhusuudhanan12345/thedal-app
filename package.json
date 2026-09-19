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
  related_languages=excluded.related_languages
`;

async function seed() {
  console.log('CHECKPOINT: creating client...');
  const client = getClient();
  console.log('CHECKPOINT: client created, running schema...');

  await client.execute(SCHEMA_SQL);
  console.log('CHECKPOINT: schema OK. Testing one plain query...');

  const test = await client.execute('SELECT 1 AS ok');
  console.log('CHECKPOINT: plain SELECT worked:', JSON.stringify(test.rows));

  console.log('CHECKPOINT: trying first insert with a tiny fixed statement...');
  await client.execute({
    sql: 'INSERT INTO lessons (slug, title, language) VALUES (?, ?, ?)',
    args: ['diagnostic-test', 'Diagnostic Test', 'C']
  });
  console.log('CHECKPOINT: tiny insert worked! Now trying the real upsert for lesson 1...');

  const lesson = lessons[0];
  await client.execute({
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
  });
  console.log('CHECKPOINT: full upsert for lesson 1 worked!');

  for (let i = 1; i < lessons.length; i++) {
    const l = lessons[i];
    await client.execute({
      sql: UPSERT_SQL,
      args: [
        l.slug, l.title, l.language, l.category, l.difficulty, l.keywords,
        l.syntax, JSON.stringify(l.facts), l.explanation, l.code, l.filename,
        l.output, JSON.stringify(l.steps), JSON.stringify(l.related_languages)
      ]
    });
  }

  console.log(`Seeded ${lessons.length} lesson(s).`);
}

seed().catch((err) => {
  console.error('Seed failed.');
  console.error('  message:', err && err.message);
  console.error('  code:', err && err.code);
  process.exit(1);
});
