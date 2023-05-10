import express from "express"
import { addProductToCategory, createCategory, deleteProductAdmin, getAllCategories, getAllProducts, singleProductAdmin, updateProductAdmin } from "../Controllers/Admin/Products.js"
import { deleteUserByAdmin, getAllUsersAdmin, singleUserDetails } from "../Controllers/Admin/Users.js"
import { allOrders, getSingleOrder, updateOrderStatus } from "../Controllers/Admin/Orders.js"
import { loginAdmin, registerAdmin } from "../Controllers/Admin/AdminAuth.js"


const router = express.Router()

router.post('/adminRegister',registerAdmin)
router.post('/adminLogin',loginAdmin)


            //Product routes
router.post('/addCategory',createCategory)
router.get('/allCategories',getAllCategories)
router.get('/allProducts',getAllProducts)
router.get('/singleProduct/:id',singleProductAdmin) 
router.post('/addproduct',addProductToCategory)
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