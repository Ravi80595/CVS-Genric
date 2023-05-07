import React from 'react'
import { Flex,Box,Text,Button,Table,Tr,Th,Thead,Tbody,Td,Image, useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,Input,Select,Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { DeleteIcon } from '@chakra-ui/icons'
import {baseUrl} from '../Utils/BaseUrl'



const ProductPage = () => {
    const [products,setProducts] = useState([])
    const [categoryName,setCategoryName]= useState("")
    const [productName,setProductName]=useState('')
    const [salePrice,setSalePrice]= useState('')
    const [categories,setCategories] = useState([])
    const [category,setCategory]= useState("")
    const [type,setType]= useState("")
    const [description,setDescription] = useState("")
    const { isOpen:isCategoryOpen, onOpen:onCategoryOpen, onClose:onCategoryClose } = useDisclosure()
    const { isOpen:isProductOpen, onOpen:onProductOpen, onClose:onProductClose } = useDisclosure()
    const [loading,setLoading] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('');


    function handleSelectChange(event) {
      const selectedCategory = event.target.value;
      setSelectedCategory(selectedCategory);
      // call the onSelect function here, if needed
    }

   {/* ..................  All Product Method Here ........................ */}

const getData=()=>{
  setLoading(true)
  axios.get(`${baseUrl}/admin/allProducts`)
  .then((res)=>{
    console.log(res.data)
    setProducts(res.data)
    setLoading(false)
  })
}

  useEffect(()=>{
    getData()
    getCategories()
  },[])

  const getCategories=()=>{
    axios.get(`${baseUrl}/admin/allCategories`)
    .then((res)=>{
      console.log(res)
      setCategories(res.data)
    })
  }

   {/* ..................  Product Delete Method Here ........................ */}

const handleDelete=(prodid)=>{
  axios.delete(`${baseUrl}Dashproduct/delproduct/${prodid}`,{
    headers:{
      authorization:`Bearer ${localStorage.getItem("admintoken")}`
    }
  })
  .then((res)=>{
    alert(res.data.msg)
    getData()
  })
}

   {/* ..................  Add Product Method Here ........................ */}

const handleAdd=()=>{
axios.post(`${baseUrl}/admin/addCategory`,{name:categoryName})
.then((res)=>{
  console.log(res)
  // getData()
  alert("Category Added")
  setCategoryName("") 
 })
}

const handleAddProduct=()=>{
  const payload={
    name:productName,
    price:salePrice,
    categoryName:selectedCategory,
    description:description
  }
axios.post(`${baseUrl}/admin/addproduct`,payload)
.then((res)=>{
  console.log(res)
  alert('Product added')
})
}



   {/* ..................  More Details Product ........................ */}

    const handleDetails=(ele)=>{
      const r=ele
      localStorage.setItem("product",JSON.stringify(r))
    }

  

return (
    <Box>
      <Flex mb="30px" direction={['column','column','row']} justifyContent="space-between" alignItems="center" > 
          <Text fontWeight='bold' pb={5}>All Products : {products.length}</Text>
          <Flex gap={5}>
          <Button bg="white" border="1px solid grey" onClick={onCategoryOpen}>+ Add Category</Button>
          <Button bg="white" border="1px solid grey" onClick={onProductOpen}>+ Add Product</Button>
          </Flex>
          </Flex>

   {/* ..................  Add Product UI Here ........................ */}

   <Modal isOpen={isCategoryOpen} onClose={onCategoryClose} scrollBehavior="inside">
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Add New Category</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mt='-8'>
                        <Flex direction="column" gap="10px" mt="50px">
                        <label>Category Name</label>
                        <Input type="text" placeholder="Product Name" value={categoryName} onChange={(e)=>setCategoryName(e.target.value)}/>
                        <Button onClick={handleAdd} mb="25px" color="white" bg="black" _hover={{bg:"grey"}} >Add</Button>
                        </Flex> 
                    </ModalBody>
                    </ModalContent>
    </Modal>

    <Modal isOpen={isProductOpen} onClose={onProductClose} scrollBehavior="inside">
    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Add New Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mt='-8'>
                        <Flex direction="column" gap="10px" mt="50px">
                        <label>Product Name</label>
                        <Input type="text" placeholder="Product Name" value={productName} onChange={(e)=>setProductName(e.target.value)}/>
                        <label>Price</label>
                        <Input type="text" placeholder="Price" value={salePrice} onChange={(e)=>setSalePrice(e.target.value)}/>
                        <label htmlFor="select-category">Select a category:</label>
      <Select id="select-category" value={selectedCategory} onChange={handleSelectChange}>
        <option value="">Select a category</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </Select>
                        <label>Descripition</label>
                        <Input type="text" placeholder="Descripition" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        <Button onClick={handleAddProduct} mb="25px" color="white" bg="black" _hover={{bg:"grey"}} >Add</Button>
                        </Flex> 
                    </ModalBody>
                    </ModalContent>
    </Modal>

 {/* ..................  All Product UI Table Here ........................ */}

          <Table>
              <Thead>
                <Tr>
                  <Th>Image</Th>
                  <Th className='productRow2'>Name</Th>
                  <Th className='productRow'>Price</Th>
                  <Th className='productRow'>Stock</Th>
                  <Th className='productRow'>Remove</Th>
                  <Th>Details</Th>
                </Tr>
              </Thead>
              <Tbody id="product_tbody">

 {/* ................... Loading Functionallity Here .................. */}

 {loading&&<Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                    ml={200}
                    mt={50}
/>}

                {/* <!-- items row comes here --> */}
                {products && products.map((ele)=>{
                  return(
                    <Tr key={ele._id}>
                      <Td width="60px">
                        <Image src={'https://img.freepik.com/free-photo/top-view-different-pills-blue-background_179666-17430.jpg'}/>
                      </Td>
                        <Td width="40%" padding="5px" className='productRow2'>
                        <p fontSize={15} >{ele.name}</p>
                        </Td>
                        <Td width="20px" paddding-right="50px"  className='productRow'>
                        <p>{ele.price}</p>
                        </Td>
                        <Td  className='productRow'>  
                        <p fontSize={20}>{ele.stocks}pcs</p>
                        </Td>
                        <Td fontSize='25px'  className='productRow' _hover={{color:"red",cursor:"pointer"}}>  
                        <DeleteIcon onClick={()=>handleDelete(ele._id)} />
                        </Td>
                        <Td>
                          <Link to="/adminsingleP">
                          <Button onClick={()=>handleDetails(ele)} >More Details</Button>
                          </Link>
                        </Td>
                    </Tr>
                  )
                })
                }
              </Tbody>
            </Table>
    </Box>
  )
}

export default ProductPage