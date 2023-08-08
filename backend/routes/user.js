const express=require("express")
const router=express.Router()
const User=require("../models/User")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const authenticate = require("../middleware/auth")
router.post("/signup",async(req,res)=>{
    const {username,email,password}=req.body
    try{
        const user=await User.findOne({email:email})
        if(user)
        {
            return res.json({msg:"success",error:"email already exists"})
        }
        const salt=await bcrypt.genSalt(10)
        const secPassword= await bcrypt.hash(password,salt)
        await User.create({username:username,email:email,password:secPassword})
        res.status(200).send({msg:"Success"})
    }
    catch(error){
        return res.status(400).json({error:error.message,msg:"User already exists"})
    }
    
})
router.post('/signin',async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await User.findOne({email:email})
        if(!user)
        {
            return res.json({msg:"Please try correct credentials"})
        }
        // console.log(user.password)
        const comparePass=await bcrypt.compare(password,user.password)
        if(comparePass)
        {
            const token=jwt.sign({email},"MYSECRET",{expiresIn:30*60})
            return res.status(200).json(token)
        }
        else
        {
            return res.json({msg:"please try correct credentials"})
        }
    }
    catch(error)
    {
        return res.status(400).json({msg:"internal server error"})
    }
})
router.get("/fetchdata",authenticate,async(req,res)=>{
    const user=await User.find()
    res.status(200).send(user)
})
router.get('/update/:id',authenticate,async(req,res)=>{
    const user=await User.findById(req.params.id)
    console.log(user)
    res.send(user)
})
router.post('/update1/:id',authenticate,async(req,res)=>{
    const {id}=req.params
    const {username,email,password}=req.body
    await User.updateOne({_id:id},{username:username,email:email,password:password}).then((err)=>{
        res.json({msg:"Updated"})
    }).catch((err)=>{
        res.json({msg:"Not Updated"})
    })
})
router.delete("/delete/:id",authenticate,async(req,res)=>{
    const {id}=req.params
    await User.findByIdAndDelete(id)
    const user=await User.find()
    res.send(user)
})
module.exports=router