"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
var minifyCSS = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var changed = require("gulp-change");

var SCSS_SRC = "./src/assets/scss/**/**.scss";
var SCSS_DEST = "./src/assets/css";

gulp.task("styles", () => {
  return gulp
    .src(SCSS_SRC)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(SCSS_DEST));
});

gulp.task("watch", () => {
  gulp.watch(SCSS_SRC, done => {
    gulp.series(["styles"])(done);
  });
});

gulp.task("default", gulp.series(["watch"]));
