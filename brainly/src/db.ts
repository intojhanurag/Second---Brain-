//create user model and schema
import mongoose from "mongoose";
import {model,Schema} from "mongoose"
import dotenv from "dotenv";

dotenv.config();
const MONGODB_URI=process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in the .env file");
  }
  
mongoose.connect(MONGODB_URI);
//userSchema
const UserSchema=new Schema({
    username:{type:String,unique:true},
    password:String
})
//userModel- user- is the name of the model userSchema
export const UserModel=model("User",UserSchema)

const ContentSchema=new Schema({
    title:String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId,ref:'Tag'}],
    type:String,
    userId:{type:mongoose.Types.ObjectId,ref:'User',required:true},
})


const LinkSchema=new Schema({
    hash:String,
    userId:{type:mongoose.Types.ObjectId,ref:'User',required:true,unique:true},
})

export const LinkModel=model("Link",LinkSchema)
export const ContentModel=model("Content",ContentSchema)
