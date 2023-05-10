import {
    Box,
    Divider,
    Flex,
    HStack,
    Image,
    Select,
    Stack,
    VStack,
  } from "@chakra-ui/react";
  import React, {useEffect, useState} from "react";
  import {RiDeleteBin6Line} from "react-icons/ri";
  import {useNavigate} from "react-router-dom";
  import styles from "./cartpage.module.css";
import Navbar from "../../Components/Navbar";
import axios from "axios";
import { baseUrl } from "../../Utils/BaseUrl";


const Cartpage = () => {
    let grandTotal = 0
    const navigate = useNavigate();
    const {token}=JSON.parse(localStorage.getItem('cvs'))
    const [cartproducts,setCartProducts]=useState([])


    const GetCartVal = () => {
      
    };
  
  
const RemoveProduct = (product_Id) => {
    axios.delete(`${baseUrl}/cart/deleteProduct/${product_Id}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((res)=>{
      console.log(res)
      alert("Product deleted successfully")
      getCart()
    })
    };
  
useEffect(() => {
  getCart()
}, [])
  
const getCart=()=>{
  axios.get(`${baseUrl}/cart`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
  .then((res)=>{
    console.log(res.data)
    setCartProducts(res.data)
  })
}

const proceedtopayment = () => {
  navigate("/payment");
};
  
const selectqty = (e, id) => {
  const quantity = e.target.value;
  const product_Id = id;
  window.location.reload()
};

const convertdecimal = (p1, p2) => {
  const ans = ((p1 - p2) / p1) * 100;
  return ans.toFixed();
};

if (cartproducts.products) {
  grandTotal = cartproducts.products.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  console.log(grandTotal)
}
  
return (
      <>
        <Navbar/>
        {/* {loading ? "loading" : ""} */}
        <Box className={styles.mainbox}>
          <Box className={styles.leftbox}>
            <VStack className={styles.cartcount}>
              {cartproducts && cartproducts.length < 1 ? (
                <h1>
                  Your Cart is Empty <span></span>
                </h1>
              ) : (
                <h1>
                  {cartproducts.products && cartproducts.products.length} Items in your cart{" "}
                  <span></span>
                </h1>
              )}
            </VStack>
            {/* ............Product box........... */}
            {cartproducts.products &&
              cartproducts.products.map((el) => (
                <VStack key={el.product._id}>
                  <Box className={styles.prodbox}>
                    <Box>
                      <img src={'https://thumbnail.imgbin.com/13/18/17/imgbin-coffee-tea-packaging-and-labeling-parcel-bag-design-G9E3ksvw2BMKK24u9zX6A61pT_t.jpg'} alt={el.productImage} />
                    </Box>
                    <Box className={styles.contentdiv}>
                      <h3>{el.product.name}</h3>
                      <h3>{el.Form}</h3>
                      <h2>
                        <span>MRP ₹{el.product.price}</span>{" "}
                        <span>₹{el.salePrice}*</span>{" "}
                        <span>
                          {convertdecimal(el.listPrice, el.salePrice)}% OFF
                        </span>
                      </h2>
                      <p>Category :{el.category}</p>
                    </Box>
                    <Box className={styles.buttonbox}>
                      <RiDeleteBin6Line
                        onClick={() => RemoveProduct(el.product._id)}
                      />
                      <Select
                        placeholder="Qty "
                        onChange={(e) => selectqty(e, el.product._id)}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </Select>
                      <p>{el.quantity}</p>
                    </Box>
                  </Box>
                </VStack>
              ))}
          </Box>
  
          <Box className={styles.rightbox}>
            <Box className={styles.buybtnbox}>
              <VStack className={styles.cartcount}>
                <h1>
                  {/* Cart Total <span> ₹{grandTotal}</span> */}
                </h1>
              </VStack>
              <VStack>
                <button className={styles.proceedbuy} onClick={proceedtopayment}>
                  Proceed To Pay
                </button>
              </VStack>
            </Box>
  
            <Box className={styles.billingbox}>
              <h1>Bill Summary</h1>
              <Box className={styles.cartprice}>
                <p>
                  <span className={styles.subtitle}>Cart Value</span>{" "}
                  <span>₹{grandTotal}</span>
                </p>
                <p>
                  <span className={styles.subtitle}>Delivery charges</span>{" "}
                  {/* {grandTotal > 400 ? <span>FREE</span> : <span>₹40</span>} */}
                </p>
  
                {/* {grandTotal > 400 ? (
                  ""
                ) : (
                  <p>To get free Delivery Add ₹{400 - grandTotal} </p>
                )} */}
              </Box>
              <Divider />
  
              <h1 className={styles.amountpaid}>
                <span className={styles.subtitle}>Amount to be paid</span>
                <span> ₹{grandTotal}</span>
              </h1>
            </Box>
          </Box>
        </Box>
      </>
    );
  };
  
  export default Cartpage;