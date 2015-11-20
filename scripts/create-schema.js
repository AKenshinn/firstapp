var mysql = require('mysql');
var config = {
  'host'     : 'localhost',
  'user'     : 'root',
  'password' : 'root',
};

var database = 'my_schema';
var table = 'users';

var connection = mysql.createConnection(config);

connection.query('CREATE DATABASE ' + database);

connection.query('CREATE TABLE `' + database + '`.`' + table + '` ( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `username` VARCHAR(20) NOT NULL, \
    `password` CHAR(60) NOT NULL, \
        PRIMARY KEY (`id`))'
);

console.log('Success: Database Created!')

connection.end();