var request = require('request');

var fs = require('fs');

module.exports = function(app) {
	// console.log(app)
	app._router.stack.forEach(function(r) {
		if (r.route && r.route.path) {
			console.log(r.route.path)

			request(('http://localhost:3000' + r.route.path), function(error, response, body) {
				if (!error && response.statusCode == 200) {
					console.log(body) // Show the HTML for the Google homepage.
					fs.writeFile("./output/" + ( r.route.path == "/" ? "index" : r.route.path ) + ".html", body, function(err) {
						if (err) {
							return console.log(err);
						}

						console.log("The file was saved!");
					});
				}
			})
		}
	})

}