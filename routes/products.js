const express = require('express')
const ProductController = require("../controllers/ProductController");
const router = express.Router();


// AÑADIMOS UN PRODUCTO A LA TABLA PRODUCTOS

router.post('/add', ProductController.add)
router.put('/update/id/:id', ProductController.update)
router.get('/get-all', ProductController.getAll)
router.get('/get-all-with-categories', ProductController.getAllWithCategories)
router.get('/id/:id', ProductController.getById)
router.get('/get-all-sort-desc', ProductController.getAllSortDesc)
router.get('/name/:name', ProductController.getByName)
router.delete('/delete/id/:id', ProductController.deleteById)

module.exports = router