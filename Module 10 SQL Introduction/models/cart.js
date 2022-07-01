const fs = require('fs')
const path = require('path')
const rootDir = require('../util/path')

const ProductModule = require('./product')

//const products = []
const p = path.join(rootDir, 'data', 'cart.json')

module.exports = class Cart {
    static addProduct(id,productPrice){
        fs.readFile(p,(err, fileContent)=>{
            // simulate json file
            let cart = {product:[], totalPrice:0}
            // if we found the file let cart equal to file content
            if(!err){
                cart = JSON.parse(fileContent)
            }
            // Analyze the cart => Find existing product
            const existingProductIndex = cart.product.findIndex(prod => prod.id === id)
            // get the product by index
            const existingProduct = cart.product[existingProductIndex]

            let updatedProduct
            if(existingProduct){
                updatedProduct = { ...existingProduct }
                updatedProduct.qty += 1
                cart.product = [ ...cart.product ]
                // update cart by overwrite
                cart.product[existingProductIndex] = updatedProduct
            }else{
                // if not exist generate the new one
                updatedProduct = { id:id, qty:1}
                // old plus the new one
                cart.product = [ ...cart.product ,updatedProduct]
            }
            cart.totalPrice += +productPrice
            
            fs.writeFile(p,JSON.stringify(cart),(err)=>{
                if(err){
                    console.log(err)
                }
            })
        })
    }

    static deleteCartProduct(id,productPrice) {
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                return;
            }
            const updateCart = { ...JSON.parse(fileContent) }
            const product = updateCart.product.find(prod => prod.id === id)
            if(!product){
                return
            }
            const productQty = product.qty
            updateCart.product = updateCart.product.filter(prod => prod.id !== id)
            updateCart.totalPrice -= (productQty*productPrice)

            fs.writeFile(p,JSON.stringify(updateCart),(err)=>{
                if(err){
                    console.log(err)
                }
            })
        })
    }

    static getCart(callback){
        fs.readFile(p,(err,fileContent)=>{
            const cart = JSON.parse(fileContent)
            if(err){
                callback(null)
            }else{
                callback(cart)
            }

        })
    }


    constructor(){
        this.product =[]
        this.totalPrice = 0
    }


}