var gulp = require('gulp');
var fs = require('fs-extra');
var Path = require('path');

var HOOK_DIR = './hooks';
var GIT_DIR = './.git/hooks';

gulp.task('install:hooks', function() {
  fs.readdirSync(HOOK_DIR).forEach(function(name) {
    var hookPath = Path.resolve(HOOK_DIR, name);
    var gitPath = Path.resolve(GIT_DIR, name);
    fs.copySync(hookPath, gitPath);
    fs.chmodSync(gitPath, '777');
  })
})

gulp.task('build', function() {
  console.log('normal build process running...')
})