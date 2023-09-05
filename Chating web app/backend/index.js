const dotenv= require("dotenv")
const express=require("express")
const app=express()
dotenv.config()
const PORT=process.env.PORT||3001
app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})