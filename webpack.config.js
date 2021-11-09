const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration} */


module.exports = {
  //Punto de entrada
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"), //Ruta absoluta
    filename: "main.js",
  },
  resolve: {
    extensions: [".js", "..."],
  },
  module: {
    //Reglas a tomar en cuenta
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test:/\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin()
  ],
};