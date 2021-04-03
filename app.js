var flash             = require('connect-flash');

var crypto            = require('crypto');

var passport          = require('passport');

var LocalStrategy     = require('passport-local').Strategy;

var connection        = require('./lib/dbconn');

var sess              = require('express-session');

var Store             = require('express-session').Store;
 
var BetterMemoryStore = require(__dirname + '/memory');

var store = new BetterMemoryStore({ expires: 60 * 60 * 1000, debug: true });

app.use(sess({

   name: 'JSESSION',

   secret: 'MYSECRETISVERYSECRET',

   store:  store,

   resave: true,

   saveUninitialized: true

}));