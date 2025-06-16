import React, { useEffect } from "react";
import {
  Box,
  Center,
  Flex,
  Spinner,
  Text,
  SimpleGrid,
  Alert,
  AlertIcon,
  Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import { getProductsUser } from "../redux/actions";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import SearchBarOnly from "../components/SearchBarOnly";

function AllProducts() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  const sort = searchParams.get("sort") || "";

  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loadingProducts);
  const error = useSelector((state) => state.errorProducts);

  useEffect(() => {
    dispatch(getProductsUser({ sort }));

    console.log("Search params:", { query, category });
  }, [dispatch, sort]);

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    if (selectedSort) {
      searchParams.set("sort", selectedSort);
    } else {
      searchParams.delete("sort");
    }
    setSearchParams(searchParams);
  };

  const getSearchTitle = () => {
    return "All Products";
  };

  return (
    <>
      <Navbar SearchBar={<SearchBarOnly />} />
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
          <>
            <Flex
              justify="space-between"
              align="center"
              mb={4}
              wrap="wrap"
              gap={2}
            >
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                {getSearchTitle()}
              </Text>

              <Select
                width="200px"
                value={sort}
                onChange={handleSortChange}
                placeholder="Sort by price"
              >
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </Select>
            </Flex>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
              {products.length > 0 ? (
                products.map((product) => (
                  <Link
                    key={product._id}
                    to={`/products/${product._id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ProductCard product={product} />
                  </Link>
                ))
              ) : (
                <Text>No products found.</Text>
              )}
            </SimpleGrid>
          </>
        )}
      </Box>
    </>
  );
}

export default AllProducts;
