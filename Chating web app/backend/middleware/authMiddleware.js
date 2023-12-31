const jwt=require("jsonwebtoken")
const User = require("../models/user")
const authenticate=async(req,res,next)=>{
    const token=req.header('auth-token')
    if(!token)
    {
        return res.status(401).send("Unauthorized")
    }
    else
    {
        try {
            const id=await jwt.verify(token,process.env.SK)
            if(id)
            {
                req.user=await User.findById(id.id).select("-password")
                next()
            }
            else
            {
                res.status(401).send("Unauthorized")
            }
        } catch (error) {
            res.status(401).send("Server not Found")
        }
    }
}
module.exports=authenticate