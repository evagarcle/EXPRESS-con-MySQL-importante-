const mysql = require('mysql2')
const DB_NAME = 'expressDB'

const db = mysql.createConnection({
  host: "localhost", 
  user: "root2", 
  password: "mysql",
  database: DB_NAME
})
db.connect()


module.exports = db