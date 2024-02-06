import mongoose from "mongoose";
const User = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        uniqe:true,
    },
    password:{
        type:String,
        required:true,
    },
    CartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    },
});
const userModel = mongoose.model("user", User);
export default userModel;
