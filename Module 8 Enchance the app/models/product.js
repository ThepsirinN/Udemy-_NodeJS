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
    constructor (title, imgURL, description, price){
        this.title = title
        this.imgURL = imgURL
        this.description = description
        this.price = price 
    }

    save(){
        getProductFromFile((products)=>{
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err)
            })
        })
    }

    static fetchAll(callback){
        getProductFromFile(callback)
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

