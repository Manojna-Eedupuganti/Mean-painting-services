const jwt=require('jsonwebtoken');
require('dotenv').config()


function verifyToken(req,res,next){
    //token verification logic
    //get bearertoken fro  headers of req obj
    const bearToken=req.headers.authorization;
    if(bearToken){
        let token=bearToken.split(' ')[1]
        //verify the token
        let decodedToken=jwt.verify(token,process.env.SECRET_KEY)
        console.log(decodedToken)
        next()
    }else{
        res.status(403).send({message:'unauthorised access'})
    }

}

module.exports=verifyToken;