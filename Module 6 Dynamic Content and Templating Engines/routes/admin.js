const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require("../util/path")


/* router.use((req, res, next)=>{
    console.log("In the middleware")
    next() // Go to the next middleware
}) */

//router.use('/add-product',(req, res, next)=>{
router.get('/add-product',(req, res, next)=>{
    console.log("/add-product")
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})

router.post('/add-product',(req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router