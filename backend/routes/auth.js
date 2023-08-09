const express=require("express")
const router=express.Router();
const User=require("../models/User")
const {body,validationResult}=require("express-validator")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET="UAN_IBA"

//ROUTER 1 Create User
router.post("/createuser",[
    body('name',"Enter a valid name").isLength({min:3}),
    body("email","Enter a valid email").isEmail(),
    body("password","Passwor must be 5 characters").isLength({min:5})
],async(req,res)=>{ 
    const errors=validationResult(req)
    let success=false
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    try{
    let user=await User.findOne({email:req.body.email})
    if(user)
    {
       return res.status(400).json({success,error:"email already exists"})
    }
    const salt=await bcrypt.genSalt(10)
    secPass=await bcrypt.hash(req.body.password,salt)
    user=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPass
    })
    const data={
        user:{
            id:user.id
        }
    }
    const authToken=jwt.sign(data,JWT_SECRET) 
    success=true
    res.json({success,authToken})
    }
    catch(error)
    {
        console.error(error.message)
        res.status(500).send("Some errors occured")
    }    
    // .then(user=>res.json(user)).catch(err=>{console.log(err) 
    // res.json({error:"Please enter unique for email",message:err.message})})
})



//ROUTER 2 Login User
router.post("/login",[
    body("email","Enter a valid email").isEmail(),
    body("password","password can not be blank").exists()
],async(req,res)=>{
    const errors=validationResult(req)
    let success=false
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    const {email,password}=req.body
    try
    {
        let user=await User.findOne({email})
        if(!user)
        {
            success=false
            return res.status(400).json({success,error:"Please try to login with correct Credentials"})
        }
        const passwordCompare=await bcrypt.compare(password,user.password)
        // console.log(passwordCompare)
        if(!passwordCompare)
        {
            success=false
            return res.status(400).json({success,error:"Please try to login with correct Credentials"})
        }
        const data={
            user:{
                id:user.id
            }
        }
        const authToken=jwt.sign(data,JWT_SECRET) 
        success=true
        res.json({success,authToken})
    }
    catch(error)
    {
        console.error(error.message)
        res.status(500).send("Internal Server error")
    }    
})



//ROUTER 3 Get User Details
router.post("/getuser",fetchuser,async(req,res)=>{
    try{
        userid=req.user.id
        const user=await User.findById(userid).select("-password")
        res.send(user)
    }
    catch(error)
    {
        console.error(error.message)
        res.status(500).send("Internal Server error")
    } 
})
module.exports=router;