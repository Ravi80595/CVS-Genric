import React, { useEffect, useState } from 'react'
import { Box,TableContainer,Table,Thead,Tr,Th,Tbody,Td,Spinner,Image,Flex,Text,Input,Select } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../Utils/BaseUrl'

const UsersPage = () => {
  const [users,setUsers]=useState([])
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
//   const { token } = JSON.parse(localStorage.getItem("socialPshcyoToken"))
console.log(users,'users')

useEffect(()=>{
  setLoading(true)
  axios.get(`${baseUrl}/admin/allUsers`)
  .then((res)=>{
    console.log(res.data)
    setUsers(res.data)
    setLoading(false)
  })
  .catch((err)=>{
    console.log(err)
  })
},[])

const handleChange = (e) => {
axios.get(`${baseUrl}/users/search/${e.target.value}`,{
headers:{
//   Authorization:`Bearer ${token}`
}
}).then((res)=>{
console.log(res)
setUsers(res.data)
})
.catch((err)=>{
console.log(err)
})
}

const handleNavigate=(ele)=>{
  navigate(`/adminsingleuser/${ele._id}`)
}

if(loading){
return <Spinner textAlign='center' mt={50} ml={50} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
}



return (
    <Box>
      <Flex justifyContent="space-between" pb={10}>
        <Text w={["30%","30%","30%","15%"]} fontSize={["10px","10px","10px","20px"]}>Total Users : {users.length}</Text>
        <Input fontSize={["10px","10px","10px","20px"]} onInput={handleChange} w={["30%","30%","30%","55%"]} placeholder="search user"/>
        <Text w={["30%","30%","30%","20%"]} fontSize={["10px","10px","10px","20px"]}>Verified Users : 0</Text>
      </Flex>
          <TableContainer>
            <Table size='sm'>
              <Thead>
                <Tr textAlign='center'>
                  <Th>Image</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Date</Th>
                </Tr>
              </Thead>
              <Tbody>
      {
        users && users.map(ele=>(
                <Tr onClick={()=>handleNavigate(ele)} cursor="pointer" _hover={{backgroundColor:"#f3f4f6"}}>
                  <Td><Image w={50} src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png`}/></Td>
                  <Td>{ele.firstName} {ele.lastName}</Td>
                  <Td>{ele.email}</Td>
                  <Td>{ele.date}</Td>
                </Tr>
                ))
              }
              </Tbody>
            </Table>
          </TableContainer>
    </Box>
  )
}

export default UsersPage