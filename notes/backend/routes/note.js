const express=require('express')
const authenticate=require('../middleware/userMid')
const Note=require('../model/Note')
const router=express.Router()
router.get('/fetchallnotes',authenticate,async(req,res)=>{
    const notes=await Note.find()
    try{
        return res.status(200).send(notes)
    }catch(error){
        return res.status(401).send("Internal Server Error")
    }
})
router.post('/addnote',authenticate,async(req,res)=>{
    const {title,description}=req.body;
    try {
        await Note.create({title,description})
        return res.status(200).send({msg:"Success"})
    } catch (error) {
        return res.status(401).send("Internal Server Error")
    }
})
router.get('/fetchOneNote/:id',authenticate,async(req,res)=>{
    const {id}=req.params
    try {
        const note=await Note.findById(id)
        return res.status(200).send(note)
    } catch (error) {
        return res.status(401).send("Internal Server Error")
    }
})
router.put('/update/:id',authenticate,async(req,res)=>{
    const {id}=req.params
    const {title,description}=req.body
    try {
        await Note.updateOne({_id:id},{title,description}).then(async(err)=>{
            const Notes=await Note.find()
            return res.status(200).send(Notes)
        }).catch(error=>{
            return res.status(401).send("Not Updated")
        })
    } catch (error) {
        return res.status(401).send("Internal Server Error")
    }
})
router.delete('/delete/:id',authenticate,async(req,res)=>{
    const {id}=req.params
    try {
        await Note.findByIdAndDelete(id)
        const Notes=await Note.find()
        return res.status(200).send(Notes)
    } catch (error) {
        return res.status(401).send("Internal Server Error")
    }
})
module.exports=router;