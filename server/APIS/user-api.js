const exp=require('express')
const userApp=exp.Router();
const expressAsyncHandler=require('express-async-handler')
const verifyToken=require('../MIDDLEWARES/verifyToken')

//import from controllers
const { getUsers,getUserById,createUser,loginUser,modifyUser,deleteUser }=require('../CONTROLLERS/user-controller');

//get req
userApp.get('/users', expressAsyncHandler(getUsers));
//get user by id
userApp.get('/users/:username', expressAsyncHandler(getUserById));
//post req
userApp.post('/users', expressAsyncHandler(createUser));
//login
userApp.post('/login',expressAsyncHandler(loginUser))
//put req
userApp.put('/users', expressAsyncHandler(modifyUser));
//delete rq
userApp.delete('/users/:age', expressAsyncHandler(deleteUser));




module.exports=userApp