import React, { useState } from 'react'
import {Box,Flex,FormControl,FormLabel,Input,Button,Text,InputGroup,InputRightElement} from '@chakra-ui/react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../Utils/BaseUrl'


const UserSign = () => {
  const navigate=useNavigate()
  const [show,setShow]=useState(false)
  const [values,setValues]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  })

const handleClick = () => setShow(!show);

const handleChange=(e)=>{
setValues({...values,[e.target.name]:e.target.value})
}
const handleSignup=()=>{
  let payload={
    firstName:values.firstName,
    lastName:values.lastName,
    email:values.email,
    password:values.password
  }
if(payload.firstName=="" || payload.email=="" || payload.password==""){
  alert("Please fill All Madentory fields")
}else{
  axios.post(`${baseUrl}/user/register`,payload)
  .then((res)=>{
      alert(res.data.msg)
      console.log(res)
  })
  .catch((err)=>{
      console.log(err)
  })
  setValues({email:"",password:""})
  // navigate("/adminLogin")
}
}

return (
    <Box width={["90%","90%","35%"]} m="auto" mt={10}>
    <Box p={10} m={[0,0,10]} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
      {/* <Heading textAlign="center" mb={10} fontFamily="cursive">Admin Signup</Heading> */}
        <FormControl isRequired>
        <FormLabel>First-Name</FormLabel>
                <Input type="text" placeholder='Enter first name' name='firstName' onChange={handleChange}/>
                <FormLabel>Last-Name</FormLabel>
                <Input type="text" placeholder='Enter last name' name='lastName' onChange={handleChange}/>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder='Enter email' name='email' onChange={handleChange}/>
                <FormLabel>Password</FormLabel>
               <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      name="password"
                      onChange={handleChange}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
               </InputGroup>
                <Button mt={4} width="100%" onClick={handleSignup}>Register</Button>
                <Text textAlign="center" m={3}>OR</Text>
                <Text textAlign='center' color="blue">Forget Password?</Text>
                <Text p={2} textAlign='center'>Already have an account. 
                <Link to="/userlogin">
                 <span style={{color:"blue"}}> Login</span>
                </Link>
                 </Text>
        </FormControl>
    </Box>
</Box>

  )
}

export default UserSign
