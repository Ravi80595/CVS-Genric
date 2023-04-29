import mongoose from "mongoose";
import { GetCurrentDate,GetCurrentTime } from "../Utils/DateTime.js";

const currentDate=GetCurrentDate()
const currentTime=GetCurrentTime()

const adminSchema = new mongoose.Schema({
    firstName:{type:String,require:true,min:2,max:40},
    lastName :{type:String,require:true,min:2,max:40},
    email :{type:String,require:true,unique:true,max:40},
    password :{type:String,require:true,min:5},
    date:{type:String,default:currentDate},
    time:{type:String,default:currentTime},
},{
    timestamps:true
})

const Admin = mongoose.model("Admin",adminSchema)

export default Admin