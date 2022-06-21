const express = require('express')
const router = express.Router()

const path = require('path')
const rootDir = require('../utils/path')

const userController = require('../controllers/users')

router.get("/",userController.getHome)

router.post("/", userController.postHome)

exports.routes = router