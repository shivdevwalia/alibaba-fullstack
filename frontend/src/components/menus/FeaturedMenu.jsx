import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
  Text,
  Box,
  Divider,
} from "@chakra-ui/react";
import { FaTrophy, FaCommentAlt, FaTag } from "react-icons/fa";

export const FeaturedMenu = ({ isOpen, onOpen, onClose }) => {
  return (
    <Menu isOpen={isOpen}>
      <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
        Featured selections
      </MenuButton>
      <MenuList
        bg="white"
        width={"100vw"}
        borderRadius={0}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        background={"white !important"}
      >
        <MenuItem>
          <Flex
            flexDirection={"row"}
            gap={10}
            minHeight={"200px"}
            px={15}
            py={5}
            _hover={{ bg: "white" }}
          >
            <Flex
              border="1px"
              borderRadius={"10px"}
              flexDirection={"column"}
              justifyContent={"center"}
              align={"center"}
              minWidth={"250px"}
              maxHeight={"150px"}
              gap={2}
            >
              <FaTrophy />
              <Box>
                <Text>Top ranking</Text>
              </Box>
            </Flex>
            <Flex
              border="1px"
              borderRadius={"10px"}
              flexDirection={"column"}
              justifyContent={"center"}
              align={"center"}
              minWidth={"250px"}
              maxHeight={"150px"}
              gap={2}
            >
              <FaCommentAlt />
              <Box>
                <Text>New arrivals</Text>
              </Box>
            </Flex>
            <Flex
              border="1px"
              borderRadius={"10px"}
              flexDirection={"column"}
              justifyContent={"center"}
              align={"center"}
              minWidth={"250px"}
              maxHeight={"150px"}
              gap={2}
            >
              <FaTag />
              <Box>
                <Text>Top deals</Text>
              </Box>
            </Flex>
            <Divider
              mx={2}
              orientation="vertical"
              color={"gray.900"}
              minHeight={"190px"}
              py={0}
            />
            <Flex
              flexDirection={"column"}
              gap={4}
              align={"left"}
              justify={"center"}
              minWidth={"200px"}
              fontSize={15}
            >
              <Box>
                <Text>Sample center</Text>
              </Box>
              <Box>
                <Text>Online trade show</Text>
              </Box>
              <Box>
                <Text>Tips</Text>
              </Box>
              <Box>
                <Text>LIVE</Text>
              </Box>
              <Box>
                <Text>Global suppliers</Text>
              </Box>
            </Flex>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
