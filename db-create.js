const mysql = require('mysql')
require('dotenv').config()

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected")
    con.query("CREATE DATABASE workdb", (err, result) => {
        if (err) throw err;
        console.log("Database Created")
    })
})