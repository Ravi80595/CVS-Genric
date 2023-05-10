import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './Routes/users.js'
// import bodyParser from 'body-parser';
import adminRoutes from './Routes/admins.js'
import cartRoutes from './Routes/carts.js'
// import Product from './Modals/Product.js'

// Product.insertMany()
const app = express()
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json())
dotenv.config()


app.use("/user",userRoutes)
app.use('/admin',adminRoutes)
app.use('/cart',cartRoutes)



const PORT = process.env.PORT || 3001
mongoose.set("strictQuery", false);
let connections = mongoose.connect(process.env.MONGO_URL)


app.listen(PORT,()=>{
    try{
        connections
        console.log(`Server Connected With DataBase ${PORT}`)
    }
    catch(err){
    console.log("Somethning Wents Wrong",err)
    }
})