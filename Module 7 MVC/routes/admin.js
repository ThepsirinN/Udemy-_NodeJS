const express = require('express')
const router = express.Router()
/* const path = require('path') */

const productsController = require('../controllers/products')

// array for storing POST data
/* const products = [] */

router.get('/add-product',productsController.getAddProduct)

router.post('/add-product',productsController.postAddProduct)

/* module.exports = router */
exports.routes = router
// or module.exports = router // and change the admin file route
//exports.products = products