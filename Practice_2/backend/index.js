const express=require("express")
const mongoose=require("mongoose")
const cors=require('cors')
const app=express()
mongoose.connect("mongodb://127.0.0.1:27017/practice_2")
app.use(cors())
app.use(express.json())
app.use("/auth",require("./routes/auth"))
app.listen(3001,function() {
    console.log("Server is listening at 3001")
})
