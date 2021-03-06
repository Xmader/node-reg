var path = require('path');
const exec = require('child_process').exec;

const basePath = path.join(process.env.WINDIR, 'system32', 'reg.exe');

exports.addKey = function(entry) {
	return new Promise(function(resolve, reject) {

		var query = basePath;
		query += ' add "' + entry.target + '"';
		query += ' /v ' + entry.name;
		query += ' /t ' + entry.type;
		query += ' /d ' + entry.value;
		query += ' /f';

		executeQuery(query).then(function(value) {
			resolve(value);
		}, function(error) {
			reject(error);
		});

	});
}

exports.getKey = function(entry) {
	return new Promise(function(resolve, reject) {

		var query = basePath;
		query += ' query "' + entry.target + '"';
		if(entry.name) {
			query += ' /v ' + entry.name;
		}
		if(entry.type) {
			query += ' /t ' + entry.type;
		}

		executeQuery(query).then(function(value) {
			resolve(value);
		}, function(error) {
			reject(error);
		});

	});
}

function executeQuery(query) {
	return new Promise(function(resolve, reject) {

		const child = exec(query, (error, stdout, stderr) => {
			if(error) {
				reject(error);
			} else {
				resolve(stdout);
			}
		});

	});
}
