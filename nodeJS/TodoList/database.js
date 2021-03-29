const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "trongthang",
    password: "Thang3051997",
    database: "todoDB"
});

module.exports = con;