const ProductModel = require('../models/product')
const CartModel  = require('../models/cart')

exports.getProduct = (req, res, next)=>{
    /* ProductModel.fetchAll((products) => {
        res.render('shop/product-list',{prods : products, docTitle: 'Product', path:'/products'}) 
    }) */
    ProductModel.fetchAll()
    .then(result=>{
        res.render('shop/product-list',{prods : result.filter(index => index !== 'meta'), docTitle: 'Product', path:'/products'}) 
    })
    .catch((err)=>{
        console.log(err)
    })
}

exports.getProductDetail = (req, res, next) =>{
    // from get
    const productID = req.params.productID
    console.log(productID)
    /* ProductModel.fetchById(productID, (product)=>{
        console.log(product)
        res.render('shop/product-detail',{prods : product, docTitle: `Product ID : ${productID}`, path:`/products`})
    }) */
    ProductModel.fetchById(productID)
    .then((result)=>{
        // index 0 because it is array with 1 element. It will not show in ejs template
        res.render('shop/product-detail',{prods : result.filter(index => index !== 'meta')[0], docTitle: `Product ID : ${productID}`, path:`/products`})
    })
    .catch((err)=>{
        console.log(err)
    })

}

exports.getIndex = (req, res, next)=>{
    // for the promise in model
    /* ProductModel.fetchAll((products) => {
        res.render('shop/index',{prods : products, docTitle: 'Shop', path:'/'}) 
    }) */
    // promise in this file(controller)
    ProductModel.fetchAll()
    .then((result)=>{
        res.render('shop/index',{prods : result.filter(index => index !== 'meta'), docTitle: 'Shop', path:'/'}) 
    })
    .catch((err)=>{
        console.log(err)
    })
}

exports.getCart = (req, res, next)=>{
        CartModel.getCart((cart)=>{
            // use fetchall bcz fetch by id return 1 product
            ProductModel.fetchAll(prod=>{
                const cartDetail = []
                for (product of prod){
                    const cardProductData = cart.product.find(prods=>prods.id === product.id)
                    if(cardProductData){
                        cartDetail.push({productData:product,qty:cardProductData.qty})
                    }
                }
                res.render('shop/cart',{cart:cartDetail,totalP:cart.totalPrice, docTitle: 'Cart', path:'/cart'}) 
            })
        })
}

exports.postCart = (req, res, next) => {
    //from post
    const proId = req.body.productId
    ProductModel.fetchById(proId,(product)=>{
        CartModel.addProduct(product.id,product.price)
    })
    console.log(proId)
    res.redirect('/cart')
}

exports.postDeleteCart = (req, res, next)=>{
    const proId = req.body.id
    ProductModel.fetchById(proId,(prod)=>{
        CartModel.deleteCartProduct(proId,prod.price)
    })
    res.redirect('/cart')
}

exports.getCheckout = (req, res, next)=>{
        res.render('shop/checkout',{ docTitle: 'Checkout', path:'/checkout'})
}

exports.getOrder = (req, res, next)=>{
    res.render('shop/orders',{ docTitle: 'Your Orders', path:'/orders'})
}
