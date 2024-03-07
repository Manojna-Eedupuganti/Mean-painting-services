const exp=require('express')
const app=exp();
const path=require('path');
require('dotenv').config()

//body parser
app.use(exp.json())

//connect angular app to server
app.use(exp.static(path.join(__dirname,'../client/dist/painting-services/browser')))

//import apis
const userApp=require('./APIS/user-api')
const formApp=require('./APIS/form-api')

//path level middleware
app.use('/user-api',userApp)
app.use('/form-api',formApp)

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'../client/dist/painting-services/browser/index.html'))
})

//error handle middleware
function errorHandler(err,req,res,next){
    res.send({message:"error occured",payload:err.message})
}
app.use(errorHandler)


//assign port number
const PORT=process.env.PORT||4000;
app.listen(PORT,()=>console.log(`server is listening on port ${PORT}`))