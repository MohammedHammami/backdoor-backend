const express = require("express");
const{register,login,updateUserById,getInfoUser,getInfoUserById,getInfoUserById1,updatedPassWordByEmail}=require('../controllers/users')
const usersRouter=express.Router()
const authentication=require('../middleware/authentication')

usersRouter.post('/register',register)
usersRouter.post('/login',login)
usersRouter.put('/updateUser',authentication,updateUserById)
usersRouter.get('/',authentication,getInfoUser)
usersRouter.get('/comments/:userId',getInfoUserById)
usersRouter.get('/phone/:userId',getInfoUserById1)
usersRouter.put('/updatePass',updatedPassWordByEmail)

module.exports=usersRouter