import express from "express"
import { getUser, login, register } from "../Controllers/UserAuth.js"
import { getAllCategories, getAllProducts, getProduct, getProductByCategory } from "../Controllers/Product.js"
import { getCart } from "../Controllers/Cart.js"
import authMiddleware from "../Middelwares/authMiddleware.js"
// import client from 'twilio'
// const client = twilio(
//     process.env.TWILIO_ACCOUNT_SID,
//     process.env.TWILIO_AUTH_TOKEN
//   );

const router = express.Router()

router.post("/register",register)
router.post("/login",login)
router.get("/:id",getUser)
router.get('/allproducts',getAllProducts)
router.get('/productsByCategory/:category',getProductByCategory)
router.get("/allCategories",getAllCategories)
router.get('/singleProduct/:id',getProduct)



export default router