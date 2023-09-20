require('dotenv').config();
const mongoose =require("mongoose")
console.log(process.env.DATABASE_URL)
const mongoURI=process.env.DATABASE_URL
console.log(mongoURI)
console.log("hello")
const connectToMongo=async ()=>{
    await mongoose.connect(mongoURI)
    console.log("Connected to Mongo Succesfully:")
}

module.exports=connectToMongo;