const jwt=require("jsonwebtoken")
const JWT_SECRET="UAN_IBA"
const fetchuser=(req,res,next)=>{
    const token=req.header("auth-token")
    if(!token)
    {
        console.log("jdfkds")
        res.status(401).send({error:"Please authenticate using a valid token"})
    }
    try{
        const data=jwt.verify(token,JWT_SECRET)
        req.user=data.user
        next()
    }
    catch(error)
    {
        console.log("jdfkds")
        res.status(401).send({error:"Please authenticate using a valid token"})
    } 
    
}
module.exports=fetchuser;