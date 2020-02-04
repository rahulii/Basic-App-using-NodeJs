var express = require('express');

var app  = express();

var todoController = require('./controllers/todoController');

//set ejs

app.set('view engine','ejs');

app.use(express.static('./public'));

//fire controller

todoController(app);

app.listen(3000);
