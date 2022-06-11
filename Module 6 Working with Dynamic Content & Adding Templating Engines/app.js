const express = require('express')
const app = express()

app.get("/",(req, res, next)=>{
    console.log("hello From Module 6")
})

app.listen(4000,'localhost')