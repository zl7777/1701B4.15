/*
 * @Author: mikey.zhanglei 
 * @Date: 2019-04-15 08:59:48 
 * @Last Modified by: mikey.zhanglei
 * @Last Modified time: 2019-04-15 09:08:44
 */
var gulp = require('gulp');
var server = require('gulp-webserver');
var miniCss = require('gulp-clean-css');
var miniScript = require('gulp-uglify');
var miniImg = require('gulp-imagemin');

//开启服务
gulp.task('webserver', () => {
    return gulp.src('./')
        .pipe(server({
            host: 'localhost',
            port: 8080,
            open: true

        }))
})

//压缩css
gulp.task('miniCss', () => {
    return gulp.src('./src/css/*.css')
        .pipe(miniCss())
        .pipe(gulp.dest('dist/css'))
})


//压缩js
gulp.task('miniScript', () => {
    return gulp.src('./src/js/*.js')
        .pipe(miniScript())
        .pipe(gulp.dest('dist/js'))
})

//压缩图片
gulp.task('miniImg', () => {
    return gulp.src('./src/image/*')
        .pipe(miniImg())
        .pipe(gulp.dest('dist/image'))
})

//监听
// gulp.task('watch',
//     gulp.watch('./src/css/*.css', gulp.series('css'))
// )