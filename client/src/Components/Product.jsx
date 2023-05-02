import React from "react";
import { Box, Button, Flex, Image, Text, background } from "@chakra-ui/react";

function Product() {
  return (
    <>
      <Box
        roundedLeft={20}
        roundedTopRight={20}
        roundedBottomRight={20}
        background='#f1f1f1'
      >
        <Image
          fit={"cover"}
          roundedTopLeft={20}
          roundedTopRight={20}
          h={44}
          w={"100%"}
          src="https://ik.manmatters.com/media/misc/pdp/26166758/CR_1600_1600x1200_HN8zyHLxw.jpg?tr=w-500"
        ></Image>
        <Text pl={4} paddingTop={2} fontWeight={"bold"} fontSize={"18"}>
          Pre Workout Gummies (60N)
        </Text>
        <Flex pl={4} paddingTop={1}>
          <Text mr={1} fontSize={22} color={"black"} fontWeight={"bold"}>
            ₹1099
          </Text>
          <Text
            style={{ textDecoration: "line-through" }}
            paddingTop={2}
            fontSize={14}
            color={"blackAlpha.700"}
          >
            ₹1299
          </Text>
        </Flex>
        <Text pl={4} paddingTop={1} fontSize={16} fontWeight={"semibold"}>
          {" "}
          <span color="red">FOR </span>
          Stage 1 Hair Loss
        </Text>

        <Text pl={4} pt={2} fontSize={16} fontWeight={"semibold"}>
          {" "}
          <span color="green">WITH </span>
          Biotin, Vit A, Vit C, Zinc
        </Text>
        <Button
          h={14}
          bgColor={"#5bb47f"}
          textColor={"white"}
          _hover={"none"}
          roundedBottomLeft={20}
          roundedBottomRight={20}
          mt={4}
          w={"100%"}
        >
          Add to Cart
        </Button>
      </Box>
    </>
  );
}

export default Product;
