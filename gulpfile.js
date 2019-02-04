var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss = require('gulp-clean-css'),
    htmlMin = require('gulp-htmlmin'),
    jsUglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    imageminPngquant = require('imagemin-pngquant');
    
    






gulp.task('style', function(){
   return gulp.src('css/*.css')
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function(){
   return gulp.src('*.html')
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/'));
});


gulp.task('js', function(){
    return gulp.src('js/*.js')
        .pipe(jsUglify())
        .pipe(gulp.dest('dist/js'))
})

gulp.task('image', function(){
    return gulp.src('img/*.{png,jpeg,jpg,gif,svg}')
        .pipe(imagemin(
                [
                    imagemin.gifsicle(),
                    imagemin.jpegtran(),
                    imagemin.optipng(),
                    imagemin.svgo(),
                    imageminPngquant(),
                    imageminJpegRecompress()
                ]
        ))
        .pipe(gulp.dest('dist/img'))
});






















