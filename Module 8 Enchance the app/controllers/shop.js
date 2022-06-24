const ProductModel = require('../models/product')

exports.getProduct = (req, res, next)=>{
    ProductModel.fetchAll((products) => {
        res.render('shop/product-list',{prods : products, docTitle: 'Product', path:'/products'}) 
    })
}

exports.getIndex = (req, res, next)=>{
    ProductModel.fetchAll((products) => {
        res.render('shop/index',{prods : products, docTitle: 'Shop', path:'/'}) 
    })
}

exports.getCart = (req, res, next)=>{
        res.render('shop/cart',{docTitle: 'Cart', path:'/cart'}) 
}

exports.getCheckout = (req, res, next)=>{
        res.render('shop/checkout',{ docTitle: 'Checkout', path:'/checkout'})
}

exports.getOrder = (req, res, next)=>{
    res.render('shop/orders',{ docTitle: 'Your Orders', path:'/orders'})
}