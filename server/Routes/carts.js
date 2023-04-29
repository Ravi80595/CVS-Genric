import express from "express"
import { addProductToCart, deleteProductFromCart, getCart, updateProductquantity } from "../Controllers/Cart.js"


const router = express.Router()

router.get('/cart',getCart)
router.post('/addProduct',addProductToCart)
router.put('/updateProduct',updateProductquantity)
router.delete('/deleteProduct',deleteProductFromCart)


export default router