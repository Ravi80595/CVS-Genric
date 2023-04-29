import mongoose from "mongoose";
import { GetCurrentDate,GetCurrentTime } from "../Utils/DateTime.js";

const currentDate=GetCurrentDate()
const currentTime=GetCurrentTime()


const cartSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true, default: 1 }
    }
  ],
  createdAt: { type: Date, default: Date.now },
    date:{type:String,default:currentDate},
    time:{type:String,default:currentTime},
},{
    timestamps:true
})

const Cart = mongoose.model("Cart",cartSchema)

export default Cart