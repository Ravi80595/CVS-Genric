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
                100% Delivery Guarantee
              </Box>
              <AccordionIcon color={"#0c8281"} _expanded={{ color: "red" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Our customer service and customer satisfaction rank above everything else. so in the event that there is ever a delay in your shipment. you can count AllDayGenric to ship your order at no cost in accordance to our 100% Delivery Guarantee.
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
          All Day Genric belive in directing our skills and expertise in delvivering and developing quality, in online drugstore services which is not gained by accident.    </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={2}>
          <h2>
            <AccordionButton
              _expanded={{ bg: "#0c8281", color: "white" }}
              bg={"blackAlpha.100"}
              color={"#0c8281"}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
               Hassle-Free Service
              </Box>
              <AccordionIcon color={"#0c8281"} _expanded={{ color: "red" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Our home delivery service provides the utmost convenice to help your order drugs online without compromisng on time and quality. Along with being well-recoginzed for dispering high quality drugs inexpensively.
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
               100% No Questions Asked Money Back Guarantee
              </Box>
              <AccordionIcon color={"#0c8281"} _expanded={{ color: "red" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            If at any time, for any reason you are not satisfed, so well will issue a total refund to you as part of our 100% No Question Asked Money Back Guarantee. AllDayGenric belive that you should notible to keep a product if you are not completely satisfied.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default Accordian;
