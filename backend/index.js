const express=require("express")
const app=express()
const cors=require('cors')
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/inotebook")
app.use(express.json())
app.use(cors())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.listen(4000,function(){
    console.log("Server is listening at 4000")
})  