const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

const configs = require("./configs");

module.exports = {
  entry: configs.entryPath,
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: configs.fontDir
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: configs.imgDir
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "@src": configs.src
    },
    extensions: [".json", ".js", ".jsx", ".scss", ".css"]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: configs.templatePath
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "async"
    })
  ]
};
