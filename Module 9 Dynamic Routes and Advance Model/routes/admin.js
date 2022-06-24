const express = require('express')
const router = express.Router()
/* const path = require('path') */

const AdminProductsController = require('../controllers/admin')

// array for storing POST data
/* const products = [] */

router.get('/add-products',AdminProductsController.getAddProduct)

router.get('/products',AdminProductsController.getProductList)

router.post('/add-products',AdminProductsController.postAddProduct)

/* module.exports = router */
exports.routes = router
// or module.exports = router // and change the admin file route
//exports.products = products