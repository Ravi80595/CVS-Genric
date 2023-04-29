import express from "express"
import { addProductToCart, deleteProductFromCart, getCart, updateProductquantity } from "../Controllers/Cart"


const router = express.Router()


router.post("/register",register)
router.get('/cart',getCart)
router.post('addProduct',addProductToCart)
router.put('updateProduct',updateProductquantity)
router.delete('deleteProduct',deleteProductFromCart)


export default router