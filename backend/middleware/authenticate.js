const jwt = require("jsonwebtoken");

const authenticate = (req ,res ,next)=>{

   try {
     const token = req.cookies.accessToken ;
 
     if(!token){
         res.status(401).json({
             message:"access token missing",
         });
     }
   
     const decode = jwt.verify(
         token,
         process.env.ACCESS_TOKEN_SECRET
     );
 
     req.user = decode;
 
     next();
   } catch (error) {

      return res.status(401).json({
      message: "Access token expired or invalid",

    });
  }
   
}


module.exports = authenticate;