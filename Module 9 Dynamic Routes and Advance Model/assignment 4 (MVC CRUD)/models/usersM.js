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
    constructor (id,username, imgURL, password) {
        this.id = id
        this.Username = username
        this.IMGURL = imgURL
        this.Password = password
    }

    save(){
            getUserFromFile((usr) =>{
                if(this.id){
                    const userFile = usr
                    const existingUserIndex = userFile.findIndex(usre => usre.id === this.id)
                    if (existingUserIndex !== -1){
                        userFile[existingUserIndex].id = this.id
                        userFile[existingUserIndex].Password = this.Password
                        userFile[existingUserIndex].Username = this.Username
                        userFile[existingUserIndex].IMGURL = this.IMGURL
                    }
                    // for small of dataset 
                    /* for(var i in userFile){
                        if(userFile[i].id === this.id){
                            userFile[i].id = this.id
                            userFile[i].Password = this.Password
                            userFile[i].Username = this.Username
                            userFile[i].IMGURL = this.IMGURL
                        }
                    } */
                    fs.writeFile(p,JSON.stringify(userFile),(err)=>{
                        if(err){
                            console.log(err)
                        }
                    })
                    /* const existingUserIndex = userFile */
                }else{
                    this.id = Math.floor(Math.random() * 1000).toString()
                    usr.push(this)
                    // fs.writeFile( file, data, options, callback )
                    fs.writeFile(p,JSON.stringify(usr),(err)=>{
                        if(err){
                            console.log(err)
                        }
                    })
                }
            })
    }

    static getUser(callback){
        getUserFromFile(callback)
    }

    static getUserById(id,callback){
        fs.readFile(p,(err,filename)=>{
            if(err){
                callback([])
            }else{
                const userDetail = JSON.parse(filename)
                let specificUser
                const existingUserIndex = userDetail.findIndex(usr => usr.id === id)
                console.log(existingUserIndex)
                    if (existingUserIndex !== -1){
                        specificUser = userDetail[existingUserIndex]
                    }
                /* for(var i of userDetail){
                    if(i.id === id){
                        specificUser = i
                    }
                } */
                callback(specificUser)
            }
        })
    }

    static deleteUserById(id){
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                return
            }
            const userFile = JSON.parse(fileContent)
            const existingUserIndex = userFile.findIndex(usr => usr.id === id)
            let updateDeleteUser
            if(existingUserIndex !== -1){
                updateDeleteUser = userFile.filter(usre=> usre.id !== id)
            }
            fs.writeFile(p,JSON.stringify(updateDeleteUser),(err)=>{
                if(err){
                    console.log(err)
                }
            })

        })
    }
}