const express = require("express")
const CategoryController = require("../controllers/CategoryController");
const router = express.Router();


// AÑADIMOS UNA CATEGORÍA

// router.post('/add', ProductController.add)

router.post('/add', CategoryController.add)
router.put('/update/id/:id', CategoryController.update)
router.get('/get-all', CategoryController.getAll)          
router.get('/id/:id', CategoryController.getById)



module.exports = router