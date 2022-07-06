const express = require('express')
const router = express.Router()

/* const path = require('path')
const rootDir = require("../util/path")

const adminData = require('./admin') */
const shopController = require('../controllers/shop')


router.get('/',shopController.getIndex)

router.get('/products',shopController.getProduct)
// delete should appear before
// router.get('/products/delete',shopController.getProduct)

router.get('/products/:productID',shopController.getProductDetail)

router.get('/cart',shopController.getCart)

router.post('/cart',shopController.postCart)

router.get('/orders',shopController.getOrder)

router.get('/checkout',shopController.getCheckout)

router.post('/delete-cart-item',shopController.postDeleteCart)

module.exports = router