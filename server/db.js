const mongoose=require('mongoose')

require('dotenv').config()
//connect to db

const DB_URL = process.env.LOCAL_DB_URL
mongoose.connect(DB_URL)
.then(()=>console.log('db connection success'))
.catch(err=>console.log('error in db connection',err))

//create schema
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'username is required,but missed'],
        minLength:[4,'min length is 4'],
        maxlength:[10,'max length is 10']
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    }
});

const formSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    phonenumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    planning:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    paintingtype:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
})


//creating model
let UserData=mongoose.model('test',userSchema);
let FormData=mongoose.model('form',formSchema)

module.exports= {UserData,FormData}