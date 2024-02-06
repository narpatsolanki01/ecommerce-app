import mongoose from "mongoose";
const productImgSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    name:{
        type: String,
        required: true,
    },   
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avliable:{
        type:Boolean,
        default:true,
    },
});
const productImgModel = mongoose.model("productimg", productImgSchema);
export default productImgModel;