var mysql = require('mysql')
require('dotenv').config()

var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected")
    var sql = 
    "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, (err) => {
        if (err) throw err;
        console.log("Table created")
    });
});