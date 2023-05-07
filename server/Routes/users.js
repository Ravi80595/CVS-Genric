import express from "express"
import { getUser, login, register } from "../Controllers/UserAuth.js"
import { getAllCategories, getAllProducts, getProduct, getProductByCategory } from "../Controllers/Product.js"
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


// router.post('/webhook', async (req, res) => {
//     const message = 'hi this is message';
//     const from = 9306454204;
//     const to = 1236547889;
  
//     console.log(`Received message from ${from}: ${message}`);
//     const response = await processMessage(message);
//     await client.messages.create({
//       from: `whatsapp:${to}`,
//       to: `whatsapp:${from}`,
//       body: response,
//     });
  
//     res.status(200).send();
//   });
  
// async function processMessage(message) {
//     return `You sent: ${message}`;
//   }



export default router