const mysql = require("mysql2");
const con = mysql.createConnection({
  host: "localhost",
  database: "48h",
  user: "root",
  port: "3308",
  password: "example"
});

con.connect();
module.exports = con;
