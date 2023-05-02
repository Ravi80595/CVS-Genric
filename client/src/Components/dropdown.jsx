import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

function Drop() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box color={"black"} >
      <Menu isLazy w='500px'> 
        <MenuButton w='300px'
          h='50px'
          color={"blackAlpha.700"}
          bg={"white"}
          as={Button}
          rounded={0}
          rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={handleMenuToggle}
        >
          Select Generic Name
        </MenuButton>
        <MenuList  w='300px'>
          <MenuItem>Product 1</MenuItem>
          <MenuItem>Product 2</MenuItem>
          <MenuItem>Product 3</MenuItem>
          <MenuItem>Product 3</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default Drop;
