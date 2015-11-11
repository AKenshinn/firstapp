var express = require('express');// use express framework
var path = require('path'); //use path
var favicon = require('serve-favicon'); //use favicon
var logger = require('morgan'); //use morgan for view HTTP request logger
var cookieParser = require('cookie-parser'); // use to store cookie
var bodyParser = require('body-parser'); //use body-parser for parser JSON data

//set using file
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); //set dev logger
app.use(bodyParser.json()); //set JSON parser
app.use(bodyParser.urlencoded( { extended : false } ));// set urlencoded to UTF-8
app.use(cookieParser()); //set cookie parser
app.use(express.static(path.join(__dirname, 'public'))); //set public path

//set controller
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
