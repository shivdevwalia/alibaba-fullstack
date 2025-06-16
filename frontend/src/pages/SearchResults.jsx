// import React, { useEffect } from "react";
// import {
//   Box,
//   Center,
//   Flex,
//   Spinner,
//   Text,
//   SimpleGrid,
//   Alert,
//   AlertIcon,
//   Select,
// } from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux";
// import { useSearchParams, Link } from "react-router-dom";
// import { getProductsUser } from "../redux/actions";
// import ProductCard from "../components/ProductCard";
// import Navbar from "../components/Navbar";
// import SearchBarOnly from "../components/SearchBarOnly";

// function SearchResults() {
//   const dispatch = useDispatch();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get("q") || "";
//   const category = searchParams.get("category") || "";
//   const sort = searchParams.get("sort") || "";

//   const products = useSelector((state) => state.products);
//   const loading = useSelector((state) => state.loadingProducts);
//   const error = useSelector((state) => state.errorProducts);

//   useEffect(() => {
//     dispatch(getProductsUser({ q: query, category, sort }));

//     console.log("Search params:", { query, category });
//   }, [dispatch, query, category, sort]);

//   const handleSortChange = (e) => {
//     const selectedSort = e.target.value;
//     if (selectedSort) {
//       searchParams.set("sort", selectedSort);
//     } else {
//       searchParams.delete("sort");
//     }
//     setSearchParams(searchParams);
//   };

//   const getSearchTitle = () => {
//     if (query && category) {
//       return `Search Results for: "${query}" in category "${category}"`;
//     } else if (query) {
//       return `Search Results for: "${query}"`;
//     } else if (category) {
//       return `Products in category: "${category}"`;
//     } else {
//       return "All Products";
//     }
//   };

//   return (
//     <>
//       <Navbar SearchBar={<SearchBarOnly />} />
//       <Box p={4}>
//         {loading ? (
//           <Center>
//             <Spinner size="xl" />
//           </Center>
//         ) : error ? (
//           <Alert status="error">
//             <AlertIcon />
//             {error}
//           </Alert>
//         ) : (
//           <>
//             <Flex
//               justify="space-between"
//               align="center"
//               mb={4}
//               wrap="wrap"
//               gap={2}
//             >
//               <Text fontSize="xl" fontWeight="bold" mb={4}>
//                 {getSearchTitle()}
//               </Text>

//               <Select
//                 width="200px"
//                 value={sort}
//                 onChange={handleSortChange}
//                 placeholder="Sort by price"
//               >
//                 <option value="asc">Price: Low to High</option>
//                 <option value="desc">Price: High to Low</option>
//               </Select>
//             </Flex>
//             <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
//               {products.length > 0 ? (
//                 products.map((product) => (
//                   <Link
//                     key={product._id}
//                     to={`/products/${product._id}`}
//                     style={{ textDecoration: "none", color: "inherit" }}
//                   >
//                     <ProductCard product={product} />
//                   </Link>
//                 ))
//               ) : (
//                 <Text>No products found.</Text>
//               )}
//             </SimpleGrid>
//           </>
//         )}
//       </Box>
//     </>
//   );
// }

// export default SearchResults;

import React, { useEffect, useState } from "react";
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
  Collapse,
  IconButton,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import { getProductsUser } from "../redux/actions";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import SearchBarOnly from "../components/SearchBarOnly";

function SearchResults() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  const sort = searchParams.get("sort") || "";

  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loadingProducts);
  const error = useSelector((state) => state.errorProducts);

  const [showMobileSearch, setShowMobileSearch] = useState(false);

  // Responsive breakpoints
  const isMobile = useBreakpointValue({ base: true, md: false });
  const showDesktopSearch = useBreakpointValue({ base: false, md: true });

  useEffect(() => {
    dispatch(getProductsUser({ q: query, category, sort }));
    console.log("Search params:", { query, category });
  }, [dispatch, query, category, sort]);

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
    if (query && category) {
      return `Search Results for: "${query}" in category "${category}"`;
    } else if (query) {
      return `Search Results for: "${query}"`;
    } else if (category) {
      return `Products in category: "${category}"`;
    } else {
      return "All Products";
    }
  };

  return (
    <>
      <Navbar
        SearchBar={showDesktopSearch ? <SearchBarOnly /> : null}
        showMobileSearch={showMobileSearch}
        setShowMobileSearch={setShowMobileSearch}
      />

      {/* Mobile Search Bar */}
      {isMobile && (
        <Box bg="white" px={4} pb={showMobileSearch ? 3 : 0}>
          <Flex justify="space-between" align="center" py={2}>
            <Text fontSize="lg" fontWeight="bold" flex={1}>
              Search Results
            </Text>
            <IconButton
              icon={<SearchIcon />}
              variant="ghost"
              aria-label="search"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
            />
          </Flex>

          <Collapse in={showMobileSearch} animateOpacity>
            <Box>
              <SearchBarOnly />
            </Box>
          </Collapse>
        </Box>
      )}

      <Box p={{ base: 3, md: 4, lg: 6 }}>
        {loading ? (
          <Center minH="50vh">
            <Spinner size="xl" color="orange.500" />
          </Center>
        ) : error ? (
          <Alert status="error" borderRadius="md">
            <AlertIcon />
            {error}
          </Alert>
        ) : (
          <>
            <Stack
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align={{ base: "stretch", md: "center" }}
              mb={6}
              spacing={4}
            >
              <Box>
                <Text
                  fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                  fontWeight="bold"
                  noOfLines={2}
                >
                  {getSearchTitle()}
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="gray.600"
                  mt={1}
                >
                  {products.length}{" "}
                  {products.length === 1 ? "product" : "products"} found
                </Text>
              </Box>

              <Box minW={{ base: "100%", md: "200px" }}>
                <Select
                  value={sort}
                  onChange={handleSortChange}
                  placeholder="Sort by price"
                  bg="white"
                  borderColor="gray.300"
                  _hover={{ borderColor: "gray.400" }}
                  _focus={{
                    borderColor: "orange.500",
                    boxShadow: "0 0 0 1px #ff6a00",
                  }}
                  size={{ base: "md", md: "md" }}
                >
                  <option value="asc">Price: Low to High</option>
                  <option value="desc">Price: High to Low</option>
                </Select>
              </Box>
            </Stack>

            {products.length > 0 ? (
              <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
                spacing={{ base: 4, md: 6 }}
                w="100%"
              >
                {products.map((product) => (
                  <Link
                    key={product._id}
                    to={`/products/${product._id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ProductCard product={product} />
                  </Link>
                ))}
              </SimpleGrid>
            ) : (
              <Center minH="40vh">
                <Box textAlign="center">
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="bold"
                    mb={2}
                  >
                    No products found
                  </Text>
                  <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
                    Try adjusting your search terms or browse our categories
                  </Text>
                </Box>
              </Center>
            )}
          </>
        )}
      </Box>
    </>
  );
}

export default SearchResults;
