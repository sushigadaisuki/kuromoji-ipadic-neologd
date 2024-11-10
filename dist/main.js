var path = require("path");
var url = require("url");
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
module.exports = { neologdDict: path.resolve(__dirname, "../dict")};