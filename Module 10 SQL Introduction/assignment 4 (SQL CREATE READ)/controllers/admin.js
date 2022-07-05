const userModel = require('../models/usersM')

exports.getAdminEdit = (req, res, next)=>{
    userModel.getUser()
    .then(result=>{
        res.render('admin-edit',{data:result.filter(id => id !== 'meta'),docTitle : "Admin-edit", Css:'../css/main.css', active:"admin-edit"})
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getAdminEditUser = (req, res, next)=>{
    const userId = req.params.userId
    const editMode = req.query.edit
    console.log(editMode)
    if(!editMode){
        res.redirect('/')
    }else{
        userModel.getUserById(userId)
        .then(result=>{
            user = result.filter(id => id !== 'meta')[0]
            res.render('admin-edit-user',{data:user,
                docTitle : `Admin-edit-user : ${user.id}`, 
                Css:'../../css/main.css', 
                active:"admin-edit",
                edit:editMode
            })
        })
        .catch(err=>{
            console.log(err)
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