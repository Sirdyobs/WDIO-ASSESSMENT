async function post(path: string, payload: unknown) {
  const url = `https://restful-booker.herokuapp.com${path}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const rawBody = await response.text();

  let body: unknown;
  try {
    body = rawBody ? JSON.parse(rawBody) : null;
  } catch {
    body = rawBody;
  }

  console.log('\n========== API RESPONSE ==========');
  console.log('URL:', url);
  console.log('HTTP status:', response.status);
  console.log('Raw body:', rawBody);
  console.log('Parsed body:', body);
  console.log('==================================\n');

  return {
    status: response.status,
    body,
  };
}

module.exports = { post };