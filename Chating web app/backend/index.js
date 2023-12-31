const dotenv= require("dotenv")
const express=require("express")
const app=express()
const {notFound,errorHandler}=require('./middleware/errormiddleware')
const connectDb=require("./connection/connection")
const cors=require("cors")
dotenv.config()
connectDb()
app.use(cors())
app.use(express.json())
app.use("/api/user",require('./Routes/userroutes'))
app.use('/api/chat',require("./Routes/chatRoutes"))
app.use(notFound)
app.use(errorHandler)
const PORT=process.env.PORT||3001
app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})