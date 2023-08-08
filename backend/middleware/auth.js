const jwt=require("jsonwebtoken")
const authenticate=(req,res,next)=>{
    const token=req.header("auth-token")
    console.log(token+"")
    if(!token)
    {
        res.status(401).send("please authenticate using valid token")
    }
    try{
        const data=jwt.verify(token,"MYSECRET")
        if(data)
        {
            next()
        }
    }
    catch(err)
    {
        res.status(401).send("unauthorize")
    }
}
module.exports=authenticate