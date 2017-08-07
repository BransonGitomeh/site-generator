var express = require('express');
var exphbs = require('express-handlebars');
var compression = require('compression');
var minifyHTML = require('express-minify-html');

var app = express();

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(minifyHTML({
    override:      true,
    htmlMinifier: {
        removeComments:            true,
        collapseWhitespace:        true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes:     true,
        removeEmptyAttributes:     true,
        minifyJS:                  true
    }
}));



app.get('/index.html', function(req, res) {
	res.render('home');
});

app.get('/foo.html', function(req, res) {
	res.render('foo');
});

app.use(express.static(__dirname + '/output'));

app.listen(3000, function(error) {
	console.log("server started at 3000")

	// call the generator
	require("./site_generator")(app)
});