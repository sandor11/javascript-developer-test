const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  const results = [];
  for (url of urls) {
    const result = await httpGet(url);
    results.push(createResponse(result.status, result.body));
  }
  return results;
};

const responseKeys = {
  200: 'Arnie Quote',
  500: 'FAILURE'
}

const createResponse = (status, stringified) => {
  const parsed = JSON.parse(stringified);
  return {
    [responseKeys[status]]: parsed.message
  }
}

module.exports = {
  getArnieQuotes,
};
