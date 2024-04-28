const db = require('../config/database')


const CategoryController = {
  add (req, res) {
    let sqlNewCategory = `INSERT INTO categories (name, description) values ('${req.body.name}', '${req.body.description}')`
    db.query(sqlNewCategory, (err, result)=>{
      if (err) throw err
      console.log(result)
      res.status(201).send(
        {
          "id": result.insertId,
          "name": req.body.name,
          "description": req.body.description
        }
      )
    })
  },
  update (req, res) {
    let sqlUpdateCategory = `UPDATE categories SET description = "${req.body.description}" WHERE id=${req.params.id}`
    db.query(sqlUpdateCategory, (err, result)=>{
      if (err) throw err
      console.log(result)
      res.status(201).send(
        {
          "description": req.body.description
        }
      )
    })
  },
  getAll (req, res) {
    let sqlSelectAllCategories = `SELECT * FROM categories;`
    db.query(sqlSelectAllCategories, (err, result)=>{
      if (err) throw err
      console.log(result)
      res.status(201).send(result)
    })
  },          
  getById (req, res) {
    let sqlGetCategoryById = `SELECT * FROM categories WHERE id=${req.params.id};`
    db.query(sqlGetCategoryById, (err, result)=>{
      if (err) throw err
      console.log(result)
      if (!result.id) {
        res.status(404).send('The requested category does not exist')
      }
      res.status(201).send(result)
    })
  }
}


module.exports = CategoryController