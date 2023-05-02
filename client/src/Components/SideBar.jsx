import { Box, Center, Divider, Flex, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";
import { BsFillCloudHaze2Fill } from "react-icons/bs";
import { AiFillBug } from "react-icons/ai";
import { BsCapsulePill } from "react-icons/bs";
import { FaCapsules } from "react-icons/fa";
import { GrRestroomMen } from "react-icons/gr";
import { GrRestroomWomen } from "react-icons/gr";
import { MdGroups2 } from "react-icons/md";
import { TbZodiacCancer } from "react-icons/tb";

function SideBar() {
  return (
    <>
      <Box w={260} border={"1px solid grey"}>
        <Flex _hover={{ bg: "#0c8281", color:'white', cursor:'pointer' }} h={10} pt={1}>
          <Center ml={4}>
            <BsFillCloudHaze2Fill />
            <Text pl={2}>BEST SELLING MEDICINE</Text>
          </Center>
        </Flex>

        <Divider></Divider>

        <Flex _hover={{ bg: "#0c8281", color:'white', cursor:'pointer' }} h={10} pt={1}>
          <Center ml={4}>
            <AiFillBug />
            <Text pl={2}>IVERMECTIN</Text>
          </Center>
        </Flex>

        <Divider></Divider>

        <Flex _hover={{ bg: "#0c8281", color:'white', cursor:'pointer' }} h={10} pt={1}>
          <Center ml={4}>
            <BsCapsulePill />
            <Text pl={2}>HYDROXYCHLOROQUINE</Text>
          </Center>
        </Flex>

        <Divider></Divider>

        <Flex _hover={{ bg: "#0c8281", color:'white', cursor:'pointer' }} h={10} pt={1}>
          <Center ml={4}>
            <AiFillBug />
            <Text pl={2}>AZITHROMYCIN</Text>
          </Center>
        </Flex>

        <Divider></Divider>

        <Flex _hover={{ bg: "#0c8281", color:'white', cursor:'pointer' }} h={10} pt={1}>
          <Center ml={4}>
            <FaCapsules />
            <Text pl={2}>QUERCETIN</Text>
          </Center>
        </Flex>

        <Divider></Divider>

        <Flex _hover={{ bg: "#0c8281", color:'white', cursor:'pointer' }} h={10} pt={1}>
          <Center ml={4}>
            <GrRestroomMen />
            <Text pl={2}>MENS HEALTH</Text>
          </Center>
        </Flex>

        <Divider></Divider>

        <Flex _hover={{ bg: "#0c8281", color:'white', cursor:'pointer' }} h={10} pt={1}>
          <Center ml={4}>
            <GrRestroomWomen />
            <Text pl={2}>WOMENS HEALTH</Text>
          </Center>
        </Flex>

        <Divider></Divider>

        <Flex _hover={{ bg: "#0c8281", color:'white', cursor:'pointer' }} h={10} pt={1}>
          <Center ml={4}>
            <MdGroups2 />
            <Text pl={2}>BEAUTY & SKIN CARE</Text>
          </Center>
        </Flex>

        <Divider></Divider>

        <Flex _hover={{ bg: "#0c8281", color:'white', cursor:'pointer' }} h={10} pt={1}>
          <Center ml={4}>
            <TbZodiacCancer />
            <Text pl={2}>ANTI CANCER</Text>
          </Center>
        </Flex>

        
      </Box>
    </>
  );
}

export default SideBar;
