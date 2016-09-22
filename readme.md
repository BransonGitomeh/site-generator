an express server uses express-handlebars to make html output. then the responce is picked by request.js and written to an index.html file vis simple fs

then this index.html file in the output folder can be put into a static server and serve forever if you wish

```
$ clone ....
$ npm install --verbose
$ npm start
```

more complex site setup with routing comming soon