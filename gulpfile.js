const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      browser = require('browser-sync');

/*
sass
 */
gulp.task('sass', () => {
  gulp.src('./src/sass/*scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dest/css/'));
});



/*
browserSync
 */
gulp.task("browserSync", () => {
  browser({
    server: {
      baseDir: "." // ルートとなるディレクトリを指定
    }
  });
  gulp.watch("./src/**", () => {
    browser.reload();
  });
});


/*
watch
 */
gulp.task('watch', () => {
  gulp.watch('./index.html');
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});


gulp.task('default', ['browserSync','watch','sass']);


