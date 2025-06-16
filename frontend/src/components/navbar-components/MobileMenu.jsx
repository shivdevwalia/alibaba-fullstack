import {
  border,
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";
import CreateAccountButton from "./CreateAccountButton";


function MobileMenu({ isOpen, onClose }) {
  const primaryNavItems = [
    { label: "Categories" },
    { label: "Featured selections" },
    { label: "Order protection" },
  ];

  const secondaryNavItems = [
    { label: "AI sourcing agent" },
    { label: "Buyer central" },
    { label: "Help center" },
    { label: "App & extension" },
    { label: "Become a supplier" },
  ];
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay></DrawerOverlay>
      <DrawerContent bg={"white"} color={"black"} maxWidth={"250"}>
        <Box p={3}>
          <DrawerCloseButton
            color={"black"}
            _hover={{
              bg: "white",
              borderColor: "white",
              boxShadow: "none",
            }}
            _active={{
              bg: "white",
              borderColor: "white",
              boxShadow: "none",
            }}
            _focus={{ boxShadow: "none", borderColor: "white" }}
          ></DrawerCloseButton>
        </Box>
        <DrawerHeader
          borderBottomWidth="1px"
          borderColor="gray.600"
        ></DrawerHeader>
        <DrawerBody p={0}>
          <VStack spacing={0} align={"stretch"}>
            {primaryNavItems.map((item, index) => (
              <Box key={index}>
                <Flex
                  px={6}
                  py={4}
                  align="center"
                  gap={3}
                  cursor="pointer"
                  _hover={{ bg: "gray.100" }} // Changed to a lighter color for white background
                  onClick={onClose}
                  _active={{ bg: "transparent" }}
                  _focus={{ boxShadow: "none", bg: "transparent" }}
                >
                  <Text fontSize="md" fontWeight="medium">
                    {item.label}
                  </Text>
                </Flex>
                <Divider borderColor="gray.700" />
              </Box>
            ))}
            <Box py={2}>
              <Divider borderColor="gray.600" />
            </Box>
            {secondaryNavItems.map((item, index) => (
              <Box key={index}>
                <Flex
                  px={6}
                  py={4}
                  align="center"
                  gap={3}
                  cursor="pointer"
                  onClick={onClose}
                  _hover={{ bg: "gray.100" }} // Changed to a lighter color for white background
                  _active={{ bg: "transparent" }}
                  _focus={{ boxShadow: "none", bg: "transparent" }}
                >
                  {" "}
                  <Text fontSize="md">{item.label}</Text>
                </Flex>
                <Divider borderColor="gray.700" />
              </Box>
            ))}
            <Box display={"flex"}></Box>
            <Box display={"flex"} p={4}>
              <CreateAccountButton></CreateAccountButton>
            </Box>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default MobileMenu;
