const express = require('express')
const router = express.Router()

const path = require('path')
const rootDir = require("../util/path")

const adminData = require('./admin')


router.get('/',(req, res, next)=>{
    console.log("/")
    console.log(adminData.products)
    const products = adminData.products
    /* res.sendFile(path.join(rootDir,'views','shop.html')) */
    res.render('shop',{prods : products, docTitle: 'Shop', path:'/'})
    res.render('shop',{prods : products, docTitle: 'Shop', path:'/', hasProduct : prods.length > 0})
})

module.exports = router