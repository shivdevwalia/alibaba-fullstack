import React from "react";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FaCrown } from "react-icons/fa";
import CardGrid from "./Order-components/OrderComponents";
import { useNavigate } from "react-router-dom";

export const OrderProtectionMenu = ({ isOpen, onOpen, onClose }) => {
  const navigate = useNavigate();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
        Order protections
      </MenuButton>
      <MenuList
        bg="white"
        borderRadius={0}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        width={"100vw"}
        overflowX={"auto"}
      >
        <MenuItem>
          <Flex
            flexDirection={"row"}
            minHeight={"300px"}
            _hover={{ bg: "white" }}
            bg="white"
          >
            <Flex
              flexDirection={"column"}
              align={"left"}
              justify={"center"}
              py={5}
              px={30}
              ml={60}
              mr={10}
              gap={3}
            >
              <Flex flexDirection={"row"} align={"center"} gap={1} bg="white">
                <FaCrown size={"30px"}></FaCrown>
                <Box>
                  <Text fontSize={"20px"} fontWeight={600}>
                    Trade insurance
                  </Text>
                </Box>
              </Flex>
              <Box maxWidth={"250px"}>
                <Text fontSize={"30px"} fontWeight={"30px"}>
                  Enjoy protection from payment to delivery.
                </Text>
              </Box>
              <Box
                as="div"
                role="button"
                tabIndex={0}
                width={"180px"}
                height={"40px"}
                px={{ base: 3, md: 6 }}
                py={2}
                borderRadius="full"
                bg="#f60"
                color="white"
                fontWeight="bold"
                fontSize={{ base: "sm", md: "md" }}
                display={{ base: "none", sm: "flex" }}
                _hover={{
                  bg: "#cc4400",
                  borderColor: "#f60",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/signup")}
              >
                Create account
              </Box>
            </Flex>

            <CardGrid></CardGrid>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
