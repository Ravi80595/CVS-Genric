import mongoose from "mongoose";
import { GetCurrentDate,GetCurrentTime } from "../Utils/DateTime.js";


const currentDate=GetCurrentDate()
const currentTime=GetCurrentTime()

const productSchema = new mongoose.Schema({
    productName: {type: String, required: true},
    price: {type: String, required: true},
    // listPrice: {type: String, required: true},
    category: {type: String, required: true},
    // type: {type: String, required: true},
    description: {type: String},
    date:{type:String,default:currentDate},
    time:{type:String,default:currentTime},
},{
    timestamps:true
})

const Product = mongoose.model("Product",productSchema)

export default Product 