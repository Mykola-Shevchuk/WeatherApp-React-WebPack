var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/public/build/',
    publicPath: 'build/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.gif$/,
        loader: "url-loader?limit=10000&mimetype=image/gif",
      },
      {
        test: /\.jpg$/,
        loader: "url-loader?limit=10000&mimetype=image/jpg",
      },
      {
        test: /\.svg$/,
        loader: "url-loader?limit=10000&mimetype=image/svg",
      },
      {
        test: /\.gif$/,
        loader: "url-loader?limit=10000&mimetype=image/gif",
      },
      {
        test: /\.jsx$/,
        loader: "babel",
        exclude: [/node_modules/, /public/]
      }
    ]
  }
}