//using mysql module
var mysql = require('mysql');

//set connection
var connection = mysql.createConnection({
  'host'     : 'localhost',
  'user'     : 'root',
  'password' : 'root',
  'database' : 'my_schema'
});

module.exports = connection; 