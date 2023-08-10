const express=require("express")
const router=express.Router()
const User=require("../models/User")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const authenticate = require("../middleware/UserAuth")
router.post('/signup',async(req,res)=>{
    const {username,email,password}=req.body
    try{
        const user=await User.findOne({username})
        if(user)
        {
            return res.status(401).send("Username already exists")
        }
        const salt=await bcrypt.genSalt(10)
        const secPass=await bcrypt.hash(password,salt)
        await User.create({username,email,password:secPass})
        return res.status(200).send({msg:"Success"})
    }
    catch(err)
    {
        return res.status(401).send("Internal Server Error")
    }
})
router.post("/signin",async(req,res)=>{
    const {username,password}=req.body
    try {
        const user=await User.findOne({username})
        if(!user)
        {
            return res.status(401).send("Please try correct credentials")
        }
        const comPass=await bcrypt.compare(password,user.password)
        if(comPass)
        {
            const token=jwt.sign({username},"MYSECRET",{expiresIn:30*60})
            res.status(200).send(token)
        }
        else
        {
            return res.status(401).send("Please try correct credentials")
        }
    } catch (err) {
        return res.status(401).send("Internal server error")
    }
})
router.get("/fetchdata",authenticate,async(req,res)=>{
    const user=await User.find()
    try {
        return res.status(200).send(user)
    } catch (error) {
        return res.status(401).send("Internal Server Error")
    }
})
router.get("/update/:id",authenticate,async(req,res)=>{
    const {id}=req.params
    const user=await User.findById(id)
    try {
        return res.status(200).send(user)
    } catch (error) {
        return res.status(401).send("Internal Server Error")
    }
})
router.put("/update1/:id",authenticate,async(req,res)=>{
    const {id}=req.params
    const {username,email,password}=req.body
    try {
        await User.updateOne({_id:id},{username,email,password}).then((err)=>{
            return res.status(200).send("Updated")
        }).catch(err=>{
            return res.status(401).send("Not Updated")
        })
    } catch (error) {
        return res.status(401).send("Internal Server Error")
    }
})
router.delete("/delete/:id",authenticate,async(req,res)=>{
    const {id}=req.params
    try {
        await User.findByIdAndDelete(id)
        const user=await User.find()
        return res.status(200).send(user)
    } catch (error) {
        return res.status(401).send("Internal Server Error")
    }
})
module.exports=router