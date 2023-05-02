import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

function Accordian() {
  return (
    <>
      <Accordion p={4} w={"85%"} m={"auto"} allowMultiple>
        <AccordionItem m={2}>
          <h2>
            <AccordionButton
              _expanded={{ bg: "#0c8281", color: "white" }}
              bg={"blackAlpha.100"}
              color={"#0c8281"}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                Why Choose Allday Generic
              </Box>
              <AccordionIcon color={"#0c8281"} _expanded={{ color: "red" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={2}>
          <h2>
            <AccordionButton
              _expanded={{ bg: "#0c8281", color: "white" }}
              bg={"blackAlpha.100"}
              color={"#0c8281"}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                Why Choose Allday Generic
              </Box>
              <AccordionIcon color={"#0c8281"} _expanded={{ color: "red" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={2}>
          <h2>
            <AccordionButton
              _expanded={{ bg: "#0c8281", color: "white" }}
              bg={"blackAlpha.100"}
              color={"#0c8281"}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                Why Choose Allday Generic
              </Box>
              <AccordionIcon color={"#0c8281"} _expanded={{ color: "red" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={2}>
          <h2>
            <AccordionButton
              _expanded={{ bg: "#0c8281", color: "white" }}
              bg={"blackAlpha.100"}
              color={"#0c8281"}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                Why Choose Allday Generic
              </Box>
              <AccordionIcon color={"#0c8281"} _expanded={{ color: "red" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default Accordian;
