const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: ""
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected")
    con.query("CREATE DATABASE mydb", (err, result) => {
        if (err) throw err;
        console.log("Database Created")
    })
})