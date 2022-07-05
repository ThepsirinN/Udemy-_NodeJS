const express = require('express')
const router = express.Router()

const path = require('path')
const rootDir = require('../utils/path')

const homeController = require('../controllers/users')

router.get("/",homeController.getUser)
router.get("/view-detail/:userID",homeController.getUserById)

module.exports = router