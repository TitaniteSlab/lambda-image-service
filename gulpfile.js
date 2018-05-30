var es = require('event-stream');
var path = require('path');

var gulp = require('gulp');
var zip = require('gulp-zip');
var del = require('del');

var sources = [
	'index.js',
	'index.html',
	'lib/**/*',
	'node_modules/**/*',
	'package.json'
];

gulp.task('default', function() {
	del('./dist/*');
	var streams = [];
	require('./functions/functions.json').forEach((fn) => {
		var fnDir = path.join(process.env.INIT_CWD, 'functions', fn);
		var stream = gulp
			.src(sources, {base: fnDir, cwd: fnDir})
			.pipe(zip(fn + '.zip'))
			.pipe(gulp.dest('./dist'));
		streams.push(stream);
	});
	return es.concat(streams);
});
