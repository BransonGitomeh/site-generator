var request = require('request');

var fs = require('fs');

module.exports = function() {
	request('http://localhost:3000', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body) // Show the HTML for the Google homepage.
			fs.writeFile("./output/index.html", body, function(err) {
				if (err) {
					return console.log(err);
				}

				console.log("The file was saved!");
			});
		}
	})
}