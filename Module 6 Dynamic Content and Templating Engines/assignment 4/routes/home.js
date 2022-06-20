const express = require('express')
const router = express.Router()

const path = require('path')
const rootDir = require('../utils/path')

const postJSON = []

router.get("/",(req, res, next)=>{
    res.render(path.join(rootDir, 'views', 'home.ejs'),{docTitle : "Home", Css:'css/main.css', active:"home"})
})

router.post("/", (req,res,next)=>{
    console.log(req.body.Username)
    postJSON.push({Username : req.body.Username})
    res.redirect("/users")
})

exports.routes = router
exports.postJS = postJSON