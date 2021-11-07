const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */


module.exports = {
   //Punto de entrada
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),//Ruta absoluta
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"],
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
    ],
  },

  plugins: [
     new HtmlWebpackPlugin({
         inject:true,
         template: './public/index.html',
         filename:'index.html'
     })
  ]
};