const db = require('../config/database')

const DatabaseController = {
  createDB (req, res) {
    let sql = 'CREATE DATABASE expressDB'
    db.query(sql,(err, result)=>{
      if (err) throw err
      res.status(200).send('Database created...')
    })
  },
  createTables (req, res) {
    let sqlProducts = `CREATE TABLE products (
      id INT AUTO_INCREMENT,
      name VARCHAR(255), 
      description VARCHAR(255), 
      price FLOAT,
      PRIMARY KEY(id)
    )`
    let sqlCategories = `CREATE TABLE categories (
      id INT AUTO_INCREMENT,
      name VARCHAR(255), 
      description VARCHAR(255), 
      PRIMARY KEY(id)
    )`
    let sqlProductsCategories = `CREATE TABLE products_categories (
      id INT AUTO_INCREMENT, 
      products_id INT, 
      categories_id INT, 
      PRIMARY KEY(id), 
      FOREIGN KEY (products_id) REFERENCES products(id), 
      FOREIGN KEY (categories_id) REFERENCES categories(id)
    )`
      db.query(sqlProducts,(err,result)=> {
        if(err) throw err;
        console.log(result);
      })
  
      db.query(sqlCategories,(err,result)=> {
        if(err) throw err;
        console.log(result);
      })
  
      db.query(sqlProductsCategories,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.status(200).send('All tables created...')
      })
  }
}


module.exports = DatabaseController