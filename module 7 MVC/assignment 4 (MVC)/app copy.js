const express = require('express')
const app = express()
const path = require('path')

const bodyparser = require('body-parser')

const homeR = require('./routes/home')
const userR = require('./routes/user')


app.set('view engine','ejs')
app.set('views','views') 

app.use(bodyparser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,"public")))

app.use(homeR.routes)
app.use('/users',userR)

app.use((req, res, next)=>{
    res.status(404).render('404',{docTitle : "Error 404!", Css:'/css/main.css',active : ''})
})

app.listen(4000,'localhost')