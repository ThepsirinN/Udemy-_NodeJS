const ProductModel = require('../models/product')

/* const products = [] */

exports.getAddProduct = (req, res, next)=>{
    console.log("/add-product")
    res.render('add-product',{docTitle:"Admin", path:'/admin/add-product'})
}

exports.postAddProduct = (req, res, next)=>{
    /* console.log(req.body)
    products.push({title : req.body.title}) */
    const product = new ProductModel(req.body.title)
    product.save()
    res.redirect('/')
}

exports.getProduct = (req, res, next)=>{
    /* console.log("/")
    console.log(adminData.products)
    const products = adminData.products */
    // product can refer to array product
    //const products = ProductModel.fetchAll() // no neccessary to create new instance bcz of static method
    
    // products mean [] or JSON.parse(fileContent) in getProductFromFile bcz this function is eq to callback
    ProductModel.fetchAll((products) => {
        res.render('shop',{prods : products, docTitle: 'Shop', path:'/'}) 
    })
}