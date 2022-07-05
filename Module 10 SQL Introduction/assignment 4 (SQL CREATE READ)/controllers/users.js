const userModel = require('../models/usersM')

exports.getHome = (req, res, next)=>{
    res.render('home',{docTitle : "Home", Css:'css/main.css', active:"home"})
}

exports.postHome = (req,res,next)=>{
    const UModel = new userModel(null,req.body.Username, req.body.Imgurl, req.body.Password)
    UModel.save()
    .then(
        res.redirect('/users')
    )
    .catch(err=>{
        console.log(err)
    })
}

exports.getUser = (req, res, next)=>{
   userModel.getUser()
   .then(result=>{
        res.render('users',{data:result.filter(id => id !== 'meta'),docTitle : "Users", Css:'css/main.css', active:"users"})
   })
   .catch(err=>{
        console.log(err)
   })
}

exports.getUserById = (req, res, next)=>{
    userModel.getUserById(req.params.userID)
    .then(result=>{
        res.render('user-detail',{data:result.filter(id => id !== 'meta')[0],docTitle : "Users", Css:'../../css/main.css', active:"users"})
    })
    .catch(err=>{
        console.log(err)
    })
 }