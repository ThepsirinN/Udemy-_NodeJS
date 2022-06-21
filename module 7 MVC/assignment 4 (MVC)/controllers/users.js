const userModel = require('../models/usersM')
/* const postJSON = [] */

exports.getHome = (req, res, next)=>{
    res.render('home',{docTitle : "Home", Css:'css/main.css', active:"home"})
}

exports.postHome = (req,res,next)=>{
    /* console.log(req.body.Username) */
    /* postJSON.push({Username : req.body.Username}) */
    const UModel = new userModel(req.body.Username)
    UModel.save()
    res.redirect("/users")
}

exports.getUser = (req, res, next)=>{
    /* console.log(postJSON) */
   /*  res.render('users',{data:homeRdata,docTitle : "Users", Css:'css/main.css', active:"users"}) */
   userModel.getUser((user)=>{
        res.render('users',{data:user,docTitle : "Users", Css:'css/main.css', active:"users"})
   })

   
}