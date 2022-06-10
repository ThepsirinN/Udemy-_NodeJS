const express = require('express')
const app = express()

app.use("/users",(req, res, next) => {
    console.log("first middleware (/users)")
    res.send("<h1>first middleware (/users)</h1>")
    /* 
    if we want to go to next middleware use next()
    */
})


app.use("/",(req, res, next) => {
    console.log("second middleware (/)")
    res.send("<h1>second middleware (/)</h1>")
})

app.listen("4000","localhost")