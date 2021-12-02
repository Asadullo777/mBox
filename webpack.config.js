const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./js/script.js",
  // entry: "C:/OpenServer/domains/mBox/js/script.j",

  output: {
    path: __dirname + "/js",
    filename: "bundle.js",
  },

  // plugins: [new HtmlWebpackPlugin()],

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
    ],
    // resolve: {
    //   extensions: ["", ".js", ".jsx", ".css"],
    //   modulesDirectories: ["node_modules"],
    // },
  },
};
