var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass", "postcss"]
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}
