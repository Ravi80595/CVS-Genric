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
            bg='blue'
            color='white'
            borderRadius={16}
            h={12}
            pl={8}
            pr={8}
            _focus={{
              outline: "blue",
              background:'blue',
              color:'white'
            }
            }
            _active={
              {
                bg: "blue",
                color:'white'
              }
            }
            fontWeight={"bold"}
            fontSize={20}
          >
            Hair
          </Tab>
          <Tab
            ml={6}
            bg='red'
            color={"#5194d1"}
            borderRadius={16}
            h={12}
            pl={8}
            pr={8}
            // w={28}
            fontWeight={"bold"}
            fontSize={20}
            _focus={{
              outline: "red",
              background:'red'
            }
            }
            _active={
              {
                bg: "red"
              }
            }
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
              <Product color='blue' price={399} image={'https://www.alldaygeneric.com/wp-content/uploads/2019/01/Anti-Hair-Loss-Cream-300x300.jpg'} title={'Anti hair loss cream'} />
              <Product color='blue' price={250} image={'https://www.alldaygeneric.com/wp-content/uploads/2019/02/Appecia-1-mg-300x300.jpg'} title={'Appecia 1 mg'} />
              <Product color='blue' price={1200} image={'https://www.alldaygeneric.com/wp-content/uploads/2019/01/Bontress-Hair-Serum-300x300.jpg'} title={'Bontress Hair serum'} />
              <Product color='blue' price={999} image={'https://www.alldaygeneric.com/wp-content/uploads/2019/01/Bontress-Lotion-300x300.jpg'} title={'Anti hair loss cream'} />
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 4]} spacing="35px">
              <Product color='red' image={'https://www.alldaygeneric.com/wp-content/uploads/2019/01/ayurslim-capsule-300x300.jpg'} title={'Ayurslim capsule'} price={280} />
              <Product color='red' image={'https://www.alldaygeneric.com/wp-content/uploads/2019/01/ayurslim-capsule-300x300.jpg'} title={'Obelit'} price={190} />
              <Product color='red' image={'https://www.alldaygeneric.com/wp-content/uploads/2019/01/Slim-Trim-Active-60-mg-600x600.jpg'} title={'Orlistat 120mg capsule'} price={200} />
              <Product color='red' image={'https://www.alldaygeneric.com/wp-content/uploads/2019/01/Reeshape-120-mg-600x600.jpg'} title={'Reshape'} price={1999} />
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 4]} spacing="35px">
              <Product price={270} image={'https://www.alldaygeneric.com/wp-content/uploads/2019/01/acnedap-gel-300x300.jpghttps://www.alldaygeneric.com/wp-content/uploads/2019/01/Bontress-Lotion-300x300.jpg'} title={'Anti hair loss cream'} />
              <Product price={1400} image={'https://www.alldaygeneric.com/wp-content/uploads/2019/01/acnedap-gel-300x300.jpg'} title={'Anti hair loss cream'} />
              <Product price={120} image={'https://www.alldaygeneric.com/wp-content/uploads/2019/01/Bontress-Hair-Serum-300x300.jpg'} title={'Bontress Hair serum'} />
              <Product price={500} image={'https://www.alldaygeneric.com/wp-content/uploads/2019/01/Bontress-Lotion-300x300.jpg'} title={'Anti hair loss cream'} />
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 4]} spacing="35px">
              <Product price={120} image={'https://www.alldaygeneric.com/wp-content/uploads/2019/01/Bontress-Hair-Serum-300x300.jpg'} title={'Bontress Hair serum'} />
              <Product price={500} image={'https://www.alldaygeneric.com/wp-content/uploads/2019/01/Bontress-Lotion-300x300.jpg'} title={'Anti hair loss cream'} />
              <Product />
              <Product image={'https://www.alldaygeneric.com/wp-content/uploads/2019/01/ayurslim-capsule-300x300.jpg'} title={'Ayurslim capsule'} price={280} />
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
      <Reviews />
    </Box>
  );
}

export default BestSeller;
