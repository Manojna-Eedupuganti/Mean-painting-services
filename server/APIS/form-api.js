const exp=require('express')
const formApp=exp.Router();
const expressAsyncHandler=require('express-async-handler')
const {getformData,createformData,updateformData}=require('../CONTROLLERS/form-controller');
const verifyToken = require('../MIDDLEWARES/verifyToken');

//get request
formApp.get('/data/:name',verifyToken, expressAsyncHandler(getformData));
//post req
formApp.post('/data',verifyToken, expressAsyncHandler(createformData));
//update
formApp.put('/data',verifyToken, expressAsyncHandler(updateformData))

module.exports=formApp