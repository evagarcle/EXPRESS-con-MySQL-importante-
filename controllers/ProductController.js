const db = require('../config/database')


const ProductController = {
  add (req, res) {
    
    let sqlNewProduct = `INSERT INTO products (name, description, price) values ('${req.body.name}', '${req.body.description}', ${req.body.price})`
    db.query(sqlNewProduct, (err, result)=>{
      if (err) throw err
      console.log(result)

      let sqlProductCategory = `INSERT INTO products_categories (products_id, categories_id) values `
      if (typeof req.body.categories_id === 'object'){

        req.body.categories_id.forEach((category_id) => {
         sqlProductCategory += `(${result.insertId}, ${category_id}),`
        

        })
        sqlProductCategory = sqlProductCategory.slice(0, -1) // eliminar la coma
      }
      console.log(sqlProductCategory)
      db.query(sqlProductCategory, (err2, result2)=>{
        if (err2) throw err2
        console.log(result2)
      })
      res.status(201).send(
          {
            "id": result.insertId,
            "name": req.body.name,
            "description": req.body.description,
            "price": req.body.price
          }
        )
    })
  },
  update (req, res) {

    if (typeof req.body.name === 'undefined' && typeof req.body.description === 'undefined') {
      res.status(400).send('name and description are missing')
    }

    let sqlUpdateProduct = `UPDATE products SET `
    if (typeof req.body.name !== 'undefined') {
      sqlUpdateProduct += `name = "${req.body.name}",`
    }
    if (typeof req.body.description !== 'undefined') {
      sqlUpdateProduct += `description = "${req.body.description}"`
    }
    if (sqlUpdateProduct.charAt(sqlUpdateProduct.length - 1) === ",") {
      sqlUpdateProduct = sqlUpdateProduct.slice(0, -1)
    }
    sqlUpdateProduct += ` WHERE id=${req.params.id}`

    db.query(sqlUpdateProduct, (err, result)=>{
      if (err) throw err
      console.log(result)
      res.status(201).send(
        {
          "name": req.body.name,
          "description": req.body.description
        }
      )
    })
  },
  getAll (req, res) {
    let sqlSelectAllProducts = `SELECT * FROM products;`
    db.query(sqlSelectAllProducts, (err, result)=>{
      if (err) throw err
      console.log(result)
      res.status(201).send(result)
    })
  },
  getAllWithCategories (req, res) {
    let sqlGetAllProductsWithCategories = `SELECT 
    p.id, p.name, c.id AS categoryId, c.name
    FROM expressdb.products p
    LEFT JOIN expressdb.products_categories pc
      ON pc.products_id = p.id
    LEFT JOIN expressdb.categories c
      ON pc.categories_id = c.id;`
    db.query(sqlGetAllProductsWithCategories, (err, result)=>{
      if (err) throw err
      console.log(result)
      res.status(201).send(result)
    })
  },
  getById (req, res) {
    let sqlGetProductById = `SELECT * FROM products WHERE id=${req.params.id}`
    db.query(sqlGetProductById, (err, result)=>{
      if (err) throw err
      console.log(result)
      if (!result.id) {
        res.status(404).send('The requested product does not exist')
      }
      res.status(201).send(result)
    })
  },
  getAllSortDesc (req, res){
    let sqlGetAllSortDesc = `SELECT * FROM products ORDER BY id DESC;`
    db.query(sqlGetAllSortDesc, (err, result)=>{
      if (err) throw err
      console.log(result)
      res.status(201).send(result)
    })
  },
  getByName (req, res) {
    let sqlGetProductByName = `SELECT * FROM products WHERE name="${req.params.name}";`
    db.query(sqlGetProductByName, (err, result)=>{
      if (err) throw err
      console.log(result)
      if(!result.id){
        res.status(404).send('No products found with this name')
      }
      res.status(201).send(result)
    })
  },
  deleteById (req, res) {
    
    let sqlDeleteProductsCategoryId = `DELETE FROM products_categories WHERE products_id = ${req.params.id};`
    db.query(sqlDeleteProductsCategoryId, (err, result)=>{
      if (err) throw err
      console.log(result)
      res.status(201).send(result)
    })
    let sqlDeleteProductById = `DELETE FROM products WHERE id=${req.params.id};`
    db.query(sqlDeleteProductById, (err, result)=>{
      if (err) throw err
      console.log(result)
      res.status(201).send(result)
    })
  }
}


module.exports = ProductController