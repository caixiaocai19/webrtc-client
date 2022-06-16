const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV === "development"; // 命令行设置的值
module.exports = {
  entry: path.resolve(__dirname, "./src/main.js"),
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 200 * 1024,
          },
        },
      },
      {
        test: /\.(js)x?$/,
        use: ["babel-loader"],
        exclude: /node-modules/,
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: "asset"
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true, // 所有js脚本放于body之后
      hash: true, // 为静态资源生成hash，用于清楚缓存
      cache: true, // 仅在文件被更改时发出文件
      title: "react admin",
      filename: "index.html",
      template: path.resolve(__dirname, "./public/index.html"),
      minify: {
        collapseWhitespace: true, // 折叠空白
        removeComments: true, // 删除注释
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // 将css打包成单独的css文件
      filename: devMode ? "[name].css" : "[name].[hash:5].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash:5].css",
    }),
  ],
  optimization: {
    // 公共代码抽离
    splitChunks: {
      //启动代码分割，有默认配置项
      chunks: "all",
    },
  },
};
