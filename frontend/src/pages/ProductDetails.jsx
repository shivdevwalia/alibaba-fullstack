// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Flex,
//   Text,
//   IconButton,
//   Icon,
//   Button,
//   Select,
//   Alert,
//   AlertIcon,
//   useColorModeValue,
//   Badge,
//   Divider,
//   HStack,
//   VStack,
// } from "@chakra-ui/react";
// import {
//   FaHeart,
//   FaShoppingCart,
//   FaCommentDots,
//   FaStar,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { useNavigate, useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import SearchBarOnly from "../components/SearchBarOnly";
// import { useDispatch, useSelector } from "react-redux";
// import { addCartItem } from "../redux/actions";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const loadingAddCartItem = useSelector((state) => state.loadingAddCartItem);
//   const errorAddCartItem = useSelector((state) => state.errorAddCartItem);
//   const auth = useSelector((state) => state.isAuth);
//   const navigate = useNavigate();

//   const bgColor = useColorModeValue("white", "gray.800");
//   const borderColor = useColorModeValue("gray.200", "gray.600");
//   const textColor = useColorModeValue("gray.900", "white");
//   const mutedColor = useColorModeValue("gray.600", "gray.400");

//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     if (!product) return;
//     if (!auth) {
//       navigate("/signin");
//     }
//     dispatch(addCartItem(product._id, 1));
//   };

//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//        
//         if (!res.ok) throw new Error("Failed to fetch product");
//         const data = await res.json();
//         setProduct(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchProduct();
//   }, [id]);

//   const nextImage = () => {
//     if (!product || !product.images) return;
//     setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
//   };

//   const prevImage = () => {
//     if (!product || !product.images) return;
//     setCurrentImageIndex(
//       (prev) => (prev - 1 + product.images.length) % product.images.length
//     );
//   };

//   if (loading) return <Text>Loading...</Text>;
//   if (!product) return <Text>Product not found</Text>;

//   const rating = 4.2;
//   const reviews = 45;
//   const sold = 120;
//   const colors = ["Black", "White", "Blue"];
//   const supplier = "Tech Supplier Inc.";
//   const supplierYears = 7;
//   const supplierCountry = "CN";

//   return (
//     <Box bg="#f5f5f5" minH="100vh" overflowX="hidden">
//       <Navbar SearchBar={<SearchBarOnly />} />

//       {/* Breadcrumb */}
//       <Box bg="white" px={[3, 4, 6]} py={3} borderBottom="1px solid #e8e8e8">
//         <Text fontSize="sm" color="gray.600">
//           Alibaba &gt; Products
//         </Text>
//       </Box>

//       <Flex
//         maxW="1200px"
//         mx="auto"
//         bg="white"
//         gap={0}
//         direction={["column", "column", "row"]}
//         overflowX="hidden"
//       >
//         {/* Left Side - Images */}
//         <Box w={["100%", "100%", "550px"]} p={6} overflow="hidden">
//           {/* Main Image */}
//           <Box position="relative" mb={4}>
//             {product.images && product.images.length > 0 && (
//               <>
//                 <Box
//                   as="img"
//                   src={product.images[currentImageIndex]}
//                   alt={product.name}
//                   w="100%"
//                   h="400px"
//                   objectFit="contain"
//                   borderRadius="md"
//                   border="1px solid #e8e8e8"
//                   bg="white"
//                 />
//                 <IconButton
//                   icon={<FaChevronLeft />}
//                   position="absolute"
//                   top="50%"
//                   left={2}
//                   transform="translateY(-50%)"
//                   onClick={prevImage}
//                   aria-label="Previous image"
//                   size="sm"
//                   bg="white"
//                   border="1px solid #ddd"
//                   _hover={{ bg: "gray.50" }}
//                 />
//                 <IconButton
//                   icon={<FaChevronRight />}
//                   position="absolute"
//                   top="50%"
//                   right={2}
//                   transform="translateY(-50%)"
//                   onClick={nextImage}
//                   aria-label="Next image"
//                   size="sm"
//                   bg="white"
//                   border="1px solid #ddd"
//                   _hover={{ bg: "gray.50" }}
//                 />

//                 {/* Heart icon overlay */}
//                 <IconButton
//                   icon={<FaHeart />}
//                   position="absolute"
//                   top={4}
//                   right={4}
//                   size="sm"
//                   bg="white"
//                   border="1px solid #ddd"
//                   _hover={{ bg: "gray.50" }}
//                   aria-label="Add to wishlist"
//                 />
//               </>
//             )}
//           </Box>

//           {/* Thumbnail Images */}
//           <HStack
//             spacing={2}
//             overflowX="auto"
//             pb={2} /* padding to prevent scrollbar overlap */
//           >
//             {product.images &&
//               product.images.slice(0, 5).map((img, index) => (
//                 <Box
//                   key={index}
//                   as="img"
//                   src={img}
//                   w="60px"
//                   h="60px"
//                   objectFit="cover"
//                   border={
//                     currentImageIndex === index
//                       ? "2px solid #FF6A00"
//                       : "1px solid #e8e8e8"
//                   }
//                   borderRadius="md"
//                   cursor="pointer"
//                   onClick={() => setCurrentImageIndex(index)}
//                   _hover={{ borderColor: "#FF6A00" }}
//                   flexShrink={0} // Prevent thumbnails from shrinking
//                 />
//               ))}
//           </HStack>
//         </Box>

//         {/* Right Side - Product Info */}
//         <Box
//           flex="1"
//           p={[4, 5, 6]}
//           borderLeft={["none", "none", "1px solid #e8e8e8"]}
//         >
//           {/* Title */}
//           <Text
//             fontSize="xl"
//             fontWeight="600"
//             mb={3}
//             lineHeight="1.4"
//             wordBreak="break-word"
//           >
//             {product.name}
//           </Text>

//           {/* Rating and Reviews */}
//           <HStack spacing={4} mb={4} flexWrap="wrap">
//             <HStack spacing={1}>
//               {Array(5)
//                 .fill(0)
//                 .map((_, i) => (
//                   <Icon
//                     key={i}
//                     as={FaStar}
//                     color={i < Math.floor(rating) ? "#FF6A00" : "#e8e8e8"}
//                   />
//                 ))}
//               <Text fontSize="sm" color="gray.600">
//                 {rating} ({reviews} review{reviews !== 1 ? "s" : ""})
//               </Text>
//             </HStack>
//             <Text fontSize="sm" color="gray.600">
//               • {sold} sold
//             </Text>
//             <Badge colorScheme="green" fontSize="xs">
//               Ready to Ship
//             </Badge>
//           </HStack>

//           {/* Supplier Info */}
//           <HStack spacing={2} mb={6}>
//             <Box w={6} h={6} bg="gray.200" borderRadius="sm" />
//             <VStack align="start" spacing={0}>
//               <Text fontSize="sm" fontWeight="500" color="#1890ff">
//                 {supplier}
//               </Text>
//               <Text fontSize="xs" color="gray.500">
//                 {supplierYears} yrs • 🇨🇳 {supplierCountry}
//               </Text>
//             </VStack>
//           </HStack>

//           <Divider mb={6} />

//           {/* Wholesale Section */}
//           <Flex
//             justify="space-between"
//             mb={6}
//             flexDirection={["column", "row"]}
//           >
//             <Text fontSize="lg" fontWeight="600" mb={[2, 0]}>
//               Wholesale
//             </Text>
//             <Text fontSize="lg" fontWeight="600">
//               Customization
//             </Text>
//           </Flex>

//           {/* FREE shipping banner */}
//           <Box
//             bg="#fff7e6"
//             border="1px solid #ffd591"
//             borderRadius="md"
//             p={3}
//             mb={6}
//           >
//             <HStack>
//               <Text fontSize="sm">📦</Text>
//               <Text fontSize="sm">
//                 <Text as="span" fontWeight="600" color="#fa8c16">
//                   FREE shipping
//                 </Text>
//                 <Text as="span" color="gray.600">
//                   {" "}
//                   capped at $25 on your first order
//                 </Text>
//               </Text>
//             </HStack>
//           </Box>

//           <Badge colorScheme="green" mb={4}>
//             Ready to ship
//           </Badge>

//           {/* Pricing tiers */}
//           <Box mb={6}>
//             <HStack spacing={[2, 4, 8]} flexWrap="wrap">
//               <VStack align="start" spacing={1}>
//                 <Text fontSize="xs" color="gray.500">
//                   1 - 49 pieces
//                 </Text>
//                 <Text fontSize="2xl" fontWeight="600" color="#FF6A00">
//                   ${product.price}
//                 </Text>
//                 <Text
//                   fontSize="xs"
//                   color="gray.400"
//                   textDecoration="line-through"
//                 >
//                   $4.25
//                 </Text>
//               </VStack>
//               <VStack align="start" spacing={1}>
//                 <Text fontSize="xs" color="gray.500">
//                   50 - 299 pieces
//                 </Text>
//                 <Text fontSize="2xl" fontWeight="600" color="gray.700">
//                   ${(product.price * 0.97).toFixed(2)}
//                 </Text>
//                 <Text
//                   fontSize="xs"
//                   color="gray.400"
//                   textDecoration="line-through"
//                 >
//                   $4.13
//                 </Text>
//               </VStack>
//               <VStack align="start" spacing={1}>
//                 <Text fontSize="xs" color="gray.500">
//                   300 - 999 pieces
//                 </Text>
//                 <Text fontSize="2xl" fontWeight="600" color="gray.700">
//                   ${(product.price * 0.94).toFixed(2)}
//                 </Text>
//                 <Text
//                   fontSize="xs"
//                   color="gray.400"
//                   textDecoration="line-through"
//                 >
//                   $4.01
//                 </Text>
//               </VStack>
//             </HStack>

//             <Box mt={4}>
//               <Text fontSize="xs" color="gray.500">
//                 ≥ 1000 pieces
//               </Text>
//               <Text fontSize="2xl" fontWeight="600" color="gray.700">
//                 ${(product.price * 0.92).toFixed(2)}
//               </Text>
//               <Text
//                 fontSize="xs"
//                 color="gray.400"
//                 textDecoration="line-through"
//               >
//                 $3.94
//               </Text>
//             </Box>
//           </Box>

//           {/* Color Selector */}
//           <Box mb={6}>
//             <Text fontSize="sm" mb={2} fontWeight="500">
//               Colors:
//             </Text>
//             <Select maxW="200px" defaultValue={colors[0]} size="sm">
//               {colors.map((c) => (
//                 <option key={c} value={c}>
//                   {c}
//                 </option>
//               ))}
//             </Select>
//           </Box>

//           {/* Action Buttons */}
//           <HStack spacing={[1, 2, 3]} mb={4} flexWrap="wrap">
//             <Button
//               bg="#FF6A00"
//               color="white"
//               _hover={{ bg: "#e55a00" }}
//               borderRadius="20px"
//               px={8}
//               size="lg"
//             >
//               Start order
//             </Button>
//             <Button
//               variant="outline"
//               borderColor="#FF6A00"
//               color="#FF6A00"
//               _hover={{ bg: "#fff7e6" }}
//               borderRadius="20px"
//               px={8}
//               size="lg"
//               leftIcon={<FaShoppingCart />}
//               onClick={handleAddToCart}
//               isLoading={loadingAddCartItem}
//               loadingText="Adding..."
//             >
//               Add to cart
//             </Button>
//             <Button
//               variant="outline"
//               borderColor="#ddd"
//               color="gray.700"
//               _hover={{ bg: "gray.50" }}
//               borderRadius="20px"
//               px={8}
//               size="lg"
//               leftIcon={<FaCommentDots />}
//             >
//               Chat now
//             </Button>
//           </HStack>

//           {/* Add to Cart error */}
//           {errorAddCartItem && (
//             <Alert status="error" mt={4} maxW="400px">
//               <AlertIcon />
//               {errorAddCartItem}
//             </Alert>
//           )}

//           {/* Additional Product Info */}
//           <Box mt={8} fontSize="sm" color="gray.600">
//             <Text mb={1}>Category: {product.category}</Text>
//             <Text>{product.description}</Text>
//           </Box>
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default ProductDetails;

import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Icon,
  Button,
  Select,
  Alert,
  AlertIcon,
  useColorModeValue,
  Badge,
  Divider,
  HStack,
  VStack,
  Collapse,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaHeart,
  FaShoppingCart,
  FaCommentDots,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchBarOnly from "../components/SearchBarOnly";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../redux/actions";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const loadingAddCartItem = useSelector((state) => state.loadingAddCartItem);
  const errorAddCartItem = useSelector((state) => state.errorAddCartItem);
  const auth = useSelector((state) => state.isAuth);
  const navigate = useNavigate();

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.900", "white");
  const mutedColor = useColorModeValue("gray.600", "gray.400");

  // Responsive breakpoints
  const isMobile = useBreakpointValue({ base: true, md: false });
  const showDesktopSearch = useBreakpointValue({ base: false, md: true });

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!product) return;
    if (!auth) {
      navigate("/signin");
    }
    dispatch(addCartItem(product._id, 1));
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  const nextImage = () => {
    if (!product || !product.images) return;
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    if (!product || !product.images) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  if (loading) return <Text>Loading...</Text>;
  if (!product) return <Text>Product not found</Text>;

  const rating = 4.2;
  const reviews = 45;
  const sold = 120;
  const colors = ["Black", "White", "Blue"];
  const supplier = "Tech Supplier Inc.";
  const supplierYears = 7;
  const supplierCountry = "CN";

  return (
    <Box bg="#f5f5f5" minH="100vh" overflowX="hidden">
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
              Product Details
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

      {/* Breadcrumb */}
      <Box bg="white" px={[3, 4, 6]} py={3} borderBottom="1px solid #e8e8e8">
        <Text fontSize="sm" color="gray.600">
          Alibaba &gt; Products
        </Text>
      </Box>

      <Flex
        maxW="1200px"
        mx="auto"
        bg="white"
        gap={0}
        direction={["column", "column", "row"]}
        overflowX="hidden"
      >
        {/* Left Side - Images */}
        <Box w={["100%", "100%", "550px"]} p={6} overflow="hidden">
          {/* Main Image */}
          <Box position="relative" mb={4}>
            {product.images && product.images.length > 0 && (
              <>
                <Box
                  as="img"
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  w="100%"
                  h="400px"
                  objectFit="contain"
                  borderRadius="md"
                  border="1px solid #e8e8e8"
                  bg="white"
                />
                <IconButton
                  icon={<FaChevronLeft />}
                  position="absolute"
                  top="50%"
                  left={2}
                  transform="translateY(-50%)"
                  onClick={prevImage}
                  aria-label="Previous image"
                  size="sm"
                  bg="white"
                  border="1px solid #ddd"
                  _hover={{ bg: "gray.50" }}
                />
                <IconButton
                  icon={<FaChevronRight />}
                  position="absolute"
                  top="50%"
                  right={2}
                  transform="translateY(-50%)"
                  onClick={nextImage}
                  aria-label="Next image"
                  size="sm"
                  bg="white"
                  border="1px solid #ddd"
                  _hover={{ bg: "gray.50" }}
                />

                {/* Heart icon overlay */}
                <IconButton
                  icon={<FaHeart />}
                  position="absolute"
                  top={4}
                  right={4}
                  size="sm"
                  bg="white"
                  border="1px solid #ddd"
                  _hover={{ bg: "gray.50" }}
                  aria-label="Add to wishlist"
                />
              </>
            )}
          </Box>

          {/* Thumbnail Images */}
          <HStack
            spacing={2}
            overflowX="auto"
            pb={2} /* padding to prevent scrollbar overlap */
          >
            {product.images &&
              product.images.slice(0, 5).map((img, index) => (
                <Box
                  key={index}
                  as="img"
                  src={img}
                  w="60px"
                  h="60px"
                  objectFit="cover"
                  border={
                    currentImageIndex === index
                      ? "2px solid #FF6A00"
                      : "1px solid #e8e8e8"
                  }
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => setCurrentImageIndex(index)}
                  _hover={{ borderColor: "#FF6A00" }}
                  flexShrink={0} // Prevent thumbnails from shrinking
                />
              ))}
          </HStack>
        </Box>

        {/* Right Side - Product Info */}
        <Box
          flex="1"
          p={[4, 5, 6]}
          borderLeft={["none", "none", "1px solid #e8e8e8"]}
        >
          {/* Title */}
          <Text
            fontSize="xl"
            fontWeight="600"
            mb={3}
            lineHeight="1.4"
            wordBreak="break-word"
          >
            {product.name}
          </Text>

          {/* Rating and Reviews */}
          <HStack spacing={4} mb={4} flexWrap="wrap">
            <HStack spacing={1}>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Icon
                    key={i}
                    as={FaStar}
                    color={i < Math.floor(rating) ? "#FF6A00" : "#e8e8e8"}
                  />
                ))}
              <Text fontSize="sm" color="gray.600">
                {rating} ({reviews} review{reviews !== 1 ? "s" : ""})
              </Text>
            </HStack>
            <Text fontSize="sm" color="gray.600">
              • {sold} sold
            </Text>
            <Badge colorScheme="green" fontSize="xs">
              Ready to Ship
            </Badge>
          </HStack>

          {/* Supplier Info */}
          <HStack spacing={2} mb={6}>
            <Box w={6} h={6} bg="gray.200" borderRadius="sm" />
            <VStack align="start" spacing={0}>
              <Text fontSize="sm" fontWeight="500" color="#1890ff">
                {supplier}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {supplierYears} yrs • 🇨🇳 {supplierCountry}
              </Text>
            </VStack>
          </HStack>

          <Divider mb={6} />

          {/* Wholesale Section */}
          <Flex
            justify="space-between"
            mb={6}
            flexDirection={["column", "row"]}
          >
            <Text fontSize="lg" fontWeight="600" mb={[2, 0]}>
              Wholesale
            </Text>
            <Text fontSize="lg" fontWeight="600">
              Customization
            </Text>
          </Flex>

          {/* FREE shipping banner */}
          <Box
            bg="#fff7e6"
            border="1px solid #ffd591"
            borderRadius="md"
            p={3}
            mb={6}
          >
            <HStack>
              <Text fontSize="sm">📦</Text>
              <Text fontSize="sm">
                <Text as="span" fontWeight="600" color="#fa8c16">
                  FREE shipping
                </Text>
                <Text as="span" color="gray.600">
                  {" "}
                  capped at $25 on your first order
                </Text>
              </Text>
            </HStack>
          </Box>

          <Badge colorScheme="green" mb={4}>
            Ready to ship
          </Badge>

          {/* Pricing tiers */}
          <Box mb={6}>
            <HStack spacing={[2, 4, 8]} flexWrap="wrap">
              <VStack align="start" spacing={1}>
                <Text fontSize="xs" color="gray.500">
                  1 - 49 pieces
                </Text>
                <Text fontSize="2xl" fontWeight="600" color="#FF6A00">
                  ${product.price}
                </Text>
                <Text
                  fontSize="xs"
                  color="gray.400"
                  textDecoration="line-through"
                >
                  $4.25
                </Text>
              </VStack>
              <VStack align="start" spacing={1}>
                <Text fontSize="xs" color="gray.500">
                  50 - 299 pieces
                </Text>
                <Text fontSize="2xl" fontWeight="600" color="gray.700">
                  ${(product.price * 0.97).toFixed(2)}
                </Text>
                <Text
                  fontSize="xs"
                  color="gray.400"
                  textDecoration="line-through"
                >
                  $4.13
                </Text>
              </VStack>
              <VStack align="start" spacing={1}>
                <Text fontSize="xs" color="gray.500">
                  300 - 999 pieces
                </Text>
                <Text fontSize="2xl" fontWeight="600" color="gray.700">
                  ${(product.price * 0.94).toFixed(2)}
                </Text>
                <Text
                  fontSize="xs"
                  color="gray.400"
                  textDecoration="line-through"
                >
                  $4.01
                </Text>
              </VStack>
            </HStack>

            <Box mt={4}>
              <Text fontSize="xs" color="gray.500">
                ≥ 1000 pieces
              </Text>
              <Text fontSize="2xl" fontWeight="600" color="gray.700">
                ${(product.price * 0.92).toFixed(2)}
              </Text>
              <Text
                fontSize="xs"
                color="gray.400"
                textDecoration="line-through"
              >
                $3.94
              </Text>
            </Box>
          </Box>

          {/* Color Selector */}
          <Box mb={6}>
            <Text fontSize="sm" mb={2} fontWeight="500">
              Colors:
            </Text>
            <Select maxW="200px" defaultValue={colors[0]} size="sm">
              {colors.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
          </Box>

          {/* Action Buttons */}
          <HStack spacing={[1, 2, 3]} mb={4} flexWrap="wrap">
            <Button
              bg="#FF6A00"
              color="white"
              _hover={{ bg: "#e55a00" }}
              borderRadius="20px"
              px={8}
              size="lg"
            >
              Start order
            </Button>
            <Button
              variant="outline"
              borderColor="#FF6A00"
              color="#FF6A00"
              _hover={{ bg: "#fff7e6" }}
              borderRadius="20px"
              px={8}
              size="lg"
              leftIcon={<FaShoppingCart />}
              onClick={handleAddToCart}
              isLoading={loadingAddCartItem}
              loadingText="Adding..."
            >
              Add to cart
            </Button>
            <Button
              variant="outline"
              borderColor="#ddd"
              color="gray.700"
              _hover={{ bg: "gray.50" }}
              borderRadius="20px"
              px={8}
              size="lg"
              leftIcon={<FaCommentDots />}
            >
              Chat now
            </Button>
          </HStack>

          {/* Add to Cart error */}
          {errorAddCartItem && (
            <Alert status="error" mt={4} maxW="400px">
              <AlertIcon />
              {errorAddCartItem}
            </Alert>
          )}

          {/* Additional Product Info */}
          <Box mt={8} fontSize="sm" color="gray.600">
            <Text mb={1}>Category: {product.category}</Text>
            <Text>{product.description}</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductDetails;