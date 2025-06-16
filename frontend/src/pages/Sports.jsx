import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  Spinner,
  Center,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import SearchBarOnly from "../components/SearchBarOnly";
import ProductCard from "../components/ProductCard";
import { getProductsUser } from "../redux/actions";
import { Link } from "react-router-dom";

function Sports() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loadingProducts);
  const error = useSelector((state) => state.errorProducts);

  useEffect(() => {
    dispatch(getProductsUser("Sports"));
  }, [dispatch]);

  useEffect(() => {
    console.log("⚽️ Sports Products from Redux:", products);
  }, [products]);

  return (
    <>
      <Navbar SearchBar={<SearchBarOnly />} />
      <Flex direction="column">
        <Flex
          justify="space-between"
          bg="linear-gradient(90deg, #fce8cf, #fed7d2)"
          maxH="90px"
        >
          <Box p={4}>
            <Text fontWeight="bold">
              <Text as="span" color="#F60">
                FREE shipping
              </Text>{" "}
              on your first order
            </Text>
          </Box>
        </Flex>

        <Box p={4}>
          {loading ? (
            <Center>
              <Spinner size="xl" />
            </Center>
          ) : error ? (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          ) : (
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={6} mt={4}>
              {Array.isArray(products) &&
                products.map((product) => (
                  <Link
                    key={product._id}
                    to={`/products/${product._id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ProductCard product={product} />
                  </Link>
                ))}
            </SimpleGrid>
          )}
        </Box>
      </Flex>
    </>
  );
}

export default Sports;
