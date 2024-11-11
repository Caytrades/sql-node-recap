var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "",
    database: "mydb"
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