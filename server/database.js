// get the client
const mysql = require('mysql2');

// create the connection to database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'example',
  database: 'mysql',
  port: '3307'
}).promise()

console.log("connection to database ");

// ici je défini touutes les requètes vers la bdd pour tout les servives et modules 

module.exports = {
    pool
  }

//   export async function getNotes() {
//   const [rows] = await pool.query("SELECT * FROM notes")
//   return rows
// }

// export async function getNote(id) {
//   const [rows] = await pool.query(`
//   SELECT * 
//   FROM notes
//   WHERE id = ?
//   `, [id])
//   return rows[0]
// }

// export async function createNote(title, contents) {
//   const [result] = await pool.query(`
//   INSERT INTO notes (title, contents)
//   VALUES (?, ?)
//   `, [title, contents])
//   const id = result.insertId
//   return getNote(id)
// }
 
