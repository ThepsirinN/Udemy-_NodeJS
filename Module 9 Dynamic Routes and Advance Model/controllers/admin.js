const ProductModel = require('../models/product')

exports.getAddProduct = (req, res, next)=>{
    console.log("admin/add-product")
    res.render('admin/edit-product',{docTitle : "Admin", path : '/admin/add-product',editting : false,})
}

exports.getProductList = (req, res, next)=>{
    console.log('admin/product-list')
    ProductModel.fetchAll((product)=>{
        res.render('admin/product-list',{prods : product, docTitle : 'products', path : '/admin/products'})
    })
}

exports.getEditProduct = (req, res, next)=>{
    const editMode = req.query.edit
    if(!editMode){
        res.redirect('/')
    }
    const productID = req.params.productID

    console.log(`admin/edit-product/${productID}`)
    ProductModel.fetchById(productID,prod=>{
        if(!prod){
            res.redirect('/')
        }
        res.render('admin/edit-product',{
            prod:prod,
            docTitle : `Edit Product ID : ${productID}`, 
            path : `/admin/edit-product/${productID}`,
            editting : editMode,
        })
    })
    
}

exports.postEditProduct = (req, res, next) =>{
    const updateProduct = new ProductModel(req.body.id,req.body.title, req.body.IMGURL, req.body.description, req.body.price)
    updateProduct.save()
    res.redirect('/')
}
exports.postAddProduct = (req, res, next)=>{
    const product = new ProductModel(null,req.body.title, req.body.IMGURL, req.body.description, req.body.price)
    product.save()
    res.redirect('/')
}

exports.postDeleteProduct =(req, res, next)=>{
    ProductModel.deleteByID(req.body.id)
    res.redirect('/admin/products')
}