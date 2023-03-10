var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./lib/connectMongoose') // Para establecer conexion a mongoose

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.locals.title = "NodePop"

//  Rutas del API 
app.use('/api/anuncios', require('./routes/api/anuncios')) 

// Rutas del Web side
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
// comprobar si es un error de validacion
  if (err.array) {
  //const errorInfo = err.array({ onlyFirstError: true })[0]
  const errorInfo = err.errors[0]
  err.message = `Error en ${errorInfo.location}, parametro: ${errorInfo.param}, ${errorInfo.msg}`
  err.status = 422
}
  res.status(err.status || 500);

// si lo que ha fallado es una peticion al API
// devuelvo el error en formato JSON
  if  (req.originalUrl.startsWith('/api/')) {
        res.json({ error: err.message })
        return
    }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
 
  res.render('error');
});

module.exports = app;
