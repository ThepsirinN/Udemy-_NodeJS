const products = []

exports.getAddProduct = (req, res, next)=>{
    console.log("/add-product")
    res.render('add-product',{docTitle:"Admin", path:'/admin/add-product'})
}

exports.postAddProduct = (req, res, next)=>{
    console.log(req.body)
    products.push({title : req.body.title})
    res.redirect('/')
}

exports.getProduct = (req, res, next)=>{
    /* console.log("/")
    console.log(adminData.products)
    const products = adminData.products */
    // product can refer to array product
    res.render('shop',{prods : products, docTitle: 'Shop', path:'/'})

}