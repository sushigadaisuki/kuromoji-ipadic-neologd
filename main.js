var path = require("path");
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
module.exports = { neologdDict: path.resolve(__dirname, "./dict")};