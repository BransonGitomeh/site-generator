# What is this?
Its express server that uses express-handlebars to make html output. then the responce is picked by request.js and written to an index.html file vis simple fs

Then this index.html file in the output folder can be put into a static server and serve forever if you wish

```
$ clone ....
$ npm install --verbose
$ npm start
```

# routing
Every express route should respond with a full page maybe using `res.render('foo');` if foo is the page
`/` creates an `index.html` page on the root of output by default

Nested routes are represented using nested folders ie `/foo/bar` route will make `/foo/bar.html` with foo being a folder

All the generated files are gzipped by default since its a good practise to  serve minified html. lol
