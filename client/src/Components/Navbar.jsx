import { Box, Button, Flex, Image, Input, Spacer, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Drop from "./dropdown";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Show, Hide } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from '@chakra-ui/icons'

function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  console.log(isDropdownVisible)
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  function handleButtonHover() {
    setIsDropdownVisible(true);
  }

  function handleButtonLeave() {
    setIsDropdownVisible(false);
  }
  const searchStyle = {
    borderRight: "none",
    borderRadius: '0px',
    paddingTop: "2px",
    paddingBottom: "6px",
    width: '250px',
    backgroundColor: 'white'
  }
  const buttonStyle = {
    borderRadius: '0px',
    width: '40px',
    height: '40px',
    color: 'black',
    fontSize: '20px',
    fontWeight: 'bold',
    borderLeft: "none",
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px"
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
            <Button style={buttonStyle}><SearchIcon /></Button>
          </Flex>
          {/* <input w='350px' placeholder="Search for medicine" bg='white'/> */}
          <Link to='/cartpage'
            >
            <Box
            onMouseLeave={handleMouseLeave} 
              onMouseEnter={handleMouseEnter}
            >

            <HiOutlineShoppingBag 
            color="white" size={40} />
            </Box>
          </Link>
        </Flex>
      </Show>
      {isHovered && (
        <Box
          position="absolute"
          top="100%"
          left="50%"
          transform="translateX(-50%)"
          bg="white"
          borderRadius="md"
          boxShadow="md"
          p="2"
        >
          <p>Content to show on hover</p>
        </Box>
      )}


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
        <Text onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} color={"#74828a"} fontSize={13} mt={3} mr={"6%"} fontWeight={"bold"} w={200}
          _hover={{ color: "#0c8281", cursor: "pointer" }}> All Categories  </Text>
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
      {isDropdownVisible && (
        <Box bg='white' position='absolute' zIndex={999} w='80%' ml='10%' mt='-40px'>
          <Flex p={5} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} gap={20}>
            <Box color='#0c8281'>
              <Text cursor='pointer' p={2}>New Arrival</Text>
              <Text cursor='pointer' p={2}>Alzhamers</Text>
              <Text cursor='pointer' p={2}>Anti Malarial</Text>
              <Text cursor='pointer' p={2}>Anti Asthma</Text>
              <Text cursor='pointer' p={2}>DEVICES</Text>
              <Text cursor='pointer' p={2}>HCG Injection</Text>
              {/* </ul> */}
            </Box>
            <Box color='#0c8281'>
              {/* <ul> */}
              <Text cursor='pointer' p={2}>DEVICES</Text>
              <Text cursor='pointer' p={2}>HCG Injection</Text>
              <Text cursor='pointer' p={2}>Anti Malarial</Text>
              <Text cursor='pointer' p={2}>Anti Asthma</Text>
              <Text cursor='pointer' p={2}>DEVICES</Text>
              <Text cursor='pointer' p={2}>HCG Injection</Text>
              {/* </ul> */}
            </Box>
            <Box color='#0c8281'>
              <Text p={2}>Anti Asthma</Text>
              <Text cursor='pointer' p={2}>DEVICES</Text>
              <Text cursor='pointer' p={2}>Anti Malarial</Text>
              <Text cursor='pointer' p={2}>Anti Asthma</Text>
              <Text cursor='pointer' p={2}>DEVICES</Text>
              <Text cursor='pointer' p={2}>HCG Injection</Text>
            </Box>
            <Box color='#0c8281'>
              <Text cursor='pointer' p={2}>New Arrival</Text>
              <Text cursor='pointer' p={2}>Alzhamers</Text>
              <Text cursor='pointer' p={2}>Anti Malarial</Text>
              <Text cursor='pointer' p={2}>Anti Asthma</Text>
              <Text cursor='pointer' p={2}>DEVICES</Text>
              <Text cursor='pointer' p={2}>HCG Injection</Text>
            </Box>
            <Box color='#0c8281'>
              <Text p={2}>Anti Malarial</Text>
              <Text cursor='pointer' p={2}>Anti Asthma</Text>
              <Text cursor='pointer' p={2}>DEVICES</Text>
              <Text cursor='pointer' p={2}>Anti Asthma</Text>
              <Text cursor='pointer' p={2}>DEVICES</Text>
              <Text cursor='pointer' p={2}>HCG Injection</Text>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
}

export default Navbar;
