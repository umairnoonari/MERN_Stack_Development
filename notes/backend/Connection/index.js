const mongoose=require("mongoose")
const dbURL=process.env.DB
const dbConnect=async()=>{
    try{
        const conn=await mongoose.connect(dbURL)
        console.log("dB Connected at "+conn.connection.host)
    }
    catch(error)
    {
        console.log(error)
    }
}
module.exports=dbConnect