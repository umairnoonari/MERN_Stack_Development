const mongoose=require("mongoose")
const connectDb=async()=>{
    try {
        const conn=await mongoose.connect(process.env.db)
        console.log("Mongodb Connect:"+conn.connection.host)
    } catch (error) {
        console.log("ERROR:"+error.message)
    }
}
module.exports=connectDb