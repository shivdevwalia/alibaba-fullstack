import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  textDecoration,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <Menu>
      <MenuButton
        _hover={{ textDecoration: "underline" }}
        onClick={() => navigate("/aboutus")}
      >
        About Us
      </MenuButton>
    </Menu>
  );
};

export default AboutUs;
