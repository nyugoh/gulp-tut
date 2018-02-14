var $ = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var exec = require('gulp-exec');

var options = {
	continueOnError: false, // default = false, true means don't emit error event
	pipeStdout: false, // default = false, true means stdout is written to file.contents
	customTemplatingThing: "test" // content passed to lodash.template()
};
var reportOptions = {
	err: true, // default = true, false means don't write err
	stderr: true, // default = true, false means don't write stderr
	stdout: true // default = true, false means don't write stdout
}


// This is the default task and depends on watch
// meaning it will also trigger watch task.
$.task('default', ['watch']);

// Compile, concat, minify and error check js files
$.task('scripts', function() {
	$.src('src/app/assets/js/*.js')
	.pipe(concat('bundle.js'))
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe($.dest('src/app/dist/assets/js'))
});

// Compile sass to css
$.task('sass', function() {
	$.src('src/app/assets/css/*.scss')
	.pipe(sass())
	.pipe($.dest('src/app/dist/assets/css'))
});

// Watch for file changes in assets folder
$.task('watch', function() {
	// Clean the dist folder
	$.src('./src/*').pipe(exec('rm -rf ./src/app/dist'));
	$.watch(['src/app/assets/js/*.js', 'src/app/assets/css/*.scss'], ['scripts', 'sass']);
});
