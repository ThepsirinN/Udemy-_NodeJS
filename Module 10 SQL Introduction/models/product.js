const fs = require('fs')
const path = require('path')
const rootDir = require('../util/path')
const Cart = require('./cart')

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
    constructor (id,title, imgURL, description, price){
        this.id = id
        this.title = title
        this.imgURL = imgURL
        this.description = description
        this.price = price 
    }

    save(){
        getProductFromFile((products)=>{
            if(this.id){
                // find product index
                const existingProductIndex = products.findIndex(prod => prod.id === this.id)
                // call all product
                const updateProduct = [...products]
                // overwrite update product(with specific index) with this
                updateProduct[existingProductIndex] = this
                // overwrite the json file
                fs.writeFile(p,JSON.stringify(updateProduct),(err)=>{
                console.log(err)
                })
            } else {
                this.id = Math.floor(Math.random() * 1000).toString()
                products.push(this)
                fs.writeFile(p,JSON.stringify(products),(err)=>{
                    console.log(err)
                })
            }
            
        })
    }

    static fetchAll(callback){
        getProductFromFile(callback)
    }

    static fetchById(id,callback){
        getProductFromFile((products =>{
            const product = products.find(p=> p.id === id)
            callback(product)
        }))
    }
    
    static deleteByID(id){
        getProductFromFile((products =>{
            const product = products.find(prod => prod.id === id)
            // filter with out id
            const updataProductIndex = products.filter(prod => prod.id !== id)
            // overwrite it
            fs.writeFile(p,JSON.stringify(updataProductIndex),err=>{
                if(!err){
                    // ondelete cascade
                    Cart.deleteCartProduct(id,product.price)
                }
            })

        }))
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

