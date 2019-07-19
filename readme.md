# What is this?
Its express server that uses express-handlebars to make html output. then the responce is picked by request.js and written to an index.html file via the node js fs api

Then this index.html file in the output folder can be put into a static server and serve forever if you wish

```
$ clone ....
$ yarn
$ yarn start
```

# routing
Every express route should respond with a full page maybe using `res.render('foo');` if foo is the page
`/` creates an `index.html` page on the root of output by default

Nested routes are represented using nested folders ie `/foo/bar` route will make `/foo/bar.html` with foo being a folder

When linking from one page to another just refer to the root file as ussual ie, `foo` will use `href="foo/bar.html"` to call the other page into view.

All the generated files are gzipped by default since its a good practice to serve minified html for good perf

# You have access partials, layout and other cool things that make work easy whgen using this setup to generate your site

please refer to https://github.com/ericf/express-handlebars for complete docs.
