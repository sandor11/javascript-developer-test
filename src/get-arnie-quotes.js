const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  const results = [];
  for (url of urls) {
    const result = await httpGet(url);
    const json = JSON.parse(result.body);
    if (result.status === 200) {
      results.push({'Arnie Quote': json.message});
    }
    else {
      results.push({'FAILURE': json.message});
    }
  }
  return results;
};

module.exports = {
  getArnieQuotes,
};
