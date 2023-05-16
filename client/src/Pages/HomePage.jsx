import React, { useState } from "react";
import BestSeller from "../Components/BestSeller";
import OnlineDrugStore from "../Static/OnlineDrugStore";
import Accordian from "../Components/Accordian";
import {
  Box,
  Divider,
  Flex,
  Hide,
  Show,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Carousel from "../Components/Carousel";
import { BiSearch } from "react-icons/bi";
import { ImCart, ImTruck } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SideBar from "../Components/SideBar";
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer/Foter";
import ChatBox from "../Components/ChatBox";
import ChatIcon from "../Components/ChatIcons";
import ChatIcon2 from "../Components/ChatIcon2";


function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatIconClick = () => {
    setIsChatOpen(!isChatOpen);
  };


return (
    <>
    <Navbar/>
      <Flex justifyContent={"space-evenly"} mb={10} w='95%' m='auto'>
        {/* Mobile View */}
        <Hide breakpoint="(max-width: 400px)">
          <SideBar />
        </Hide>
        <Box w={"76%"}>
          <Carousel />
        </Box>
      </Flex>
      <BestSeller />
      <OnlineDrugStore />
      <Accordian />
      <Flex m={"auto"} w={"80%"} p={1} bg={"blackAlpha.200"} mb={10}>
          <Flex w={40} mr={10} mt={4} borderRight='2px solid white'>
            <Box mr={6}>
              <BiSearch size={40} />
            </Box>
            <Box>
              <Text fontWeight={"bold"} fontSize={15}>
                Search
              </Text>
              <Text fontSize={12} fontWeight={"bold"} color={"blackAlpha.600"}>
                For Your Medicined
              </Text>
            </Box>
          </Flex>
          <Flex w={40} mr={10} mt={4} borderRight='2px solid white'>
            <Box mr={6}>
              <ImCart size={40} />
            </Box>
            <Box>
              <Text fontWeight={"bold"} fontSize={15}>
                Add to Cart
              </Text>
              <Text fontSize={12} fontWeight={"bold"} color={"blackAlpha.600"}>
                Pay Or Pay Later
              </Text>
            </Box>
          </Flex>
          <Flex w={40} mr={10} mt={4} borderRight='2px solid white'>
            <Box mr={6}>
              <ImTruck size={40} />
            </Box>
            <Box>
              <Text fontWeight={"bold"} fontSize={15}>
                Attach Prescription
              </Text>
              <Text fontSize={12} fontWeight={"bold"} color={"blackAlpha.600"}>
                Wherever Needed
              </Text>
            </Box>
          </Flex>
          <Flex mr={10} mt={4}>
            <Box mr={6}>
              <ImTruck size={40} />
            </Box>
            <Box>
              <Text fontWeight={"bold"} fontSize={15}>
                Receive Order
              </Text>
              <Text fontSize={12} fontWeight={"bold"} color={"blackAlpha.600"}>
                Trusted Pharmacy
              </Text>
            </Box>
          </Flex>
      </Flex>
      <Flex justifyContent={"end"} p={5} bgColor={"#0c8281"}>
        <Box mr={2} p={1.5} bg={"#3b5a9a"}>
          <FontAwesomeIcon icon={faFacebook} size="lg" color="white" />
        </Box>
        <Box mr={2} p={1.5} bg={"#1aa9e1"}>
          <FontAwesomeIcon icon={faTwitter} size="lg" color="white" />
        </Box>
        <Box mr={2} p={1.5} bg={"#cc2127"}>
          <FontAwesomeIcon icon={faPinterest} size="lg" color="white" />
        </Box>
        <Box mr={2} p={1.5} bg={"#7c4a3a"}>
          <FontAwesomeIcon icon={faInstagram} size="lg" color="white" />
        </Box>
        <Box mr={2} p={1.5} bg={"#0073b2"}>
          <FontAwesomeIcon icon={faLinkedin} size="lg" color="white" />
        </Box>
      </Flex>
      <Footer/>
      <div className="chat">
      {isChatOpen && <ChatBox/>}
      {isChatOpen?<ChatIcon2 onClick={handleChatIconClick}/>:
      <ChatIcon onClick={handleChatIconClick} />}
      </div>
    </>
  );
}

export default HomePage;
