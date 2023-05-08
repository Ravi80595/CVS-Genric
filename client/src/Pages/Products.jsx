import React,{useEffect, useState} from "react";
import {Box,Text,SimpleGrid,Image,Heading,Flex,Select,Spacer,Radio, Divider,Checkbox,Drawer,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button,useDisclosure, RadioGroup, Stack, DrawerBody} from "@chakra-ui/react";
import Style from "./ProductPage.module.css";
import {useNavigate} from 'react-router-dom'
import Navbar from "../Components/Navbar";
import axios from "axios";
import {baseUrl} from '../Utils/BaseUrl'

const Products = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [value, setValue] = React.useState('1')
  const [data,setData]=useState([])
  const navigate =useNavigate() 
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories,setCategories] = useState([])

  function handleRadioChange(event) {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    setValue(selectedCategory);
  }


useEffect(()=>{
  getData()
  getCatories()
},[])

const getCatories=()=>{
  axios.get(`${baseUrl}/admin/allCategories`)
    .then((res)=>{
      console.log(res)
      setCategories(res.data)
    })
}

const getData=()=>{
  axios.get(`${baseUrl}/admin/allproducts`)
  .then((res)=>{
    console.log(res.data)
    setData(res.data)
  })
}


const handleClick=(el)=>{
    navigate(`/singleProduct/${el._id}`)
}

const handleRadioClick=(value)=>{
  axios.get(`${baseUrl}/productsByCategory/${value}`)
  .then((res)=>{
    console.log(res.data)
  })
}



return (
    <>
    <Navbar/>
  <Box pt='10px' bg='#e7e7e7'>
    <Box gap={10} display="flex" w="90%" m="auto" className={Style.main}>
      <Box bg='white' borderRadius={10} w="30%" box-shadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' padding='25px' className={Style.main1}>
        <Box w='90%'>
      <Heading size="sm" fontSize="30px" color='rgb(79,88,104)'>Filter</Heading>
              <Text mt='20px' mb='15px' fontSize='20px'>Category</Text>
    <RadioGroup value={selectedCategory}>
        {categories.map(category => (
          <Flex key={category.id} mb='10px'>
            <Text>{category.name}</Text>
            <Spacer />
            <Radio value={category.id}
            onClick={() => handleRadioClick(category._id)}></Radio>
          </Flex>
        ))}
      </RadioGroup>
         </Box>
      </Box>
      <Box w="70%" borderRadius='10px' bg='white' box-shadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' padding='10px' className={Style.data_box} >
        <Box h="50px"  mb="30px">
          <Flex mt='15px'>
            <Box>
              <Heading size="sm" fontSize="30px" color='rgb(79,88,104)' className={Style.heading}>
                Products
              </Heading>
            </Box>
            <Spacer/>
          </Flex>
        </Box>
        <Box  m='auto' className={Style.sort_filter}>

      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Sort</DrawerHeader>
             <Divider/>
             <DrawerBody>
             <RadioGroup onChange={setValue} value={value} w='90%' m='auto'>
    </RadioGroup>
    </DrawerBody>
          <DrawerFooter>
           
            <Button colorScheme='teal' w='100%'>APPLY</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>

  
        <SimpleGrid columns={[1, 2, 3]} spacing="10px">
        {
           data.map((el)=>(
          <Box
            border="1px"
            borderColor="gray.300"
            padding="8px"
            borderRadius="6px"
            mt="10px"
            key={el._id}
            className={Style.main2}
            onClick={()=>handleClick(el)}
          >
            <Image
              m="auto"
              mt="5px"
              height="200px"
              src={'https://cms-contents.pharmeasy.in/carousel_item/b513563fb1a-Ourdaily.jpg'}
              alt="Vicks"
            />
            <Heading size="sm" fontSize="17px" fontWeight="bold" mt="6px" color='rgb(79,88,104)'>
              {el.name}
            </Heading>
            <Flex mt="10px">
              <Text color='gray.500'>{el.brandName}</Text>
              <Text
                ml="10px"
                bg="rgb(249,140,142)"
                pl="5px"
                pr="5px"
                color="white"
              >
                {el.Form}
              </Text>
            </Flex>
            <Heading size="sm">₹{el.price}</Heading>

            {/* <Button onClick={()=>addCart(el.productId)}>Add To Cart</Button> */}
          </Box>
               ) )} 
        </SimpleGrid>
      </Box>
    </Box>
</Box>
</>
);
};

export default Products;