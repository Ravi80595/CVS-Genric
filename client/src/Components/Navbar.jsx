import { Box, Button, Flex, Image, Input, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import HomePage from "../Pages/HomePage";
import { screen } from "@testing-library/react";
import Drop from "./dropdown";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Show, Hide } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {SearchIcon} from '@chakra-ui/icons'

function Navbar() {

  const searchStyle={
    borderRight: "none",
    borderRadius: '0px',
    paddingTop:"2px",
    paddingBottom:"6px",
    width: '250px',
    // borderTopRightRadius:"0px",
    // borderBottomRightRadius:"0px"
    backgroundColor:'white'
  }
  const buttonStyle={
    borderRadius: '0px',
    // border: '0px solid red',
    // background: 'red',
    width: '40px',
    height: '40px',
    color: 'black',
    fontSize: '20px',
    fontWeight: 'bold',
    borderLeft: "none",
    borderTopLeftRadius:"0px",
    borderBottomLeftRadius:"0px"
  }


return (
    <>
      {/* Black Navbar */}
      <Flex
        justifyContent={"end"}
        padding={"5px"}
        color={"white"}
        backgroundColor={"black"}
      >
        <Text fontWeight={"bold"} fontSize={12} marginRight={6}>
          SHIPMENT TRACKING
        </Text>
        <Text fontWeight={"bold"} fontSize={12} marginRight={6}>
          CHECK YOUR ORDER STATUS
        </Text>
        <Text fontWeight={"bold"} fontSize={12} marginRight={6}>
          MY ACCOUNT
        </Text>
        <Text fontWeight={"bold"} fontSize={12} marginRight={6}>
          CART
        </Text>
        <Text fontWeight={"bold"} fontSize={12} marginRight={6}>
          LOG IN
        </Text>
      </Flex>
      {/* Main Navbar */}

      <Show breakpoint="(min-width: 400px)">
        <Flex p={5} bg={"#0c8281"} gap={20}>
          <Link to='/'>
          <Image
            mr={40}
            h={12}
            src="https://cdn-cjggf.nitrocdn.com/HPkQrOnkFqWDWMDqtHKZnZrDSaZHrXHw/assets/images/optimized/rev-f88a99a/wp-content/uploads/2019/04/adg-1-1.png"
            ></Image>
            </Link>
          <Drop />
          <Flex>
    <Input type='text' placeholder='Search for medicine ' style={searchStyle} />  
    <Button style={buttonStyle}><SearchIcon/></Button>
    </Flex>
          {/* <input w='350px' placeholder="Search for medicine" bg='white'/> */}
          <HiOutlineShoppingBag color="white" size={40} />
        </Flex>
      </Show>

      {/* Phone Screen Navbar */}

      <Show breakpoint="(max-width: 400px)">
        <Flex p={4} bg={"#0c8281"}>
          <Image
            mr={"10%"}
            h={12}
            src="https://cdn-cjggf.nitrocdn.com/HPkQrOnkFqWDWMDqtHKZnZrDSaZHrXHw/assets/images/optimized/rev-f88a99a/wp-content/uploads/2019/04/adg-1-1.png"
          ></Image>
          <Link to='/cartpage'>
          <HiOutlineShoppingBag color="white" size={40} />
          </Link>
        </Flex>
        <Box margin={"auto"}>
          <Drop />
          <Drop />
        </Box>
      </Show>

      {/* Options Navbar */}

      <Flex pl={20} mb={10} justifyContent={"start"} h={12} bg={"#f4f4f4"}>
        <Link to='/'>
        <Text
          color={"#74828a"}
          fontSize={13}
          mt={3}
          mr={"6%"}
          pr={10}
          w={40}
          fontWeight={"bold"}
          _hover={{ color: "#0c8281", cursor: "pointer" }}
          >
          Home
        </Text>
          </Link>
        <Link to='/products'>
        <Text
          color={"#74828a"}
          fontSize={13}
          mt={3}
          mr={"6%"}
          fontWeight={"bold"}
          w={200}
          _hover={{ color: "#0c8281", cursor: "pointer" }}
          >
          All Categories
        </Text>
          </Link>
        <Text
          color={"#74828a"}
          fontSize={13}
          mt={3}
          mr={"6%"}
          fontWeight={"bold"}
          _hover={{ color: "#0c8281", cursor: "pointer" }}
        >
          Blog
        </Text>
      </Flex>

      {/* <HomePage /> */}
    </>
  );
}

export default Navbar;
