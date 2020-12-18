var path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders:[{
      test: /\.js$/,
      loader: 'babel-loader'
    },{
      test: /\.css$/,
      loader: 'css-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      filename: 'index.html'
    })
  ]
}