var mysql = require('mysql')
require('dotenv').config()

var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected")
});