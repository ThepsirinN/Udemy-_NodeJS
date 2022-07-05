const express = require('express')
const router = express.Router()

const path = require('path')
const rootDir = require('../utils/path')

const adminController = require('../controllers/admin')

router.get("/admin-edit",adminController.getAdminEdit)
router.post("/edit-user",adminController.postAdminEditUser)
router.get("/edit-user/:userId",adminController.getAdminEditUser)
router.post('/delete-user',adminController.postAdminDeleteUser)

exports.routes = router