var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var utilities = require("./helpers/utils.js");
var utils = new utilities();
const fileUpload = require('express-fileupload');

var indexRouter = require('./routes/index');

var app = express();


app.use(fileUpload);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  if(typeof err.status === "undefined")
  {
    err.status = 500;
  }
    utils.response({ status: err.status, message: err.message }, res);
});

module.exports = app;