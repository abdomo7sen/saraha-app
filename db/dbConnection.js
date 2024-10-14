import mongoose  from "mongoose";

import dotenv from 'dotenv'
dotenv.config({path:"./config/.env"})


export const conn=mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("database connection established");
    
})
.catch((err)=>{
    console.log(err);
})