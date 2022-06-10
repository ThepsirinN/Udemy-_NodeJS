const http = require('http')


/* function rqListener(req, res){}
http.createServer(rqListener) */
/* const server = http.createServer((req,res)=>{
    // console.log(req)
    console.log(req.url, req.method, req.headers)
    // process.exit()    
    // same code in requestHanle function
}) */

const rounter = require('./rount') 
// import from multiple file
const server = http.createServer(rounter)

server.listen(4000,"localhost")
