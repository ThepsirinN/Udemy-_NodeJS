const userModel = require('../models/usersM')

exports.getHome = (req, res, next)=>{
    res.render('home',{docTitle : "Home", Css:'css/main.css', active:"home"})
}

exports.postHome = (req,res,next)=>{
    const UModel = new userModel(null,req.body.Username, req.body.Imgurl, req.body.Password)
    UModel.save()
    res.redirect("/users")
}

exports.getUser = (req, res, next)=>{
   userModel.getUser((user)=>{
        res.render('users',{data:user,docTitle : "Users", Css:'css/main.css', active:"users"})
   })
}

exports.getUserById = (req, res, next)=>{
    userModel.getUserById(req.params.userID,(user)=>{
         res.render('user-detail',{data:user,docTitle : "Users", Css:'../../css/main.css', active:"users"})
    })
 }