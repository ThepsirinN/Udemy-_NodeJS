const http = require('http')
const rounter = require('./rount')
const server = http.createServer(rounter)
server.listen(3000,"localhost")