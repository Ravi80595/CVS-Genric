import { Box, Button, Flex, Image, Text, background } from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Product from "./Product";
import { SimpleGrid } from "@chakra-ui/react";
import { color } from "framer-motion";
import Reviews from "./Reviews";

function BestSeller() {
  return (
    <Box padding={10}>
      <Text fontWeight={"bold"} fontSize={"3xl"}>
        Best Seller
      </Text>
      <Text
        mb={10}
        fontWeight={"bold"}
        fontSize={"1xl"}
        color={"blackAlpha.600"}
      >
        Browse our best sellers by type of your concerns
      </Text>

      {/* Tabs */}

      <Tabs variant="soft-rounded">
        <TabList mb={8}>
          <Tab
            ml={8}
            bg={"#e1eff8"}
            color={"#5194d1"}
            borderRadius={16}
            h={12}
            pl={8}
            pr={8}
            // w={28}
            fontWeight={"bold"}
            fontSize={20}
          >
            Hair
          </Tab>
          <Tab
            ml={6}
            bg={"#e1eff8"}
            color={"#5194d1"}
            borderRadius={16}
            h={12}
            pl={8}
            pr={8}
            // w={28}
            fontWeight={"bold"}
            fontSize={20}
          >
            Body
          </Tab>
          <Tab
            ml={6}
            bg={"#e1eff8"}
            color={"#5194d1"}
            borderRadius={16}
            h={12}
            pl={8}
            pr={8}
            // w={28}
            fontWeight={"bold"}
            fontSize={20}
          >
            Nutrition
          </Tab>
          <Tab
            ml={6}
            bg={"#e1eff8"}
            color={"#5194d1"}
            borderRadius={16}
            h={12}
            pl={8}
            pr={8}
            // w={28}
            fontWeight={"bold"}
            fontSize={20}
          >
            Beard
          </Tab>
          <Tab
            ml={6}
            bg={"#e1eff8"}
            color={"#5194d1"}
            borderRadius={16}
            h={12}
            pl={6}
            pr={6}
            // w={28}
            fontWeight={"bold"}
            fontSize={20}
          >
            Performance
          </Tab>
          <Tab
            ml={6}
            bg={"#e1eff8"}
            color={"#5194d1"}
            borderRadius={16}
            h={12}
            pl={8}
            pr={8}
            // w={28}
            fontWeight={"bold"}
            fontSize={20}
          >
            Skin
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 4]} spacing="35px">
              <Product />
              <Product />
              <Product />
              <Product />
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 4]} spacing="35px">
              <Product />
              <Product />
              <Product />
              <Product />
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 4]} spacing="35px">
              <Product />
              <Product />
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 4]} spacing="35px">
              <Product />
              <Product />
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 4]}  spacing="35px">
              <Product />
              <Product />
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 4]} spacing="35px">
              <Product />
              <Product />
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Flex mt={10} justifyContent={"space-evenly"}>
        <Box border={"1px solid black"} h={300}>
          <Image
            h={"100%"}
            w={"100%"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbgaCjd4zVB-Ao2e-0snXV770TKxpFuYVtzC0n6RnEo3zDRELaPjt77sMp2ESA2PuWxY&usqp=CAU"
          ></Image>
        </Box>

        <Box h={300} border={"1px solid black"}>
          <Image
            h={"100%"}
            w={"100%"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbgaCjd4zVB-Ao2e-0snXV770TKxpFuYVtzC0n6RnEo3zDRELaPjt77sMp2ESA2PuWxY&usqp=CAU"
          ></Image>
        </Box>
      </Flex>
      {/* What Our Customer Says */}

      <Text pt={10} fontWeight={"bold"} fontSize={"3xl"}>
        What Our Customer Say
      </Text>
      <Reviews/>
    </Box>
  );
}

export default BestSeller;
