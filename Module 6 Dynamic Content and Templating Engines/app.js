//const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//const expressHbs = require('express-handlebars')

//app.engine('handlebars',expressHbs({layoutsDir : 'views/layout/', defaultLayout : 'main-layout', extname : 'handlebars'}))
// app.set('view engine','handlebars')

// set view engine to pug
app.set('view engine','pug')
// set views folders
app.set('views','views')    


// ejs
// app.set('view engine','ejs')
// app.set('views','views')    

const path = require('path')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const rootDir = require("./util/path")

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))

/* app.use('/admin',adminRoutes) */
app.use('/admin',adminData.routes)
app.use(shopRoutes)

app.use((req, res, next)=>{
    // res.status(404).sendFile(path.join(rootDir,'views','404.html'))
    res.status(404).render('404',{docTitle : "Error 404!"})
})

app.listen("4000","localhost")