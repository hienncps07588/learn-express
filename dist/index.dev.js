"use strict";

var express = require('express');

var cookieParser = require('cookie-parser');

var userRouter = require('./router/user.router');

var authRouter = require('./router/auth.router');

var authMiddlewares = require('./middlewares/auth.middlewares');

var app = express();
var port = 3000;
app.use(express.json()); // for parsing application/json

app.use(express.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded

app.use(cookieParser());
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', function (req, res) {
  res.render('index', {
    name: 'Hiến Nguyễn'
  });
});
app.use('/auth', authRouter);
app.use('/users', authMiddlewares.requireAuth, userRouter);
app.listen(port, function () {
  console.log('Server learning on port' + port);
});