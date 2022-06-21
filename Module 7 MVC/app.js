//const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine','ejs')
app.set('views','views')    

const path = require('path')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

/* const rootDir = require("./util/path") */

const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))

app.use('/admin',adminData.routes)
app.use(shopRoutes)


app.use(errorController.error404)

app.listen("4000","localhost")