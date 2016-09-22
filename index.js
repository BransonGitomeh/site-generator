var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/foo', function(req, res) {
	res.render('foo');
});

app.get('/foo/bar', function(req, res) {
	res.render('foo');
});

app.listen(3000, function(error) {
	console.log("server started at 3000")

	// call the generator
	require("./site_generator")(app)
});