const exp=require('express')
const userApp=exp.Router();
const expressAsyncHandler=require('express-async-handler')
const verifyToken=require('../MIDDLEWARES/verifyToken')

//import from controllers
const {createUser,loginUser}=require('../CONTROLLERS/user-controller');
//post req
userApp.post('/users', expressAsyncHandler(createUser));
//login
userApp.post('/login',expressAsyncHandler(loginUser))





module.exports=userApp