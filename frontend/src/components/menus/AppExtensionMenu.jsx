import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  Box,
  Flex,
  Text,
  VStack,
  Button,
  Divider,
  Img,
} from "@chakra-ui/react";
import { FaApple, FaGooglePlay, FaQrcode } from "react-icons/fa";
import { SiGooglechrome } from "react-icons/si";

export const AppExtensionMenu = ({ isOpen, onOpen, onClose }) => {
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
        App & extension
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
      >
        <Flex gap={16} justify="center" align="start">
          {/* Updated App Section with row layout */}
          <Flex gap={8} align="flex-start" maxW="700px" flex="1">
            {/* Text Section */}
            <VStack align="start" spacing={4} flex="1">
              <Text fontSize="xl" fontWeight="bold" color="black">
                Get the Alibaba.com app
              </Text>

              <Text fontSize="md" color="gray.600" lineHeight="1.5">
                Find products, communicate with suppliers, and manage and pay
                for your orders with the Alibaba.com app anytime, anywhere.
              </Text>
            </VStack>

            {/* Buttons stacked vertically */}
            <VStack spacing={4} align="start" mt={10}>
              {/* Google Play Button */}
              <Flex
                bg="black"
                color="white"
                borderRadius="md"
                align="center"
                justify="center"
                height="32px"
                px={4}
                fontSize="14px"
                fontWeight="medium"
                cursor="pointer"
              >
                Google Play
              </Flex>

              {/* App Store Button */}
              <Flex
                bg="black"
                color="white"
                borderRadius="md"
                align="center"
                justify="center"
                height="32px"
                px={3}
                fontSize="14px"
                fontWeight="medium"
                cursor="pointer"
              >
                App Store
              </Flex>
            </VStack>

            {/* QR Code aligned with top of Google Play button */}
            <Box
              mt={10}
              w="80px"
              h="80px"
              display="flex"
              alignItems="flex-start"
              justifyContent="center"
              flexShrink={0}
            >
              <Img src="https://s.alicdn.com/@img/tfs/TB1vMlnX21TBuNjy0FjXXajyXXa-280-280.png"></Img>
            </Box>
          </Flex>

          <Divider
            orientation="vertical"
            height="50px"
            borderColor="gray.300"
          />

          {/* Extension Section */}
          <VStack align="start" spacing={6} maxW="400px">
            <Text fontSize="xl" fontWeight="bold" color="black">
              Discover Alibaba Lens
            </Text>

            <Text fontSize="md" color="gray.600" lineHeight="1.5">
              Use this image search extension to find and compare similar
              products with wholesale prices and customization options anywhere
              online.
            </Text>

            <VStack align="start" spacing={3}>
              <Text
                fontSize="md"
                color="black"
                textDecoration="underline"
                cursor="pointer"
              >
                Learn more
              </Text>

              <Button
                bg="#ff6600"
                color="white"
                fontWeight="600"
                px={6}
                py={3}
                borderRadius="full"
                fontSize="md"
                _hover={{ bg: "#e55a00" }}
                transition="background-color 0.2s"
                leftIcon={<SiGooglechrome size={18} />}
              >
                Add to Chrome
              </Button>
            </VStack>
          </VStack>
        </Flex>
      </MenuList>
    </Menu>
  );
};
