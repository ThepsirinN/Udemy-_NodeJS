const mariaDB = require('mariadb')
const pool = mariaDB.createPool({
    host: 'localhost', 
    user:'root', 
    password: '',
    database : `asm_4`,
    port : 3306
})

module.exports = pool