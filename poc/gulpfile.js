var gulp = require('gulp');
var cssmin = require('gulp-cssmin'); //压缩css文件
var del = require('del');  //gulp plugins 删除文件或文件夹
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
// webpack config to build and serve examples
var exampleConfig = require('./webpack.config');
var watching = false;
var demo = false;

//gulp default task ，默认gulp方法 直接敲击gulp则会执行该方法
gulp.task('default', ['dev-server']);

//del 文件或文件夹 
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
	console.log('exampleConfig.serverConfig.publicPath:' + exampleConfig.serverConfig.publicPath);
	console.log('exampleConfig.serverConfig.contentBase:'+exampleConfig.serverConfig.contentBase);
	console.log('exampleConfig.output.path:' + exampleConfig.output.path);
    console.log('Listening at localhost:3004');
  });
});
