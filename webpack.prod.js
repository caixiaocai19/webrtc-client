const path = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          // 解析规则为从右向左，即 less-loader, postcss-loader, css-loader, style-loader
          MiniCssExtractPlugin.loader, // 替换了原来的style-loader
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
    ],
  },
  plugins: [
    new CssMinimizerPlugin()
  ],
  optimization: {
    minimizer: [
      // js压缩
      new TerserWebpackPlugin({
        parallel: true, // 多线程调用
      }),
    ],
  },
});
