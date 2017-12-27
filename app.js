var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session)
var errHandler = require('./utils/errhandler')
var mongoose = require('mongoose');
var index = require('./routes/index');
var users = require('./routes/users');
var register = require('./routes/register')
var product = require('./routes/product')
var login = require('./routes/login')
var app = express();
var url = require('./config/mongodbConfig').url;

require('./model/org')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ 
    // mongooseConnection: mongoose.connection,
    url: url,
    ttl: 1 * 24 * 60 * 60 // = 14 days. Default
   })
}))


app.use('/', index);
app.use('/users', users);
app.use('/register', register);
app.use('/product', product);
app.use('/login', login);

app.use(errHandler.err404);
app.use(errHandler.errhandler);

module.exports = app;
