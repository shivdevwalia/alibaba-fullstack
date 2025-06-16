
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAboutUs } from "../redux/actions";
import {
  Box,
  Center,
  Heading,
  Spinner,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";

function AboutUsPage() {
  const dispatch = useDispatch();

  const aboutUs = useSelector((state) => state.aboutUs);
  const loadingAboutUs = useSelector((state) => state.loadingAboutUs);
  const errorAboutUs = useSelector((state) => state.errorAboutUs);

  useEffect(() => {
    dispatch(getAboutUs());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Box maxW="1200px" mx="auto" mt={10} px={4}>
        {loadingAboutUs ? (
          <Center>
            <Spinner size="lg" />
          </Center>
        ) : errorAboutUs ? (
          <Text color="red.500">Error: {errorAboutUs}</Text>
        ) : aboutUs ? (
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={10}
            alignItems="start"
          >
            {/* Left Side: Title + Description */}
            <GridItem>
              <Heading as="h2" size="xl" mb={4}>
                {aboutUs.title || "About Us"}
              </Heading>
              <Text fontSize="lg" whiteSpace="pre-wrap">
                {aboutUs.description}
              </Text>
            </GridItem>

            {/* Right Side: Mission - Pushed Lower */}
            <GridItem>
              <Box
                mt={{ base: 8, md: 24 }}
                textAlign={{ base: "left", md: "right" }}
              >
                <Heading as="h2" size="xl" mb={4}>
                  Our Mission
                </Heading>
                <Text fontSize="lg" whiteSpace="pre-wrap">
                  {aboutUs.mission}
                </Text>
              </Box>
            </GridItem>
          </Grid>
        ) : (
          <Text>No content found.</Text>
        )}
      </Box>
    </>
  );
}

export default AboutUsPage;
