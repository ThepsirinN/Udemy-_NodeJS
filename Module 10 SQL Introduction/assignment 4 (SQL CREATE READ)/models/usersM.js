const db = require('../utils/db')

module.exports = class User {
    constructor (id,username, imgURL, password) {
        this.id = id
        this.Username = username
        this.IMGURL = imgURL
        this.Password = password
    }

    save(){
        if(this.id){

        }else{
            return db.execute(`INSERT INTO users ( Username, IMGURL, Password) VALUES (?, ?, ?)`,
            [this.Username, this.IMGURL, this.Password])
        }
    }

    static getUser(){
        return db.execute(`SELECT * FROM users`)
    }

    static getUserById(id){
        return db.execute(`SELECT * FROM users WHERE id = ?`,[id])
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