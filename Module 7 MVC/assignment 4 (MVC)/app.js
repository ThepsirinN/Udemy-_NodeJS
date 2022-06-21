const express = require('express')
const app = express()
const path = require('path')

const bodyparser = require('body-parser')

const homeR = require('./routes/home')
const userR = require('./routes/user')

const errorController = require('./controllers/error')


app.set('view engine','ejs')
app.set('views','views') 

app.use(bodyparser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,"public")))

app.use(homeR.routes)
app.use('/users',userR)

app.use(errorController.get404Error)

app.listen(4000,'localhost')