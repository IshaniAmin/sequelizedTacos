// // Set up MySQL connection.
// var mysql = require("mysql");
// var app = require('../server');

// console.log('--------------the environment we are using----------------');
// console.log(app.settings.env);
// console.log('--------------the environment we are using----------------');

// if (app.settings.env == 'development'){
//   var connection = mysql.createConnection({
//     port: 8889,
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "taco_db"
//   });
// }else {
//   var connection = mysql.createConnection(process.env.JAWSDB_URL);
// }

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection for our ORM to use.
// module.exports = connection;

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("taco_db", "root", "root", {
  host: "root",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
