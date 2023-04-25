const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

const isDev = process.env.NODE_ENV === "production";

module.exports = {
  mode: isDev ? "development" : "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  devtool: "eval-source-map",
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["css-loader"] },
    ],
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    watchFiles: {
      paths: ["src/**/*.*"],
      options: {
        usePolling: true,
      },
    },
    hot: true,
    open: "/",
    compress: true,
  },

  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        index: "src/pages/home/index.html",
        post: "src/pages/post/post.html",
        cart: "src/pages/cart/cart.html",
      },
      js: {
        filename: "[name].[contenthash:8].js",
      },
      css: {
        filename: "[name].[contenthash:8].css",
      },
    }),
    new Dotenv(),
  ],

  performance: { hints: false },
};
