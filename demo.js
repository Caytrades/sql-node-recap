var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: ""
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected")
});