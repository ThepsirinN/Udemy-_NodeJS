const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: 'localhost', 
    user:'root', 
    password: '',
    database : `node-complete`,
    port : 3306
})

module.exports = pool