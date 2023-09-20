const bcrypt=require('bcryptjs')
const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    pic:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCNStqGDzxj4eBxWsG7LMAIo7Ay2bRvyo-tvEcShm&s"
    }
},{
    timestamps:true
})
userSchema.pre("save",async function(next){
    if(!this.isModified){
        next()
    }
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
})
const User=mongoose.model("User",userSchema)
module.exports=User