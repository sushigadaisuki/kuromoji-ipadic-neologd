import path from "path";
import url from "url";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
//module.exports = { neologdDict: path.resolve(__dirname, "../dict")};
export const neologdDict = path.resolve(__dirname, "../dict");