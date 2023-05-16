import { useEffect, useState } from "react";
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
import { baseUrl } from "../Utils/BaseUrl";
import axios from "axios";

function Drop() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([])


  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get(`${baseUrl}/admin/allproducts`)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
  }

const handleMenuToggle = () => {
  setIsOpen(!isOpen);
};

return (
    <Box color={"black"} >
      <Menu isLazy w='500px'>
        <MenuButton w='300px'
          h='40px'
          color={"blackAlpha.700"}
          bg={"white"}
          as={Button}
          rounded={0}
          rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={handleMenuToggle}
        >
          Select Generic Name
        </MenuButton>
        <MenuList w='300px' overflow='auto' maxHeight={200}>
          {data && data.map(ele => (
            <MenuItem>{ele.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default Drop;
