const mysql = require('mysql2');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password  :'root',
  database : 'test'
});

const result = connection.query('SELECT * FROM `testTable`', function(err, rows, fields) {
    if(err) throw err;
    console.log(rows[0].Id);
});

console.log(result);

connection.end