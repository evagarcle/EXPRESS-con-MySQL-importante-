const express = require('express')
const DatabaseController = require("../controllers/DatabaseController");
const router = express.Router();


// CREAR BASE DE DATOS
router.get('/create-db', DatabaseController.createDB)

// CREAMOS LAS TABLAS DE PRODUCTS, CATEGORIES Y LA INTERMEDIA
router.get('/create-tables', DatabaseController.createTables)


module.exports = router