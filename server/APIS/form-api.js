const exp=require('express')
const formApp=exp.Router();
const expressAsyncHandler=require('express-async-handler')
const {getformData,createformData,updateformData}=require('../CONTROLLERS/form-controller')

//get request
formApp.get('/data/:name', expressAsyncHandler(getformData));
//post req
formApp.post('/data', expressAsyncHandler(createformData));
//update
formApp.put('/data',expressAsyncHandler(updateformData))

module.exports=formApp