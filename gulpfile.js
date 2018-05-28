var es = require('event-stream');
//var fs = require('fs');
//var path = require('path');

var gulp = require('gulp');
var zip = require('gulp-zip');
var del = require('del');

var sources = [
	'index.js',
	'node_modules/**/*',
	'package.json'
];

gulp.task('default', function() {
	del('./dist/*');
	var streams = [];
	require('./functions/functions.json').forEach((fn) => {
		var fnDir = './functions/' + fn;
		process.chdir(fnDir);
		var stream = gulp
			.src(sources, {base: '.'})
			.pipe(zip(fn + '.zip'))
			.pipe(gulp.dest('../../dist'));
		streams.push(stream);
	});
	return es.concat(streams);
});

/*
var getFunctionNames = (dir) => {
	return fs.readdirSync(dir).reduce((a, name) => { 
		if (fs.lstatSync(path.join(dir, name)).isDirectory()) {
			a.push(name);
		}
		return a;
	}, []);
};
*/