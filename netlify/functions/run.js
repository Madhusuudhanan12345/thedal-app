// Placeholder — does not execute real code. See the note in the project
// README about wiring this to a sandboxed runner (Piston / Judge0) later.
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' });
  }

  let body = {};
  try {
    body = JSON.parse(event.body || '{}');
  } catch (err) {
    // leave body as {}
  }

  const { language, code } = body;

  return json(200, {
    language: language || 'unknown',
    output: "(sandboxed execution isn't wired up yet — this is a placeholder response)",
    receivedLength: (code || '').length
  });
};

function json(statusCode, body) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
}
