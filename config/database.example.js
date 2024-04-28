const mysql = require('mysql2')
const DB_NAME = 'expressDB'

const db = mysql.createConnection({
  host: "localhost", 
  user: "root", 
  password: "password",
  database: DB_NAME
})
db.connect()


module.exports = db