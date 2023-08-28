const mongoose=require("mongoose")
const dbURL="mongodb+srv://umairnoonari98:0011Umair$@cluster0.rmezzwc.mongodb.net/notebook?retryWrites=true&w=majority"
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