const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const path = require('path')

const userRouter = require('./routes/user')
const homeRouter = require('./routes/home')

const rootDir = require('./utils/path')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(rootDir,'public')))

app.use('/users',userRouter)
app.use(homeRouter)

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})

app.listen(4000,'localhost')