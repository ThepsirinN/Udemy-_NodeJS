const express = require('express')
const router = express.Router()

const path = require('path')
const rootDir = require("../util/path")


router.get('/',(req, res, next)=>{
    /* console.log("/")
    res.send("<h1>hello world</h1>") */
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
    res.sendFile(path.join(rootDir,'views','shop.html'))
})

module.exports = router