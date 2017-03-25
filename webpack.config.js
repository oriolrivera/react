var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app/src/index.js",
  output: {
    path: __dirname + "/app/dist/js",
    filename: "index.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
    module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
           presets:["react","es2015","stage-0"],
           plugins:["react-html-attrs","transform-class-properties","transform-decorators-legacy"],
        }
      },
    ]
}
};