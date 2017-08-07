var request = require('request');
var filendir = require('filendir');
var fs = require('fs');

module.exports = function(app) {
	// console.log(app)
	app._router.stack.forEach(function(r) {
		if (r.route && r.route.path) {
			console.log(r.route.path)

			request(('http://localhost:3000' + r.route.path), function(error, response, body) {
				if (!error && response.statusCode == 200) {
					
					const filename = ("./output/" + (r.route.path == "/" ? "index" : r.route.path))

					filendir.wa(filename, body, function(err) {
						if (!err) {
							console.log(`File ${filename} written!`)
						}
					})
				}
			})
		}
	})

}