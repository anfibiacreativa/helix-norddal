const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const alias = require('./project.alias');
const paths = require('./project.config');

module.exports = {
  entry: '../sources/js/index.js',
  output: {
    path: path.resolve(__dirname, '..'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './',
    hot: true,
  },
  module : {
    rules : [
      {
          test: /\.s?[ac]ss$/,
          use: [
              MiniCssExtractPlugin.loader,
              { loader: 'css-loader' },
              { loader: 'sass-loader' }
          ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    alias: alias,
    modules: [
      paths.NODE_MODULES, 'node_modules',
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'style.css'
    }) 
  ]
};