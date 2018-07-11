var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var log4js = require('log4js');
var domain = require('domain');
var ejs = require('ejs');

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

log4js.configure({
  appenders: [
  	{ type: 'console' },
  	{
  	  	type: 'file',
  	  	filename: 'logs/log.log',
  	  	pattern: "_yyyy-MM-dd",
  	  	maxLogSize: 5242880,//5M
  	  	backups:3,
  	  	category: 'admin'
  	}
  ],
  replaceConsole: true,
  levels: { admin:'INFO' }
});
var logger = log4js.getLogger('admin');
app.use(log4js.connectLogger(logger, {level:log4js.levels.INFO,format:':method :status :url :response-time ms'}));
global.LOGGER = logger;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
	var d = domain.create();
	d.on('error',function(err){
		err.status = 500;
		d.dispose();
		next(err);
	});
	d.add(req);
	d.add(res);
	d.run(next);
});

app.use('/', indexRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
