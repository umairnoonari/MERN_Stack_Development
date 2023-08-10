const jwt=require('jsonwebtoken')
const authenticate=(req,res,next)=>{
    const token=req.header("auth-token")
    if(!token)
    {
        return res.status(401).send("unauthorized")
    }
    try {
        const data=jwt.verify(token,"MYSECRET")
        if(data)
            next()
        else
            return res.status(401).send("unauthorized")
    } catch (error) {
        return res.status(401).send("unauthorized")
    }
}
module.exports=authenticate