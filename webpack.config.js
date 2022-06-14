const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          // 解析规则为从右向左，即 less-loader, postcss-loader, css-loader, style-loader
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true, //是否打开样式查找
            },
          },
          {
            loader: "postcss-loader",
            //配置参数
            options: {
              postcssOptions: {
                //添加插件autoprefixer,能加前缀
                plugins: [require("autoprefixer")],
              },
            },
          },
          {
            loader: "less-loader", // 解析样式文件
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(js)x?$/,
        use: ["babel-loader"],
        exclude: /node-modules/,
      },
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
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    hot: true,
  },
};
