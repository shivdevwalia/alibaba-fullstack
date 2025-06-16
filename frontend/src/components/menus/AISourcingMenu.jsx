import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  Box,
  Flex,
  Text,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { BsBox, BsClock, BsCheckCircle } from "react-icons/bs";

export const AISourcingMenu = ({ isOpen, onOpen, onClose }) => {
  const features = [
    {
      icon: BsBox,
      text: "Matches from over",
      bold: "100 million products",
      subtext: "with precision",
    },
    {
      icon: BsClock,
      text: "Handles queries",
      bold: "3 times as complex",
      subtext: "in half the time",
    },
    {
      icon: BsCheckCircle,
      text: "",
      bold: "Verifies and cross-validates",
      subtext: "product information",
    },
  ];

  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        as="button"
        bg="transparent"
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
        _focus={{ boxShadow: "none" }}
        fontSize="md"
        fontWeight="normal"
        color="black"
      >
        AI Sourcing Agent
      </MenuButton>

      <MenuList
        bg="white"
        py={10}
        px={100}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        boxShadow="0 4px 12px rgba(0,0,0,0.1)"
        width="100vw"
        borderRadius="none"
        border="1px solid #e5e5e5"
        left="50%"
      >
        {/* Header */}
        <VStack align="start" spacing={3} mb={8} >
          <Text fontSize="3xl" fontWeight="bold" color="black">
            Source smarter with{" "}
            <Text as="span" color="black">
              Accio
            </Text>
          </Text>
          <Text fontSize="lg" color="gray.600">
            Leverage AI to find the perfect product match in seconds
          </Text>
        </VStack>

        {/* Feature cards */}
        <Flex gap={2} mb={8}>
          {features.map((item, idx) => (
            <Box
              key={idx}
              bg="#f0f9f4"
              p={6}
              borderRadius="lg"
              flex="1"
              minH="140px"
              maxWidth={"250px"}
            >
              <Icon as={item.icon} boxSize={8} mb={4} color="gray.700" />
              <Text
                fontSize="md"
                color="black"
                lineHeight="1.4"
                maxWidth={"150px"}
              >
                {item.text && `${item.text} `}
                <Text as="span" fontWeight="bold">
                  {item.bold}
                </Text>
                {item.subtext && (
                  <>
                    <br />
                    {item.subtext}
                  </>
                )}
              </Text>
            </Box>
          ))}
        </Flex>

        {/* Partner and button */}
        <Flex align="left" flexDirection={"column"} gap={3}>
          <Text fontSize="md" color="gray.500">
            Partnered with{" "}
            <Text as="span" color="#ff6600" fontWeight="bold">
              Alibaba.com
            </Text>
          </Text>
          <Box
            as="button"
            bg="#22c55e"
            color="white"
            fontWeight="600"
            borderRadius="full"
            fontSize="15px"
            _hover={{ bg: "#16a34a" }}
            transition="background-color 0.2s"
            maxW={"160px"}
            height={"40px"}
            alignContent={"center"}
          >
            Source now
          </Box>
        </Flex>
      </MenuList>
    </Menu>
  );
};
