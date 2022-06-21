const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/path')

const p = path.join(rootDir,'data','user.json')
/* *** if we use file, json file in data folder must init []. Unless, It'll show error Unexpected end of JSON input
at JSON.parse (<anonymous>) **** */
const getUserFromFile = (callback) => {
    fs.readFile(p,(err, fileContent) => {
        if(err){
            callback([])
        }
        callback(JSON.parse(fileContent))
    })
}

module.exports = class User {
    constructor (username) {
        this.Username = username
    }

    save(){
        getUserFromFile((usr) =>{
            usr.push(this)
            // fs.writeFile( file, data, options, callback )
            fs.writeFile(p,JSON.stringify(usr),(err)=>{
                if(err){
                    console.log(err)
                }
            })
        })
    }

    static getUser(callback){
        getUserFromFile(callback)
    }

}