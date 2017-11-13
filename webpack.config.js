var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './client/main.jsx',
  output: {
    path: path.resolve(__dirname, 'server/static/build'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test:/\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
  devtool: 'source-map'
}