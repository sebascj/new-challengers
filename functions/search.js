const https = require("https");
const SPLASH_API_KEY = process.env.SPLASH_API_KEY;

const getDetails = function (id) {
  return new Promise((resolve, reject) => {
    const url = `https://api.unsplash.com/photos/${id}?client_id=${SPLASH_API_KEY}&content_filter=high`;
    https.get(url, (resp) => {
      let rawData = "";
      resp
        .on("data", (chunk) => {
          rawData += chunk;
        })
        .on("end", () => {
          // const body = JSON.parse(rawData);
          resolve(rawData);
        })
        .on("error", (e) => {
          reject(e);
        });
    });
  });
};

const getList = function (query) {
  return new Promise((resolve, reject) => {
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=${SPLASH_API_KEY}&content_filter=high`;
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
    const response = params.id
      ? await getDetails(params.id)
      : await getList(params.query);
    return { statusCode: 200, body: JSON.stringify(response) };
  } catch (e) {
    return { statusCode: 500, body: `Error trying to send message: ${e}` };
  }
};
