import { model, Schema } from "mongoose";
const MESSAGE_COLLECTION_NAME ="Message"

const schema=new Schema({
    message:String,
    user:String,
})

export const Message=model(MESSAGE_COLLECTION_NAME,schema)