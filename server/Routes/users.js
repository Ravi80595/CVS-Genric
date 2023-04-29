import express from "express"
import { getUser, login, register } from "../Controllers/UserAuth.js"
import { getAllProducts, getProduct } from "../Controllers/Product.js"

const router = express.Router()


router.post("/register",register)
router.post("/login",login)
router.get("/:id",getUser)
router.get('/allProducts',getAllProducts)
router.get('/singleProduct/:id',getProduct)


export default router