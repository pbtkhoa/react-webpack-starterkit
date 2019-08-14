const path = require("path");

module.exports = {
  root: path.resolve(__dirname, "../"),
  src: path.resolve(__dirname, "../", "src/"),
  entryPath: path.resolve(__dirname, "../", "src/index.js"),
  templatePath: path.resolve(__dirname, "../", "src/index.html"),
  outputPath: path.resolve(__dirname, "../", "build"),
  imgDir: "img",
  fontDir: "fonts",
  cssDir: "css",
  jsDir: "js"
};
