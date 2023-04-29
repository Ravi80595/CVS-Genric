import mongoose from "mongoose";
import { GetCurrentDate,GetCurrentTime } from "../Utils/DateTime.js";

const currentDate=GetCurrentDate()
const currentTime=GetCurrentTime()


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
      },
    date:{type:String,default:currentDate},
    time:{type:String,default:currentTime},
},{
    timestamps:true
})

const Category = mongoose.model("Category",categorySchema)

export default Category