//import model
const {FormData}=require('../db');
require('dotenv').config()

const getformData=async(req,res)=>{
    const formList=await FormData.findOne({name:req.params.name})
    res.send({message:'form created',payload:formList})
}

//create form(post req)
const createformData=async(req,res)=>{
    let form=await FormData.create(req.body)
    
    console.log(req.body)
    res.status(200).send({message:'form created',payload:form})
}

//update form
const updateformData=async(req,res)=>{
    let updatedForm=await FormData.findOne({name:req.body.name})
    console.log("updated form BEFORE",updatedForm)
    updatedForm.date=req.body.date
    console.log("updated form ",updatedForm)
    
    let updated=await FormData.findOneAndUpdate({name:req.body.name},updatedForm)
    res.status(200).send({message:'form updated',payload:updated})
}

module.exports={getformData,createformData,updateformData}