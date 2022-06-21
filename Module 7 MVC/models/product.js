const fs = require('fs')
const path = require('path')
const rootDir = require('../util/path')

//const products = []
const p = path.join(rootDir, 'data', 'product.json')

const getProductFromFile = (callback) =>{
    fs.readFile(p,(err, fileContent)=>{
        if(err){
            callback([])
        }
        // return for display use json obj not str
        callback(JSON.parse(fileContent))
    })
}

module.exports = class Product {
    constructor (title){
        this.title = title
    }

    save(){
        /* products.push(this) */
        /* const p = path.join(rootDir, 'data', 'product.json')
        fs.readFile(p,(err, fileContent)=>{
            let products = []
            if(!err){
                // JSON.parse() -> some JSONstr to JSONobj
                // combined if exists
                products = JSON.parse(fileContent)
            }
            products.push(this)
            // JSON.stringify() -> some JSONobj to JSONstr 
            // write some str to file
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err)
            })
        }) */
        // products mean [] or JSON.parse(fileContent) in getProductFromFile bcz this function is eq to callback
        getProductFromFile((products)=>{
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err)
            })
        })
    }

    static fetchAll(callback){
        getProductFromFile(callback)
        //return products
    }
}


/* 
const x = (callback)=>{
	callback([123,456,789])
}

x((product)=>{
	console.log(product)
})*/

/* callback mean (product)=>{
	console.log(product)

    // and product mean parameter and eq to [123,456,789]
}*/

