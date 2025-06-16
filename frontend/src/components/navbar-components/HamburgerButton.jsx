import { IconButton } from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";

function HamburgerButton({ onOpen }) {
  return (
    <IconButton
      aria-label="Navigation menu"
      icon={<FaBars></FaBars>}
      color={"white"}
      bg={"transparent"}
      fontSize="20px"
      size="md"
      display={{ base: "flex", lg: "none" }} //
      onClick={onOpen}
      _active={{ bg: "transparent", borderColor: "black" }}
      _focus={{
        boxShadow: "none",
        bg: "transparent",
        borderColor: "black",
      }}
      _hover={{ bg: "transparent", borderColor: "black" }}
    ></IconButton>
  );
}

export default HamburgerButton;
