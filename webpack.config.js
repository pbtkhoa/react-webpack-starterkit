const env = process.env.NODE_ENV || "development";
const webpackConfig = require(`./webpack/webpack.${env}.js`); // eslint-disable-line

module.exports = webpackConfig;
