//const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const rootDir = require("./util/path")



// parse application/x-www-form-urlencoded
// extended for nested obj
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))
// or app.use('/public',express.static(path.join(__dirname,"public")))  and add public before css (not safe)
// or app.use('/pub',express.static(path.join(__dirname,"public")))  and add pub

// obj not function
app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use((req, res, next)=>{
    /* res.status(404).sendFile(path.join(__dirname,'views','404.html')) */
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})


// const server = http.createServer(app)
// server.listen(4000,"localhost")
app.listen("4000","localhost")
