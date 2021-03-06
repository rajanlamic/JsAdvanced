/**
 * Created by Rajan on 11/11/2015.
 */

"use strict";

var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var browserify = require("gulp-browserify");


gulp.task("build", function() {
    return gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel({
            "presets": ["es2015"]
        }))
        .pipe(concat("all.js"))
        .pipe(browserify(
            {
                debug: true
            }
        ))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
});

gulp.task('watch', ['build'], function() {
    gulp.watch('src/*.js', ['build']);
});

gulp.task('default', ['watch']);