const ProductModel = require('../models/product')

exports.getAddProduct = (req, res, next)=>{
    console.log("admin/add-product")
    res.render('admin/add-product',{docTitle : "Admin", path : '/admin/add-product'})
}

exports.getProductList = (req, res, next)=>{
    console.log('admin/product-list')
    ProductModel.fetchAll((product)=>{
        res.render('admin/product-list',{prods : product, docTitle : 'products', path : '/admin/products'})
    })
}

exports.postAddProduct = (req, res, next)=>{
    const product = new ProductModel(req.body.title, req.body.IMGURL, req.body.description, req.body.price)
    product.save()
    res.redirect('/')
}