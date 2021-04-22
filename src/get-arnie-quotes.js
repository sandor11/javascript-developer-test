const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  const httpCalls = urls.map(
    (url) =>
      new Promise(async (resolve, reject) => {
        try {
          const result = await httpGet(url);
          resolve(createResponse(result.status, result.body));
        } catch (err) {
          reject(err);
        }
      })
  );

  return new Promise(async function (resolve, reject) {
    Promise.all(httpCalls)
      .then((values) => {
        resolve(values);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const responseKeys = {
  200: "Arnie Quote",
  500: "FAILURE",
};

const createResponse = (status, stringified) => {
  const parsed = JSON.parse(stringified);
  return {
    [responseKeys[status]]: parsed.message,
  };
};

module.exports = {
  getArnieQuotes,
};
