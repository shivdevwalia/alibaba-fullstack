import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  Box,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

export const BuyerCentralMenu = ({ isOpen, onOpen, onClose }) => {
  const menuSections = [
    {
      title: "Get started",
      items: ["What is Alibaba.com"],
    },
    {
      title: "Why Alibaba.com",
      items: ["How sourcing works", "Membership program"],
    },
    {
      title: "Trade services",
      items: [
        "Order protections",
        "Logistics Services",
        "Letter of Credit",
        "Production monitoring & inspection services",
      ],
    },
    {
      title: "Resources",
      items: ["Success stories", "Blogs", "Industry reports", "Help Center"],
    },
    {
      title: "Webinars",
      items: [
        "Overview",
        "Meet the peers",
        "Ecommerce Academy",
        "How to source on Alibaba.com",
      ],
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
        Buyer Central
      </MenuButton>

      <MenuList
        bg="white"
        p={8}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        boxShadow="0 4px 12px rgba(0,0,0,0.1)"
        width="100vw"
        borderRadius="none"
        border="1px solid #e5e5e5"
        left="50%"
        transform="translateX(-50%)"
      >
        <Flex gap={12} justify="flex-start">
          {menuSections.map((section, idx) => (
            <VStack key={idx} align="start" spacing={4} minW="200px">
              <Text fontSize="15" fontWeight={600} color="black" mb={2}>
                {section.title}
              </Text>
              <VStack align="start" spacing={3}>
                {section.items.map((item, itemIdx) => (
                  <Text
                    key={itemIdx}
                    fontSize="13"
                    color="gray.800"
                    cursor="pointer"
                    
                  >
                    {item}
                  </Text>
                ))}
              </VStack>
            </VStack>
          ))}
        </Flex>
      </MenuList>
    </Menu>
  );
};
