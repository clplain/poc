var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var del = require('del');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
// webpack config to build and serve examples
var exampleConfig = require('./webpack.config');
var watching = false;
var demo = false;

//gulp default task
gulp.task('default', ['dev-server']);

//del
gulp.task('clean', function() {
  return del([
    './lib/**'
  ]);
});

gulp.task('dev-server', function() {
  new WebpackDevServer(webpack(exampleConfig), {
    publicPath: exampleConfig.serverConfig.publicPath,
    contentBase: exampleConfig.serverConfig.contentBase,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    stats: {
      assets: true,
      colors: true,
      version: false,
      hash: false,
      timings: true,
      chunks: true,
      chunkModules: false
    },
    historyApiFallback: true
  }).listen(exampleConfig.serverConfig.port, 'localhost', function(err, result) {
    if (err) {
      console.log(err);
    }
  });
});
