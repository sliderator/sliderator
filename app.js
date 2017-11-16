const http = require('http');
const express = require('express');
const app  = express();
const path = require('path');
//const fs = require('fs')
//const lyricParse = require('./parser.js');
const request = require('request');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const expressValidator = require('express-validator');
const routes = require('./routes/allRoutes.js')(app,path);
const toMarkdown = require('./toMarkdown.js');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(expressValidator());

app.locals.LP = require('./parser.js');
app.locals.REQUEST = request;

// var content = "Frosty Pookie Eddy Eddie  I said peter piper picker pannnnn dan is da man, da man with da plan d d ddddd Guilty Gear"
// var parse = app.locals.LP(content);
// console.log(parse);
// console.log(parse[0].join('').length)






//console.log(routes);
//console.log(app);

//app.get(routes.index[0], routes.index[1](path));
app.get(...routes.index);
app.post(...routes.index);
app.get(...routes.displaylyrics);
app.post(...routes.displaylyrics);
//app.get(...routes.showQuery);

app.listen(7777);
console.log('Server running at http://localhost:7777/');
