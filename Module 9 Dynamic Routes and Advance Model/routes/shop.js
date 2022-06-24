const express = require('express')
const router = express.Router()

/* const path = require('path')
const rootDir = require("../util/path")

const adminData = require('./admin') */
const shopController = require('../controllers/shop')


router.get('/',shopController.getIndex)

router.get('/products',shopController.getProduct)

router.get('/cart',shopController.getCart)

router.get('/orders',shopController.getOrder)

router.get('/checkout',shopController.getCheckout)

module.exports = router