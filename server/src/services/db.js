const mysql = require("mysql2");
const con = mysql.createConnection({
  host: "127.0.0.1",
  database: "48h",
  user: "root",
});

con.connect();
module.exports = con;
