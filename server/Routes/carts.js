import express from "express"
import { addProductToCart, deleteProductFromCart, getCart, updateProductquantity } from "../Controllers/Cart.js"
import authMiddleware from "../Middelwares/authMiddleware.js"


const router = express.Router()

router.get('/',authMiddleware,getCart)
router.post('/addProduct',authMiddleware,addProductToCart)
router.put('/updateProduct',authMiddleware,updateProductquantity)
router.delete('/deleteProduct/:id',authMiddleware,deleteProductFromCart)


export default router