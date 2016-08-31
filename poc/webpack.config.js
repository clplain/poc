var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: {
    app: ['babel-polyfill', './src/app.js'],
	vendors: ['webpack-dev-server/client?http://localhost:3004', 'webpack/hot/only-dev-server']
  },
  debug: true,
  devtool: 'eval-source-map',
  output: {
    path: path.resolve('build/'),
    filename: '[name].bundle.js'
  },
  serverConfig: {
    port: '3004', // server port
    publicPath: '', // js path
    contentBase: '' //web root path [''=root path]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  //webpack run order is perLoaders - loaders - postLoaders。
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: [ /node_modules/ ],
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
	new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
