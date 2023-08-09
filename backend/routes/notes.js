const express=require("express")
const router=express.Router();
const fetchuser=require("../middleware/fetchuser")
const Notes=require("../models/Notes")
const {body,validationResult}=require("express-validator")
//Router 1 Fetch Notes
router.get("/a",(req,res)=>{
    res.send("success")
})
router.get("/fetchallnotes",fetchuser,async (req,res)=>{
    try{
        const notes=await Notes.find({user:req.user.id})
        res.json(notes)
    }
    catch(error)
    {
        res.status(500).send("Internal Server error")
    }  
    
})

//Router 2 Add Notes
router.post("/addnote",fetchuser,[
    body("title","Enter a valid Title").isLength({min:3}),
    body("description","Description must be atleast 5 characters").isLength({min:5})
],async (req,res)=>{
    try{
        const {title,description,tag}=req.body
        const errors=validationResult(req)
        if(!errors.isEmpty())
        {
            res.status(400).json({errors:errors.array()})
        }
        const note=new Notes({
            title,description,tag,user:req.user.id
        })
        const savenote=await note.save()
        res.json(savenote)
    }
    catch(error)
    {
        res.status(500).send("Internal Server error")
    }  
})


//Router 3 Update Note
router.put("/updatenote/:id",fetchuser,async (req,res)=>{
    const {title,description,tag}=req.body
    try
    {
        const newNote={}
        if(title){newNote.title=title}
        if(description){newNote.description=description}
        if(tag){newNote.tag=tag}

        let note=await Notes.findById(req.params.id)
        if(!note){return res.status(404).send("Not Found")}

        if(note.user.toString()!=req.user.id)
        {
            return res.status(401).send("Not Allowed")
        }
        note=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
        res.json(note)
    }
    catch(error)
    {
        res.status(500).send("Internal Server error")
    } 

})

//Router 4 Delete Note
router.delete("/deletenote/:id",fetchuser,async (req,res)=>{
    try{
        let note=await Notes.findById(req.params.id)
        if(!note){return res.status(404).send("Not Found")}

        if(note.user.toString()!=req.user.id)
        {
            return res.status(401).send("Not Allowed")
        }
        note=await Notes.findByIdAndDelete(req.params.id)
        res.json({msg:"Successfully Deleted",note:note})
    }
    catch(error)
    {
        res.status(500).send("Internal Server error")
    }  
})
module.exports=router;