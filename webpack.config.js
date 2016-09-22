var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var NyanProgressPlugin = require("nyan-progress-webpack-plugin");
var entryA2W = "./app/main.js";
var publicPath = "/A2W/";

var env = process.env.ENVIRONMENT || "DEV";

var config = {
  context: path.join(__dirname, ""),//"src"
  entry: {
    A2W: [entryA2W]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: publicPath,
    filename: "[name].js",
    chunkFilename: "[chunkhash].js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      // required to write "require('./style.css')"
      { test: /\.css$/,    loader: ExtractTextPlugin.extract("css?sourceMap") },
      { test: /\.scss$/,   loader: ExtractTextPlugin.extract("css?sourceMap!sass?sourceMap") },
      // required for images and bootstrap icons
      {
        test: /\.(ttf|eot|svg|png|gif|jpg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=[name].[ext]'
      }, {
        test: /jquery\.js$/,
        loader: 'expose?$'
      }, {
        test: /jquery\.js$/,
        loader: 'expose?jquery'
      }, {
        test: /modernizr\.[^\.]*\.js$/,
        loader: "imports?this=>window!exports?window.Modernizr"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // Automtically detect jQuery and $ as free var in modules
      // and inject the jquery library
      // This is required by many jquery plugins
      jQuery: "jquery",
      $: "jquery",
      "window.jQuery": "jquery"
    }),
    new ExtractTextPlugin('[name].css', {allChunks: true}),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /it/),
    /*new webpack.optimize.CommonsChunkPlugin({
      names: ["bootstrap", "vendor"],
      minChunks: Infinity
    }),*/
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify(env)
    })
  ]
};


if (env === "DEV") config.plugins.push(new NyanProgressPlugin());

module.exports = config;
