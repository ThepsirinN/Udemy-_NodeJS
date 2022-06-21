exports.get404Error = (req, res, next)=>{
    res.status(404).render('404',{docTitle : "Error 404!", Css:'/css/main.css',active : ''})
}