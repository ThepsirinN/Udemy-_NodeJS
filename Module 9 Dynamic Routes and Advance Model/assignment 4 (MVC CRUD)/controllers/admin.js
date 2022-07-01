const userModel = require('../models/usersM')

exports.getAdminEdit = (req, res, next)=>{
    userModel.getUser((user)=>{
        res.render('admin-edit',{data:user,docTitle : "Admin-edit", Css:'../css/main.css', active:"admin-edit"})
   })
}

exports.getAdminEditUser = (req, res, next)=>{
    const userId = req.params.userId
    const editMode = req.query.edit
    console.log(editMode)
    if(!editMode){
        res.redirect('/')
    }else{
        userModel.getUserById(userId,(user)=>{
            res.render('admin-edit-user',{data:user,
                docTitle : `Admin-edit-user : ${user.id}`, 
                Css:'../../css/main.css', 
                active:"admin-edit",
                edit:editMode
            })
        })
    }
}

exports.postAdminEditUser = (req, res, next)=>{
    const userId = req.body.userId
    const editMode = req.body.EditM
    const userName = req.body.username
    const IMGURL = req.body.imgUrl
    const password = req.body.password
    if(editMode){
        const editUser = new userModel(userId,userName,IMGURL,password)
        editUser.save()
        res.redirect('/users')
    }else{
        res.redirect('/')
    }
}

exports.postAdminDeleteUser = (req, res, next) => {
    const userId = req.body.userId
    console.log(userId)
    userModel.deleteUserById(userId)
    res.redirect('/users')
}