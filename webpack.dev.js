const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
module.exports = merge(common, {
  mode: "development",
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
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // 静态文件目录，用于浏览器显示
      publicPath: "/", // 浏览器访问路径
    },
    hot: true, // 启动热更新
    compress: true, // 启用gzip压缩
    port: 9000,
    open: true, // 自动调起浏览器
    client: {
      overlay: {
        // 出现错误或警告是否覆盖页面线上错误信息
        warnings: true,
        errors: true,
      },
      progress: true,
    },
    proxy: {
      // 代理
    },
  },
  devtool: "eval-cheap-module-source-map",
  watchOptions: {
    // 监控文件相关配置
    poll: true,
    ignored: /node_modules/,
    aggregateTimeout: 300, // 默认值, 当你连续改动时候, webpack可以设置构建延迟时间(防抖)
  },
});