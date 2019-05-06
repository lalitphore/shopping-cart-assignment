const Path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


require("html-loader");

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      
    }),
    new HtmlWebpackPlugin({
      filename: 'signin.html',
      template: './src/signin.html',
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'products.html',
      template: './src/products.html',
      inject: true,
      
    }),
    new HtmlWebpackPlugin({
      filename: 'register.html',
      template: './src/register.html',
      inject: true,
    }),
    new HtmlWebpackPlugin({
        filename: 'cart.html',
        template: './src/cart.html',
        inject: true,
      })
  ],
  module: {
    rules: [
      {
        test:/\.hbs$/,
        loader:"handlebars-loader"
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { url: true, sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
        ],
    },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: Path.join(__dirname, "./src"),
    compress: true,
    port: 3030,
  }
};