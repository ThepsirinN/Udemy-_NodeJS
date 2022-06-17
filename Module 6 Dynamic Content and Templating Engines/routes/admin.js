const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require("../util/path")

// array for storing POST data
const products = []

router.get('/add-product',(req, res, next)=>{
    console.log("/add-product")
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    // res.sendFile(path.join(rootDir,'views','add-product.html'))
    res.render('add-product',{docTitle:"Admin", path:'/admin/add-product'})
    // for handlebars
    // res.render('add-product',{docTitle:"Admin", path:'/admin/add-product',activeprod : true, formCSS : true})
    // for ejs
    // res.render('add-product',{docTitle:"Admin", path:'/admin/add-product'}) 
})

router.post('/add-product',(req, res, next)=>{
    console.log(req.body)
    products.push({title : req.body.title})
    res.redirect('/')
})

/* module.exports = router */
exports.routes = router
exports.products = products