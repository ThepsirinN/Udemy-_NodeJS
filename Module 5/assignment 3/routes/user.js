const express = require('express')
const router = express.Router()

const path = require('path')
const rootDir = require('../utils/path')

router.get('/',(req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'user.html'))
})

router.post('/',(req, res, next)=>{
    console.log(req.body)
    res.sendFile(path.join(rootDir, 'views', 'user.html'))
})

module.exports = router