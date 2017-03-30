var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve('static/stccat/build/'),
    filename: 'stccat.bundle.js'
  },
  serverConfig: {
    port: '3006', // server port
    publicPath: '/', // js path
    contentBase: 'static/stccat/' //web root path [''=root path]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  //webpack run order is perLoaders - loaders - postLoaders
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: [ /node_modules/],
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      }, {
        test: /\.css$/, loader: 'style-loader!css-loader'
      }
    ]
  },
  //new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js') 提取通用代码
  //new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }) 压缩代码
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: {
        comments: false,  // remove all comments
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
