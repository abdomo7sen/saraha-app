import { model, Schema } from "mongoose";
const USER_COLLECTION_NAME ="User"

const schema=new Schema({
    name:String,
    email:String,
    password:String,
})

export const User=model(USER_COLLECTION_NAME,schema)