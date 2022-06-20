const express = require('express')
const router = express.Router()

const path = require('path')
const rootDir = require('../utils/path')

const homeR = require("./home")
const homeRdata = homeR.postJS

router.get("/",(req, res, next)=>{
    console.log(homeRdata)
    res.render(path.join(rootDir, 'views', 'users.ejs'),{data:homeRdata,docTitle : "Users", Css:'css/main.css', active:"users"})
})

module.exports = router