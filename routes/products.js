const express = require('express')
const router = express.Router()
const productsController = require('../controllers/products')

//GET
router.get('/products', productsController.list)
router.get('/products/:_id', productsController.show)

//POST
router.post('/products', productsController.create)

module.exports = router;