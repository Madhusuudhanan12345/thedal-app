const SCHEMA_SQL = "CREATE TABLE IF NOT EXISTS lessons (id INTEGER PRIMARY KEY AUTOINCREMENT, slug TEXT UNIQUE NOT NULL, title TEXT NOT NULL, language TEXT NOT NULL, category TEXT, difficulty TEXT, keywords TEXT, syntax TEXT, facts TEXT, explanation TEXT, code TEXT, filename TEXT, output TEXT, steps TEXT, related_languages TEXT)";

// Every search that comes back with zero matching lessons gets logged here,
// so you can see what people are actually looking for and haven't found yet.
const MISSED_QUERIES_SCHEMA_SQL = "CREATE TABLE IF NOT EXISTS missed_queries (id INTEGER PRIMARY KEY AUTOINCREMENT, query TEXT UNIQUE NOT NULL, hit_count INTEGER NOT NULL DEFAULT 1, first_seen TEXT NOT NULL, last_seen TEXT NOT NULL)";

module.exports = { SCHEMA_SQL, MISSED_QUERIES_SCHEMA_SQL };
