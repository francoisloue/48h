const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "48h",
});

con.connect();
module.exports = con;
