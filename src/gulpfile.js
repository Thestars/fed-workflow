var gulp = require('gulp');
var fileInclude = require("gulp-file-include");
var exec = require('child_process').exec;
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');

var paths = {
    html: [
        "*.html",
    ],
    images: [
        "images/*"
    ],
    js: [
        "scripts/**/*.js",
    ],
    sass: [
        "sass/**/*.scss",
    ],
    font: [
        "fonts/*.ttf"
    ]
};

var output = "../build"; // 文件构建输出地址
var dist = "../test/public";
var release = "/release"; // release目录

/**
 *  Task 
 */
gulp.task('images', function() {
    gulp.src(paths.images)
        .pipe(gulp.dest(output + "/images"));
});

gulp.task('html', function() {
    gulp.src(paths.html)
        .pipe(fileInclude())
        .pipe(gulp.dest(output));
});

gulp.task('js', function() {
    gulp.src(paths.js)
        .pipe(gulp.dest(output + "/js"));
});

gulp.task('font', function() {
    gulp.src(paths.font)
        .pipe(gulp.dest(output + "/css/fonts"));
});

gulp.task('css', function() {
    exec("sass --watch ./styles:"+output+"/css", function(err, stdout, stderr) {
        if (err) console.log("gulp.sass error:" + err);
    });
});

// =============压缩合并build资源============== //
gulp.task('release', function() {
    gulp.src(output+"/*.html")
        .pipe(useref())
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulpif('*.js', uglify({
            mangle: false
        })))
        .pipe(gulp.dest(release));
});

// =============拷贝到server public目录，并运行server============== //
gulp.task('server', function() {
    gulp.src("../build/**/*")
    .pipe(gulp.dest("../public"));
});

// 默认构建
gulp.task('default', ['images', 'css', 'html', 'js', 'font'], function() {
    gulp.watch(paths.sass, ['css']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.js, ['js']);
});