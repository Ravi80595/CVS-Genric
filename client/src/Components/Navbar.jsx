import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import HomePage from "../Pages/HomePage";
import { screen } from "@testing-library/react";
import Drop from "./dropdown";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Show, Hide } from "@chakra-ui/react";

function Navbar() {
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
        <Flex p={5} bg={"#0c8281"} justifyContent='space-around'>
          <Image
            mr={40}
            h={12}
            src="https://cdn-cjggf.nitrocdn.com/HPkQrOnkFqWDWMDqtHKZnZrDSaZHrXHw/assets/images/optimized/rev-f88a99a/wp-content/uploads/2019/04/adg-1-1.png"
          ></Image>
          <Drop />

          <Box w={"80px"}></Box>
          <Drop />
          <Box w={"80px"}></Box>
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
          <HiOutlineShoppingBag color="white" size={40} />
        </Flex>
        <Box margin={"auto"}>
          <Drop />
          <Drop />
        </Box>
      </Show>

      {/* Options Navbar */}

      <Flex pl={20} mb={10} justifyContent={"start"} h={12} bg={"#f4f4f4"}>
        <Text
          color={"#74828a"}
          fontSize={13}
          mt={3}
          mr={"6%"}
          fontWeight={"bold"}
          _hover={{ color: "#0c8281", cursor: "pointer" }}
        >
          Home
        </Text>
        <Text
          color={"#74828a"}
          fontSize={13}
          mt={3}
          mr={"6%"}
          fontWeight={"bold"}
          _hover={{ color: "#0c8281", cursor: "pointer" }}
        >
          All Categories
        </Text>
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
