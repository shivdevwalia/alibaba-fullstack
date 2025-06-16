import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import { Box, Flex, Text } from "@chakra-ui/react";
import IconHomePage from "../components/IconHomePage";
import DynamicScroll from "../components/DynamicScroll";
import Reviews from "../components/Reviews";
import ContactForm from "../components/ContactForm";
import FooterJson from "../components/FooterJson";
import SigninFooter from "../components/SigninFooter";

function Homepage() {
  return (
    <>
      <Box
        bgImage="https://s.alicdn.com/@img/imgextra/i4/O1CN01ustqhi1Tz44lu4arh_!!6000000002452-0-tps-3840-1248.jpg_q60.jpg"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        minHeight="100vh"
        position="relative"
        overflowX={"hidden"}
      >
        <Navbar />
        <SearchBar />
      </Box>

      <Box bg="#3a190b" py="50px" px={{ base: 4, md: 12 }}>
        <Grid />
      </Box>
      <Box bg={"white"} px={{ base: 4, md: 12 }}>
        <IconHomePage></IconHomePage>
      </Box>
      <Box bg={"white"} px={{ base: 4, md: 12 }}>
        <DynamicScroll></DynamicScroll>
      </Box>
      <Box bg={"#f7f2f0"} px={{ base: 4, md: 12 }} minHeight={"800px"}>
        <Flex flexDirection={"column"} align={"center"} textAlign={"center"}>
          <Box mt={"120px"}>
            <Text
              color={"#51200b"}
              fontSize={{ base: "30px", md: "44px" }}
              lineHeight={{ base: "40px", md: "52px" }}
              fontWeight={600}
            >
              Get tailored discounts, services, and tools for your business
              stage.
            </Text>
          </Box>
          <Box mt={"30px"}>
            <Text color={"#666"} fontSize={"20px"} lineHeight={"26px"}>
              Grow with curated benefits offered by the free Alibaba.com
              Membership, whether you are a small business needing the
              essentials to start sourcing or a well-established enterprise
              looking for tools and solutions for more complex orders.
            </Text>
          </Box>
          <Box mt={"20px"} color={"#222"} fontWeight={600}>
            <Text textDecoration={"underline"}>Learn more</Text>
          </Box>
        </Flex>
        <Reviews></Reviews>
      </Box>
      <Box>
        <ContactForm></ContactForm>
      </Box>
      <Box
        w="100%"
        bg="white"
        minH="100vh"
        overflowX={"hidden"}
        borderTop={"1px"}
        borderColor={"gray.100"}
        mt={{ base: 0, md: 4 }}
      >
        <FooterJson></FooterJson>
        <SigninFooter></SigninFooter>
      </Box>
    </>
  );
}

export default Homepage;
