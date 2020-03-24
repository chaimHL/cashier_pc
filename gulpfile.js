var gulp = require('gulp')
var $ = require('gulp-load-plugins')()
var open = require('open')

gulp.task('js', function(){
	return gulp.src('src/js/*.js')
	.pipe($.concat('build.js'))
	.pipe(gulp.dest('dist/js/'))
	.pipe($.connect.reload())
})

gulp.task('less', function(){
	return gulp.src('src/less/*.less')
	.pipe($.less())
	.pipe(gulp.dest('src/css/'))
	.pipe($.connect.reload())
	
})

gulp.task('css', ['less'], function(){
	return gulp.src('src/css/*.css')
	.pipe($.concat('build.css'))
	.pipe(gulp.dest('dist/css'))
	.pipe($.rename({suffix: '.min'}))
	.pipe($.cleanCss({compatibility: 'ie8'}))
	.pipe(gulp.dest('dist/css'))
	.pipe($.connect.reload())
})

gulp.task('fileinclude', function() {
    gulp.src(['page/*.html'])//主文件
        .pipe($.fileInclude({
            prefix: '@@',//变量前缀 @@include
            basepath: './page/_include',//引用文件路径
            indent:true//保留文件的缩进
        }))
        .pipe(gulp.dest('./dist'))//输出文件路径
		.pipe($.connect.reload())
});
 
gulp.task('img', function () {
    gulp.src('src/img/**/*.{png,jpg,gif,*}')
        .pipe($.cache($.imagemin()))
        .pipe(gulp.dest('dist/img'))
		.pipe($.connect.reload())
});

gulp.task('default', ['js' ,'less', 'css', 'fileinclude', 'img'])

gulp.task('serve', ['default'], function(){
	$.connect.server({
		root: 'dist/',
		livereload: true,
		port: 5000
	})

	open('http://localhost:5000/')
	
	gulp.watch('src/js/*.js',['js'])
	gulp.watch(['src/css/*.css', 'src/less/*.less'], ['css'])
	gulp.watch(['page/_include/*.html', 'page/*.html'],['fileinclude'])
	gulp.watch('src/img/**/*',['img'])
})