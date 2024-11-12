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
  console.log("Connected!");
  //Insert a record in the "customers" table:
  var sql = "INSERT INTO customers (name, address) VALUES ('Trinity Software Center', 'Deduako')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});