import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";

function ProductDropdown() {
  const [selected, setSelected] = useState("Electronics");

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg="transparent"
        fontWeight="medium"
        _hover={{ bg: "gray.100" }}
        _expanded={{ bg: "gray.100" }}
        _focus={{ boxShadow: "none" }}
        borderRadius="md"
        px={4}
        py={2}
      >
        {selected}
      </MenuButton>
      <MenuList borderRadius="xl" py={2} boxShadow="lg">
        {["Electronics", "Sports"].map((option) => (
          <MenuItem
            key={option}
            onClick={() => setSelected(option)}
            _hover={{ bg: "gray.100" }}
            py={3}
            px={4}
            fontWeight={selected === option ? "bold" : "normal"}
          >
            <Flex justify="space-between" align="center" w="full">
              <Text>{option}</Text>
              {selected === option && <CheckIcon boxSize={4} color="black" />}
            </Flex>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default ProductDropdown;
