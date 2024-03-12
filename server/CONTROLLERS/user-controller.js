//import model
const {UserData}=require('../db');
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
require('dotenv').config()


//registration
const createUser= async(req,res)=>{
try{
  //check for existing user with same username
    let existingUser=await UserData.findOne({username:req.body.username});
    //user already existed
    if(existingUser!==null){
        return res.status(200).send({message:'user already existed'});
    };
    //if user not existed hash the password
    const hashedPassword=await bcryptjs.hash(req.body.password,6);
    //replace plain password with hashed password
    req.body.password=hashedPassword;
    let user=await UserData.create(req.body)
    res.status(201).send({message:'user created',payload:user})
}
catch(e){
    console.log(e);
}
};

//User login
const loginUser = async (req, res) => {
    //get user crdentials object from req
    const userCredentials = req.body;
    console.log(userCredentials)
    //check username
    let user = await UserData.findOne({ username: userCredentials.username });
    //if invalid username
    if (user === null) {
      return res.status(200).send({ message: "Invalid username" });
    }
    //if username is found, compare passwords
    const result = await bcryptjs.compare(userCredentials.password,user.password);
    //if pasword not matched
    if (result === false) {
      return res.status(200).send({ message: "Invalid password" });
    }
    //Create jwt token and sign it
    const signedToken = jwt.sign({ username: user.username }, process.env.SECRET_KEY,{ expiresIn: "1d" });
    res.status(200).send({ message: "login success", token: signedToken, user: user });
};




//export
module.exports={createUser,loginUser}