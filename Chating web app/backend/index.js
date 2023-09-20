const dotenv= require("dotenv")
const express=require("express")
const app=express()
const connectDb=require("./connection/connection")
dotenv.config()
connectDb()
app.use(express.json())
app.use("/api/user",require('./Routes/userroutes'))
const PORT=process.env.PORT||3001
app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})