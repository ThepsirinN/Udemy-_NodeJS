const fs = require('fs')
const Cart = require('./cart')

// for mariaDB
const db = require('../util/db')

module.exports = class Product {
    constructor (id,title, imgURL, description, price){
        this.id = id
        this.title = title
        this.imgURL = imgURL
        this.description = description
        this.price = price 
    }

    /* save(){
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
    } */

    save(){
        if(this.id){

        }
        else{
            return db.execute(`INSERT INTO products(title, price, imgURL, description) VALUES (?,?,?,?)`,
            [this.title, this.price, this.imgURL, this.description]
            )
        }
    }

    static fetchAll(){
        // if we decided to use promise in controller file
        return db.execute('select * from products')
        //if we decided to use promise in this file 
        /* db.execute('select * from products')
        // we can use array of row and fielddata
        // in mariaDB IT will return 1 item not all item. Thus we should use filter at the end of this method
        .then(([row,fieldData])=>{
            console.log(row)
            callback(row)
        })
        .catch((err)=>{
            console.log(err)
        }) 
        */
        // we can use result and filter
        /* .then(result=>{
            callback(result.filter(index => index !== 'meta'))
        })
        */
    }

/*     static fetchById(id,callback){
        getProductFromFile((products =>{
            const product = products.find(p=> p.id === id)
            callback(product)
        }))
    } */

    static fetchById(id){
        /* return db.execute(`select * from products where id=${id}`) */
        return db.execute(`select * from products where id = ?`,[id])
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

