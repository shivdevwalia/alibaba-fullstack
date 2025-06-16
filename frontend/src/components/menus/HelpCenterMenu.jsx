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
import { FaUser, FaBuilding } from "react-icons/fa";

export const HelpCenterMenu = ({ isOpen, onOpen, onClose }) => {
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        as={"button"}
        variant="ghost"
      >
        Help center
      </MenuButton>
      <MenuList
        width={"100vw"}
        borderRadius={0}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        <MenuItem>
          <Flex
            flexDirection={"row"}
            gap={10}
            minHeight={"200px"}
            px={40}
            py={5}
            left={0}
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
              <FaUser />
              <Box>
                <Text>For buyers</Text>
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
              <FaBuilding />
              <Box>
                <Text>For suppliers</Text>
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
                <Text>Open a dispute</Text>
              </Box>
              <Box>
                <Text>Report IPR infringement</Text>
              </Box>
              <Box>
                <Text>Report abuse</Text>
              </Box>
            </Flex>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
