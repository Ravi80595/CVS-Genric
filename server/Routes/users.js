import express from "express"
import { getUser, login, register } from "../Controllers/UserAuth.js"

const router = express.Router()


router.post("/register",register)
router.post("/login",login)
router.get("/:id",getUser)



export default router