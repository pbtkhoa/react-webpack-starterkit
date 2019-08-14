const webpack = require("webpack");
const merge = require("webpack-merge");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const baseConfig = require("./webpack.base");
const configs = require("./configs");

const webpackConfig = {
  mode: "development",
  output: {
    path: configs.outputPath,
    chunkFilename: "[name].js",
    filename: "[name].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        exclude: /\.module.(css|sass|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.module\.(css|sass|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]--[local]--[hash:base64:5]"
              },
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // ,new BundleAnalyzerPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: configs.outputPath,
    compress: true,
    hot: true
  },
  devtool: "inline-source-map"
};

module.exports = merge(baseConfig, webpackConfig);
