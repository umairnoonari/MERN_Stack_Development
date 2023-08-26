const mongoose=require("mongoose")
const {Schema}=mongoose
const NoteSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
const Note=mongoose.model("Note",NoteSchema)
module.exports=Note