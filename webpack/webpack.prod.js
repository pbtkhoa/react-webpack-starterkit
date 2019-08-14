const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const baseConfig = require("./webpack.base");
const configs = require("./configs");

const webpackConfig = {
  mode: "production",
  output: {
    filename: `${configs.jsDir}/[name].[hash].js`,
    path: configs.outputPath,
    chunkFilename: `${configs.jsDir}/[name].[chunkhash].js`,
    publicPath: "/"
  },
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    },
    runtimeChunk: true
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        exclude: /\.module.(css|sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.module\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              localsConvention: "camelCase",
              modules: {
                localIdentName: "[local]___[hash:base64:5]"
              }
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${configs.cssDir}/[name].css`,
      chunkFilename: `${configs.cssDir}/[name].css`
    })
  ],
  devtool: "source-map"
};

module.exports = merge(baseConfig, webpackConfig);
