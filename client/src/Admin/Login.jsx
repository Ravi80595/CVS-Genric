import React, { useState } from 'react'
import { Box,Flex,FormControl,Input,Button,FormLabel,Text, Heading,InputGroup,InputRightElement } from '@chakra-ui/react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../Utils/BaseUrl'



const Login = () => {
  const navigate=useNavigate()
  const [show,setShow]=useState(false)
  const [values,setValues]=useState({
    email:"",
    password:"",
  })

const handleClick = () => setShow(!show);

const handleChange=(e)=>{
setValues({...values,[e.target.name]:e.target.value})
}

const handleLogin=()=>{
    let payload={
        email:values.email,
        password:values.password
      }
      if(payload.email=="" || payload.password==""){
        alert("Please fill All Madentory fields")
      }else{
        axios.post(`${baseUrl}/admin/adminLogin`,payload)
        .then((res)=>{
            alert(res.data.msg)
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
        setValues({email:"",password:""})
        // navigate("/dashboard")
      }
}
return (
    <Box width={["90%","90%","35%"]} m="auto" mt={10}>
        <Box p={10} m={[0,0,10]} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
          <Heading textAlign="center" mb={10} fontFamily="cursive">Admin Login</Heading>
            <FormControl isRequired>
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
                    <Button mt={4} width="100%" onClick={handleLogin}>Login</Button>
                    <Text textAlign="center" m={3}>OR</Text>
                    <Text textAlign='center' color="blue">Forget Password?</Text>
                    <Text p={2} textAlign='center'>Don't have an account? 
                    <Link to="/adminSignup">
                     <span style={{color:"blue"}}> Sign up</span>
                    </Link>
                     </Text>
            </FormControl>
        </Box>
</Box>
  )
}

export default Login
