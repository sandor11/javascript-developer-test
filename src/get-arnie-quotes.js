const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  const results = [
    { 'Arnie Quote': 'Get to the chopper' },
    { 'Arnie Quote': 'MY NAME IS NOT QUAID' },
    { 'Arnie Quote': `What's wrong with Wolfie?` },
    { 'FAILURE': 'Your request has been terminated' }
  ]
  return results;
};

module.exports = {
  getArnieQuotes,
};
