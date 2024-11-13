var mysql = require('mysql');
require('dotenv').config()

var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO customers (name, address) VALUES ('Jesse', 'Blue Village 1')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    /*Use the result object to get the id:*/
    console.log("1 record inserted, ID: " + result.insertId);
  });
});
