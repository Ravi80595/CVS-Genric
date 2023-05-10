import React,{useEffect,useState} from "react";
import axios from 'axios'
import Style from './SingleProduct.module.css'
import {
  Box,
  Text,
  Flex,
  Image,
  Heading,
  Spacer,
  Button,
  Select,
  UnorderedList,
  ListItem,
  Divider
} from "@chakra-ui/react";
import { BsStarFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { baseUrl } from "../../Utils/BaseUrl";


const SingleProduct = () => {
  const property = {
    reviewCount: 242,
    rating: 3,
};
 const [item,setItem]=useState({})
 const [qty,setQty]=useState()
 const {id}=useParams() 
 const navigate=useNavigate()
const {token}=JSON.parse(localStorage.getItem('cvs'))
const [cartProducts,setCartProducts]=useState([])

const handlePrevPage=()=>{
  navigate('/productspage')
}


useEffect(() => {
    axios.get(`${baseUrl}/user/singleProduct/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });  
      getCart() 
  }, []);

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

const {listPrice,salePrice,productImage,productName,category,type,description}=item

const addToCart=()=>{
  const payload={
    quantity:Number(qty),
    productId:id
  }
axios.post(`${baseUrl}/cart/addProduct`,payload,{
  headers:{
    Authorization:`Bearer ${token}`
  }
})
.then((res)=>{
          alert("item added to cart")
          console.log(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
}

const viewcart=()=>{
  navigate("/cartpage")
}
 


return (
    <>
    <Navbar/>
      <Box  w="90%"  m="auto" mt='40px' className={Style.containter}>
        <Text className={Style.heading}>Brand : {item?.brandName} </Text>
    {/* Main box */}
        <Box mt="30px" display='flex' className={Style.main_box}>
          <Box  w="70%" className={Style.main_box1}>
            <Box display='flex' className={Style.img_desc_box}>
              <Box w="30%" h="280px"  className={Style.img_box}>
                <Image className={Style.imgg}
                border="1px solid gray" 
                borderRadius='8px'
                  p="10px"
                  h="100%"
                  src={'https://thumbnail.imgbin.com/13/18/17/imgbin-coffee-tea-packaging-and-labeling-parcel-bag-design-G9E3ksvw2BMKK24u9zX6A61pT_t.jpg'}
                  alt="Dan Abramov"
                />
              </Box>
              <Box  w="70%" p="20px" ml='10px' className={Style.desc}>
                <Heading
                  size="sm"
                  fontSize="20px"
                  fontWeight="bold"
                  mt="6px"
                  color="rgb(79,88,104)"
                >
                       {item?.name} 
                </Heading>
                <Text mt="10px" mb="10px" color="teal" cursor='pointer' onClick={handlePrevPage}>
                  Type :  {item?.Form}
                </Text>

                {/* Rating and price box */}
                <Box display='flex'  className={Style.rating_price}>
                  <Box >
                    <Box display="flex" mt="15px" mb="15px" alignItems="center">
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <BsStarFill
                            fontSize="22px"
                            key={i}
                            color={
                              i < property.rating ? "teal.500" : "gray.300"
                            }
                          />
                        ))}
                      <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        ({property.reviewCount} ratings)
                      </Box>
                    </Box>

                    <Flex mt="10px">
                      <Heading size="sm" fontWeight="bold" fontSize="20px">
                        ₹{item?.price}
                      </Heading>
                      <Text color="gray.500" ml="10px">
                        MRP{" "}
                        <span style={{ textDecoration: "line-through" }}>
                          ₹{item?.price}
                        </span>
                      </Text>
                      <Text
                        ml="10px"
                        bg="rgb(249,140,142)"
                        pl="5px"
                        pr="5px"
                        color="white"
                      >
                        {item?.discountPercent}
                      </Text>
                    </Flex>
                    <Text fontSize="13px" color="gray.500">
                      Inclusive of all taxes
                    </Text>
                    <Text fontSize="15px"> Delivery by 17 Dec - 18 Dec</Text>
                  </Box>
                  <Spacer />
                  <Box display="flex" className={Style.buttons}>
                    <Box mt='25px' className={Style.view_cart}>

                        {/* View cart button 1 */}
                   <Button colorScheme='teal'  fontSize='20px' w='100%' >View Cart    </Button> 
                   </Box>
                  <Box mt="25px" mr="100px"  className={Style.select_option}>
                   
                    <Select placeholder="Qty 1" w="100%"  onChange={(e)=>setQty(e.target.value)}>
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                    <option value="3"> 3</option>
                    <option value="4"> 4</option>
                  </Select>
                  
          
                    <Button colorScheme='teal'mt='15px'  fontSize='20px' onClick={()=>addToCart(id,listPrice,salePrice,productImage,productName)} className={Style.addCartBtn1}>Add To Cart</Button>
                  
                  </Box>
                 
                  </Box>
                  <Button colorScheme='teal'  fontSize='20px' onClick={()=>addToCart(id,listPrice,salePrice,productImage,productName)} className={Style.addCartBtn2}>Add To Cart</Button>
                </Box>
              </Box>
            </Box>


            {/* Description in bottom section   */} 
            <Divider mt='50px'/>

            {/* <Box  p="20px" mt='50px'>
              <Heading
                size="sm"
                fontSize="18px"
                fontWeight="bold"
                mt="6px"
                mb='20px'
                color="rgb(79,88,104)"
              >
                Description
              </Heading>
              <Text>
                Horlicks Classic Malt Nutrition Drink is a health drink that has
                nutrients to support immunity. Horlicks is clinically proven to
                improve 5 signs of growth and to make kids taller, stronger and
                sharper. Scientifically proven to improve the power of milk,
                Horlicks products are available in many delicious flavours and
                can be consumed by people of all ages. Its unique formula is
                most useful for growing children as it helps in their overall
                development. The Horlicks Classic Malt Health Drink is perfect
                for every member of the family.
              </Text>
              <Heading
                size="sm"
                fontSize="18px"
                fontWeight="bold"
                mt="20px"
                mb='20px'
                color="rgb(79,88,104)"
              >
                Benefits
              </Heading>
              <UnorderedList>
                <ListItem mt='10px'>
                  It is a great health drink that has nutrients to support
                  immunity.
                </ListItem>
                <ListItem mt='10px'>
                  Horlicks Classic is clinically proven to improve 5 signs of
                  growth. Horlicks increase the density of minerals such as
                  calcium in bones to give children bigger and stronger bones.
                </ListItem>
                <ListItem mt='10px'>Horlicks Classic Malt is also clinically proven to make kids taller & stronger. It helps to increase lean tissue which makes children stronger. Horlicks contains important micronutrients (vitamin B6, B12, C, D, calcium, copper, folic acid, iron, selenium and zinc amongst others) and is clinically proven to help children grow taller and stronger when included as part of their regular diet</ListItem>
                <ListItem mt='10px'>Helps improve attention and concentration to make your child sharper</ListItem>
                <ListItem mt='10px'>Horlicks Nutrition Drink improves the power of milk</ListItem>
              </UnorderedList>
            </Box> */}
          </Box>
          <Box  w="30%" p="20px" className={Style.view_cart2}>
            <Heading
              size="sm"
              fontSize="20px"
              fontWeight="bold"
              mt="6px"
              color="rgb(79,88,104)"
            >
           {/* {cartProducts.products && cartProducts.products.length} Items in Cart */}
            </Heading>
            {/* view cart buttton 2 */}
       
            <Button onClick={viewcart} colorScheme="teal" w="100%" fontSize="20px" mt="20px" >
              View Cart{" "}
            </Button>
        
           
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SingleProduct;