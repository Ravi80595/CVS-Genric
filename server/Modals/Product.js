import mongoose from "mongoose";
import { GetCurrentDate,GetCurrentTime } from "../Utils/DateTime.js";


const currentDate=GetCurrentDate()
const currentTime=GetCurrentTime()

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String},
    category: {type: String},
    brandName:{type:String},
    Strength:{type:String},
    Form:{type:String},
    categoryName:{type:String},
    description: {type: String},
    date:{type:String,default:currentDate},
    time:{type:String,default:currentTime},
},{
    timestamps:true
})

const Product = mongoose.model("Product",productSchema)

export default Product 