const course = require("./course.json");

let BASE_URL = "";
if (process.env.NODE_ENV !== "development") {
  BASE_URL = course?.productionBaseUrl || "";
}

module.exports = {
  basePath: BASE_URL,
  assetPrefix: BASE_URL,
  env: {
    ROOT: __dirname,
    BASE_URL,
  },
};
