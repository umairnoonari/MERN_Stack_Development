const User=require("../models/user")
const asyncHandler=require('express-async-handler')
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password,pic}=req.body
    console.log(name)
    if(!name || !email || !password)
    {
        res.status(400)
        throw new Error("Please Enter all the Fields")
    }
    const userExists=await User.findOne({email})
    if(userExists)
    {
        res.status(400)
        throw new Error("User Already exists")
    }
    const user=await User.create({
        name,
        email,
        password,
        pic
    })
    if(user)
    {
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:await jwt.sign({id:user._id},process.env.SK,{expiresIn:20*60*100})
        })
    }
    else
    {
        res.status(400)
        throw new Error("Failed to Create a new User")
    }
})
const authUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(user)
    {
        const compare=await bcrypt.compare(password,user.password)
        if(compare)
        {
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                pic:user.pic,
                token:await jwt.sign({id:user._id},process.env.SK,{expiresIn:20*60*100})
            })
       }
       else
       {
           res.status(401);
           throw new Error("Invalid Email or Password")
       }
    }
    else
    {
        res.status(401);
        throw new Error("Invalid Email or Password")
    }
})
const allUsers=asyncHandler(async(req,res)=>{
    const keyword=req.query.search?{
        $or:[
            {name:{$regex:req.query.search,$options:"i"}},
            {email:{$regex:req.query.search,$options:"i"}}
        ]
    }:{};
    const users=await User.find(keyword)
    res.send(users)
})
module.exports={registerUser,authUser,allUsers}