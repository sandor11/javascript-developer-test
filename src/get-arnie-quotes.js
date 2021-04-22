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

const createResponse = (status, stringified) => {
  const parsed = JSON.parse(stringified);
  const key = status === 200 ? 'Arnie Quote' : 'FAILURE';
  return {
    [key]: parsed.message
  }
}

module.exports = {
  getArnieQuotes,
};
