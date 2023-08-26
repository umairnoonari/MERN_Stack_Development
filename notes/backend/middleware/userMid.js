const jwt=require('jsonwebtoken')
const authenticate=async(req,res,next)=>{
    const token=req.header('auth-token')
    if(!token)
    {
        return res.status(401).send("Unauthorized")
    }
    try {
        const user=jwt.verify(token,"MYSECRET");
        if(user)
        {
            next()
        }
        else
        {
            return res.status(401).send("Unauthorized")
        }
    } catch (error) {
        return res.status(401).send("Internal Server Error")
    }
}
module.exports=authenticate