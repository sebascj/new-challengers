const https = require("https");
const getRequest = function (query) {
  return new Promise((resolve, reject) => {
    const SPLASH_API_KEY = process.env.SPLASH_API_KEY;
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=${SPLASH_API_KEY}`;
    https.get(url, (resp) => {
      let rawData = "";
      resp
        .on("data", (chunk) => {
          rawData += chunk;
        })
        .on("end", () => {
          const body = JSON.parse(rawData);
          resolve(body);
        })
        .on("error", (e) => {
          reject(e);
        });
    });
  });
};

exports.handler = async function (event) {
  try {
    const params = JSON.parse(event.body);
    const response = await getRequest(params.query);
    return { statusCode: 200, body: JSON.stringify(response) };
  } catch (e) {
    return { statusCode: 500, body: `Error trying to send message: ${e}` };
  }
};
