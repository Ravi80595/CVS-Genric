import express from "express"
import { addProduct, deleteProductAdmin, getAllProducts, singleProductAdmin, updateProductAdmin } from "../Controllers/Admin/Products.js"
import { deleteUserByAdmin, getAllUsersAdmin, singleUserDetails } from "../Controllers/Admin/Users.js"
import { allOrders, getSingleOrder, updateOrderStatus } from "../Controllers/Admin/Orders.js"


const router = express.Router()

            //Product routes

router.get('/allProducts',getAllProducts)
router.get('/singleProduct/:id',singleProductAdmin) 
router.post('/addproduct',addProduct)
router.put('/update/:id',updateProductAdmin)
router.delete('/delete/:id',deleteProductAdmin)

            // User Routes
router.get('/allUsers',getAllUsersAdmin)
router.get('/singleUser/:id',singleUserDetails)
router.delete('/deleteUser/:id',deleteUserByAdmin)


            // Order routes
router.get('/allOrders',allOrders)
router.get('/singleOrders/:id',getSingleOrder)
router.put('/updateOrder/:id',updateOrderStatus)

export default router