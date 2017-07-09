var path = require('path');
var webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/reactApp/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './reactApp/components/App.js',
  output: {
    //will override everything in the build folder
    path: path.resolve(__dirname, 'build'),
    //make new file for the bundled (transformed) code
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        //test says apply this loader to all files that are javascript
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  stats: {
    //when its doing the bundling and printing stuff to terminal it will
    //use color coding for readability
    colors: true
  },
  //will map the original source to whatever you're looking at ????
  devtool: 'source-map',
  plugins: [
    HTMLWebpackPluginConfig
  ]
};
