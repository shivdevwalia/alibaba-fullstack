// import React, { useCallback, useEffect, useState } from "react";
// import {
//   Box,
//   Flex,
//   Image,
//   Input,
//   IconButton,
//   Button,
//   Text,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverHeader,
//   PopoverBody,
//   PopoverArrow,
//   Divider,
//   VStack,
//   Img,
//   HStack,
//   useToast,
//   Spinner,
//   List,
//   ListItem,
// } from "@chakra-ui/react";
// import { ChevronDownIcon, SearchIcon, DeleteIcon } from "@chakra-ui/icons";
// import { FaCamera, FaUser } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getCart,
//   updateCartItem,
//   deleteCartItem,
//   signout,
// } from "../redux/actions";
// import debounce from "lodash.debounce";

// function CartPage() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cartItems || []);
//   const loadingCart = useSelector((state) => state.loadingCart);
//   const token = useSelector((state) => state.token);
//   const username = useSelector((state) => state.username);
//   const isLoggedIn = Boolean(token);
//   const toast = useToast();
//   const displayUsername = username
//     ? username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()
//     : "";
//   const firstLetter = displayUsername.charAt(0);

//   const [searchText, setSearchText] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSearch = () => {
//     if (searchText.trim()) {
//       navigate(`/search?q=${encodeURIComponent(searchText.trim())}`);
//     }
//   };

//   const [suggestions, setSuggestions] = useState([]);

//   const fetchSuggestions = useCallback(
//     debounce(async (query) => {
//       if (!query.trim()) {
//         setSuggestions([]);
//         return;
//       }

//       setLoading(true);
//       try {
//         const response = await fetch(
//      
//         );
//         const data = await response.json();
//         const names = [...new Set(data.map((p) => p.name))].slice(0, 10); // get unique names
//         setSuggestions(names.map((name) => ({ name })));
//       } catch (err) {
//         console.error("Error fetching suggestions", err);
//       } finally {
//         setLoading(false);
//       }
//     }, 600),
//     []
//   );

//   useEffect(() => {
//     fetchSuggestions(searchText);
//   }, [searchText, fetchSuggestions]);

//   useEffect(() => {
//     dispatch(getCart());
//   }, [dispatch]);

//   const handleQtyChange = (productId, qty) => {
//     if (qty < 1) return;
//     dispatch(updateCartItem(productId, { qty }));
//   };

//   const handleRemoveItem = (productId) => {
//     dispatch(deleteCartItem(productId));
//   };

//   const handleMenuClick = (path) => {
//     navigate("/signin");
//   };

//   const handleSignOut = () => {
//     dispatch(signout());
//     navigate("/");
//   };
//   return (
//     <>
//       {/* Header */}
//       <Box bg="white" px={6} py={3} boxShadow="sm" w="100%">
//         <Flex
//           align="center"
//           justify="space-between"
//           maxW="container.xl"
//           mx="auto"
//           wrap="wrap"
//         >
//           {/* Logo */}
//           <Flex align="center" gap={2}>
//             <Image
//               src="https://s.alicdn.com/@img/i4/O1CN017MrHk61F6C7ZVpv3s_!!6000000000437-2-tps-496-60.png"
//               h="8"
//               alt="Alibaba Logo"
//             />
//           </Flex>

//           {/* Search Bar */}
//           <Box flex="1" mx={4} maxW="700px" position="relative">
//             <Flex
//               align="center"
//               border="1px solid"
//               borderColor="gray.300"
//               borderRadius="full"
//               px={2}
//               py={1}
//               gap={2}
//               bg="white"
//             >
//               <Flex align="center" px={2}>
//                 <Text fontSize="sm" fontWeight="medium">
//                   Products
//                 </Text>
//                 <ChevronDownIcon ml={1} />
//               </Flex>
//               <Box h="6" borderLeft="1px solid #ccc" />
//               <Input
//                 flex={1}
//                 border="none"
//                 placeholder="What are you looking for?"
//                 _focus={{ boxShadow: "none" }}
//                 color="black"
//                 value={searchText}
//                 onChange={(e) => setSearchText(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//               />
//               <IconButton
//                 icon={<FaCamera />}
//                 variant="ghost"
//                 aria-label="camera"
//                 size="sm"
//               />
//               <Button
//                 bg="#ff6a00"
//                 color="white"
//                 borderRadius="full"
//                 px={6}
//                 _hover={{
//                   bg: "#cc4400",
//                   borderColor: "#f60",
//                 }}
//                 onClick={handleSearch}
//               >
//                 <SearchIcon mr={1} /> Search
//               </Button>
//             </Flex>

//             {loading && <Spinner size="sm" mt={2} color="orange.500" />}
//             {suggestions.length > 0 && (
//               <List
//                 position="absolute"
//                 top="100%"
//                 mt={1}
//                 left={0}
//                 right={0}
//                 zIndex="10"
//                 bg="white"
//                 borderRadius="md"
//                 boxShadow="md"
//                 maxH="180px"
//                 overflowY="auto"
//                 border="1px solid #e2e8f0"
//               >
//                 {suggestions.map((sugg, idx) => (
//                   <ListItem
//                     key={idx}
//                     px={4}
//                     py={2}
//                     cursor="pointer"
//                     color="black"
//                     _hover={{ bg: "gray.100" }}
//                     onClick={() => handleSearch(sugg.name)}
//                   >
//                     {sugg.name}
//                   </ListItem>
//                 ))}
//               </List>
//             )}
//           </Box>

//           {/* Right Side Buttons */}
//           <Flex align="center" gap={4}>
//             <Popover trigger="hover" placement="bottom" closeOnBlur>
//               <PopoverTrigger>
//                 <IconButton
//                   icon={isLoggedIn ? <span>{firstLetter}</span> : <FaUser />}
//                   color="black"
//                   borderColor={isLoggedIn ? "black" : "white"}
//                   bg="transparent"
//                   fontSize="20px"
//                   aria-label="user"
//                   onClick={() => navigate("/signin")}
//                 />
//               </PopoverTrigger>
//               <PopoverContent
//                 width="340px"
//                 borderRadius="xl"
//                 boxShadow="lg"
//                 p={0}
//               >
//                 <PopoverArrow />
//                 <PopoverHeader fontWeight={600} px={4} py={4} pt={1}>
//                   {isLoggedIn ? `Hi ${displayUsername}` : "Welcome to Alibaba"}
//                   {!isLoggedIn && (
//                     <Button
//                       mt={4}
//                       width="100%"
//                       borderRadius="full"
//                       bg="#f60"
//                       color="white"
//                       fontWeight="bold"
//                       _hover={{ bg: "#cc4400" }}
//                       onClick={() => navigate("/signin")}
//                     >
//                       Sign in
//                     </Button>
//                   )}
//                   {isLoggedIn && (
//                     <Button
//                       mt="4"
//                       width="100%"
//                       borderRadius="full"
//                       bg="#f60"
//                       color="white"
//                       fontWeight="bold"
//                       _hover={{ border: "#f60" }}
//                       onClick={handleSignOut}
//                     >
//                       Sign out
//                     </Button>
//                   )}
//                 </PopoverHeader>
//                 <Box px={4} pb={3}>
//                   <Divider borderColor="gray.300" />
//                 </Box>
//                 <PopoverBody p={0}>
//                   <Flex flexDirection="column" p={0}>
//                     {[
//                       { label: "My Alibaba", path: "/my-alibaba" },
//                       { label: "Orders", path: "/orders" },
//                       { label: "Messages", path: "/messages" },
//                       { label: "RFQs", path: "/rfqs" },
//                       { label: "Account", path: "/account" },
//                     ].map(({ label, path }) => (
//                       <Box
//                         key={label}
//                         px={4}
//                         py={2}
//                         _hover={{
//                           bg: "gray.100",
//                           fontWeight: "bold",
//                           cursor: "pointer",
//                         }}
//                         onClick={() => handleMenuClick(path)}
//                       >
//                         <Text>{label}</Text>
//                       </Box>
//                     ))}
//                   </Flex>
//                 </PopoverBody>
//               </PopoverContent>
//             </Popover>

//             {!isLoggedIn && (
//               <Button
//                 bg="#ff6a00"
//                 color="white"
//                 borderRadius="full"
//                 px={6}
//                 _hover={{ bg: "#cc4400" }}
//                 onClick={() => navigate("/signup")}
//               >
//                 Create account
//               </Button>
//             )}
//           </Flex>
//         </Flex>
//       </Box>

//       {cartItems.length > 0 ? (
//         <Flex direction="column" maxW="container.xl" mx="10" py={6}>
//           <Text fontWeight="bold" fontSize="30px" mb={4}>
//             Shopping Cart
//           </Text>

//           <Flex
//             direction={{ base: "column", md: "row" }}
//             align="flex-start"
//             gap={8}
//           >
//             {/* Cart Items */}
//             <Box>
//               {cartItems.map((item) => (
//                 <Flex
//                   key={item._id}
//                   bg="rgba(0,0,0,.04)"
//                   borderWidth={1}
//                   borderColor="gray.200"
//                   borderRadius="xl"
//                   p={4}
//                   mb={4}
//                   alignItems="center"
//                   gap={4}
//                   maxWidth={"700px"}
//                   maxHeight={"200px"}
//                 >
//                   {/* Product Image */}
//                   <Link to={`/products/${item.productId._id}`}>
//                     <Box boxSize="120px" flexShrink={0}>
//                       <Img
//                         src={item.productId.images?.[0]}
//                         alt={item.productId.name}
//                         objectFit="cover"
//                         borderRadius="md"
//                         width="100%"
//                         height="100%"
//                       />
//                     </Box>
//                   </Link>
//                   {/* Product Info */}
//                   <Box>
//                     <Link
//                       to={`/products/${item.productId._id}`}
//                       style={{ textDecoration: "none", color: "inherit" }}
//                     >
//                       <Text fontWeight="semibold" fontSize="lg" noOfLines={2}>
//                         {item.productId.name}
//                       </Text>
//                     </Link>
//                     <Link
//                       to={`/products/${item.productId._id}`}
//                       style={{ textDecoration: "none", color: "inherit" }}
//                     >
//                       <Text fontSize="sm" color="gray.600" mt={1}>
//                         {item.productId.description?.slice(0, 150)}...
//                       </Text>
//                     </Link>
//                     <Text fontWeight="bold" fontSize="md" mt={2}>
//                       Single Item Price: ${item.productId.price}
//                     </Text>

//                     {/* Quantity Controls */}
//                     <Flex justify={"space-between"}>
//                       <HStack mt={3}>
//                         <Button
//                           size="sm"
//                           onClick={() =>
//                             handleQtyChange(item.productId._id, item.qty - 1)
//                           }
//                         >
//                           −
//                         </Button>
//                         <Text>{item.qty}</Text>
//                         <Button
//                           size="sm"
//                           onClick={() => {
//                             if (item.qty >= item.productId.stock) {
//                               toast({
//                                 title: "Stock limit reached",
//                                 description: "No more available stock.",
//                                 status: "warning",
//                                 duration: 3000,
//                                 isClosable: true,
//                               });
//                               return;
//                             }
//                             handleQtyChange(item.productId._id, item.qty + 1);
//                           }}
//                         >
//                           +
//                         </Button>
//                         <IconButton
//                           icon={<DeleteIcon />}
//                           size="sm"
//                           aria-label="Remove item"
//                           colorScheme="red"
//                           onClick={() => handleRemoveItem(item.productId._id)}
//                           mr={3}
//                         />
//                       </HStack>
//                       <Text
//                         fontWeight="bold"
//                         fontSize="md"
//                         mt={2}
//                         align={"right"}
//                         ml={10}
//                       >
//                         Total: ${item.qty * item.productId.price}
//                       </Text>
//                     </Flex>
//                   </Box>
//                 </Flex>
//               ))}
//             </Box>

//             {/* Order Summary */}
//             <Box
//               width={{ base: "100%", md: "350px" }}
//               bg="white"
//               boxShadow="md"
//               borderRadius="xl"
//               p={6}
//               height="fit-content"
//             >
//               <Text fontWeight="bold" fontSize="lg" mb={4}>
//                 Order summary ({cartItems.length}{" "}
//                 {cartItems.length === 1 ? "item" : "items"})
//               </Text>

//               {/* Item Subtotal */}
//               <Flex justify="space-between" mb={2}>
//                 <Text>Item subtotal</Text>
//                 <Text fontWeight="semibold">
//                   $
//                   {cartItems
//                     .reduce(
//                       (acc, item) => acc + item.qty * item.productId.price,
//                       0
//                     )
//                     .toFixed(2)}
//                 </Text>
//               </Flex>

//               {/* Shipping */}
//               <Flex justify="space-between" mb={2}>
//                 <Text>Shipping fee</Text>
//                 <Text fontWeight="semibold">$10.00</Text>
//               </Flex>

//               <Divider my={4} />

//               {/* Total */}
//               <Flex justify="space-between" fontSize="xl" fontWeight="bold">
//                 <Text>Subtotal excl. tax</Text>
//                 <Text>
//                   $
//                   {(
//                     cartItems.reduce(
//                       (acc, item) => acc + item.qty * item.productId.price,
//                       0
//                     ) + 10
//                   ).toFixed(2)}
//                 </Text>
//               </Flex>

//               <Button
//                 mt={6}
//                 width="100%"
//                 bg="#ff6a00"
//                 color="white"
//                 borderRadius="full"
//                 fontWeight="bold"
//                 _hover={{ bg: "#cc4400" }}
//                 onClick={() =>
//                   navigate("/cart/checkout", { state: { fromCart: true } })
//                 }
//               >
//                 Check out
//               </Button>

//               <Box mt={4} fontSize="sm">
//                 <Text fontWeight="bold" mb={1}>
//                   You're protected on Alibaba.com
//                 </Text>
//                 <Text>Secure payment</Text>
//                 <Text>Refund and returns</Text>
//                 <Text>Fulfillment by Alibaba.com Logistics</Text>
//               </Box>
//             </Box>
//           </Flex>
//         </Flex>
//       ) : (
//         <Box
//           minH="80vh"
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           bg="white"
//         >
//           <VStack spacing={4} textAlign="center">
//             <Text fontSize="3xl" fontWeight="bold">
//               Shopping cart
//             </Text>
//             <VStack spacing={1}>
//               <Text fontSize="xl" fontWeight="bold">
//                 Your shopping cart is empty.
//               </Text>
//               <Text>You're protected on Alibaba.com</Text>
//               <Text>Secure payment</Text>
//               <Text>Refund and returns</Text>
//               <Text>Fulfillment by Alibaba.com Logistics</Text>
//             </VStack>
//             <Button
//               mt={4}
//               borderRadius="full"
//               px={8}
//               py={6}
//               fontWeight="bold"
//               fontSize="md"
//               variant="outline"
//               onClick={() => navigate("/")}
//             >
//               Start Sourcing
//             </Button>
//           </VStack>
//         </Box>
//       )}
//     </>
//   );
// }

// export default CartPage;

import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Input,
  IconButton,
  Button,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Divider,
  VStack,
  Img,
  HStack,
  useToast,
  Spinner,
  List,
  ListItem,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Collapse,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  SearchIcon,
  DeleteIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { FaCamera, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  updateCartItem,
  deleteCartItem,
  signout,
} from "../redux/actions";
import debounce from "lodash.debounce";

function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems || []);
  const loadingCart = useSelector((state) => state.loadingCart);
  const token = useSelector((state) => state.token);
  const username = useSelector((state) => state.username);
  const isLoggedIn = Boolean(token);
  const toast = useToast();
  const displayUsername = username
    ? username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()
    : "";
  const firstLetter = displayUsername.charAt(0);

  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Responsive breakpoints
  const isMobile = useBreakpointValue({ base: true, md: false });
  const showFullSearch = useBreakpointValue({ base: false, lg: true });
  const showCompactSearch = useBreakpointValue({
    base: false,
    md: true,
    lg: false,
  });

  const handleSearch = (searchTerm = searchText) => {
    const term = searchTerm || searchText;
    if (term.trim()) {
      navigate(`/search?q=${encodeURIComponent(term.trim())}`);
    }
    setShowMobileSearch(false);
  };

  const fetchSuggestions = useCallback(
    debounce(async (query) => {
      if (!query.trim()) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/products?q=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        const names = [...new Set(data.map((p) => p.name))].slice(0, 10);
        setSuggestions(names.map((name) => ({ name })));
      } catch (err) {
        console.error("Error fetching suggestions", err);
      } finally {
        setLoading(false);
      }
    }, 600),
    []
  );

  useEffect(() => {
    fetchSuggestions(searchText);
  }, [searchText, fetchSuggestions]);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const handleQtyChange = (productId, qty) => {
    if (qty < 1) return;
    dispatch(updateCartItem(productId, { qty }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(deleteCartItem(productId));
  };

  const handleMenuClick = (path) => {
    navigate("/signin");
  };

  const handleSignOut = () => {
    dispatch(signout());
    navigate("/");
  };

  const SearchBar = ({ isCompact = false, isMobile = false }) => (
    <Box
      flex={isMobile ? "1" : isCompact ? "0" : "1"}
      mx={isMobile ? 2 : 4}
      maxW={isMobile ? "none" : isCompact ? "400px" : "700px"}
      position="relative"
      w={isMobile ? "100%" : "auto"}
    >
      <Flex
        align="center"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="full"
        px={2}
        py={1}
        gap={isCompact ? 1 : 2}
        bg="white"
        minH="40px"
      >
        {!isCompact && (
          <>
            <Flex align="center" px={2} display={{ base: "none", sm: "flex" }}>
              <Text fontSize="sm" fontWeight="medium">
                Products
              </Text>
              <ChevronDownIcon ml={1} />
            </Flex>
            <Box
              h="6"
              borderLeft="1px solid #ccc"
              display={{ base: "none", sm: "block" }}
            />
          </>
        )}
        <Input
          flex={1}
          border="none"
          placeholder="What are you looking for?"
          _focus={{ boxShadow: "none" }}
          color="black"
          fontSize={{ base: "14px", md: "16px" }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        {!isCompact && (
          <IconButton
            icon={<FaCamera />}
            variant="ghost"
            aria-label="camera"
            size="sm"
            display={{ base: "none", sm: "flex" }}
          />
        )}
        <Button
          bg="#ff6a00"
          color="white"
          borderRadius="full"
          px={isCompact ? 3 : 6}
          size={isCompact ? "sm" : "md"}
          _hover={{
            bg: "#cc4400",
            borderColor: "#f60",
          }}
          onClick={handleSearch}
        >
          <SearchIcon mr={isCompact ? 0 : 1} />
          {!isCompact && (
            <Text display={{ base: "none", sm: "inline" }}>Search</Text>
          )}
        </Button>
      </Flex>

      {loading && <Spinner size="sm" mt={2} color="orange.500" />}
      {suggestions.length > 0 && (
        <List
          position="absolute"
          top="100%"
          mt={1}
          left={0}
          right={0}
          zIndex="10"
          bg="white"
          borderRadius="md"
          boxShadow="md"
          maxH="180px"
          overflowY="auto"
          border="1px solid #e2e8f0"
        >
          {suggestions.map((sugg, idx) => (
            <ListItem
              key={idx}
              px={4}
              py={2}
              cursor="pointer"
              color="black"
              _hover={{ bg: "gray.100" }}
              onClick={() => handleSearch(sugg.name)}
            >
              {sugg.name}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );

  const UserMenu = () => (
    <Popover trigger="hover" placement="bottom" closeOnBlur>
      <PopoverTrigger>
        <IconButton
          icon={isLoggedIn ? <span>{firstLetter}</span> : <FaUser />}
          color="black"
          borderColor={isLoggedIn ? "black" : "white"}
          bg="transparent"
          fontSize="20px"
          aria-label="user"
          onClick={() => navigate("/signin")}
        />
      </PopoverTrigger>
      <PopoverContent width="340px" borderRadius="xl" boxShadow="lg" p={0}>
        <PopoverArrow />
        <PopoverHeader fontWeight={600} px={4} py={4} pt={1}>
          {isLoggedIn ? `Hi ${displayUsername}` : "Welcome to Alibaba"}
          {!isLoggedIn && (
            <Button
              mt={4}
              width="100%"
              borderRadius="full"
              bg="#f60"
              color="white"
              fontWeight="bold"
              _hover={{ bg: "#cc4400" }}
              onClick={() => navigate("/signin")}
            >
              Sign in
            </Button>
          )}
          {isLoggedIn && (
            <Button
              mt="4"
              width="100%"
              borderRadius="full"
              bg="#f60"
              color="white"
              fontWeight="bold"
              _hover={{ border: "#f60" }}
              onClick={handleSignOut}
            >
              Sign out
            </Button>
          )}
        </PopoverHeader>
        <Box px={4} pb={3}>
          <Divider borderColor="gray.300" />
        </Box>
        <PopoverBody p={0}>
          <Flex flexDirection="column" p={0}>
            {[
              { label: "My Alibaba", path: "/my-alibaba" },
              { label: "Orders", path: "/orders" },
              { label: "Messages", path: "/messages" },
              { label: "RFQs", path: "/rfqs" },
              { label: "Account", path: "/account" },
            ].map(({ label, path }) => (
              <Box
                key={label}
                px={4}
                py={2}
                _hover={{
                  bg: "gray.100",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => handleMenuClick(path)}
              >
                <Text>{label}</Text>
              </Box>
            ))}
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );

  return (
    <>
      {/* Responsive Header */}
      <Box bg="white" px={{ base: 3, md: 6 }} py={3} boxShadow="sm" w="100%">
        <Flex
          align="center"
          justify="space-between"
          maxW="container.xl"
          mx="auto"
          wrap="nowrap"
        >
          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              icon={<HamburgerIcon />}
              variant="ghost"
              aria-label="menu"
              onClick={onOpen}
              mr={2}
            />
          )}

          {/* Logo */}
          <Flex align="center" gap={2} minW="fit-content">
            <Image
              src="https://s.alicdn.com/@img/i4/O1CN017MrHk61F6C7ZVpv3s_!!6000000000437-2-tps-496-60.png"
              h={{ base: "6", md: "8" }}
              alt="Alibaba Logo"
            />
          </Flex>

          {/* Desktop/Tablet Search Bar */}
          {showFullSearch && <SearchBar />}
          {showCompactSearch && <SearchBar isCompact />}

          {/* Mobile Search Toggle */}
          {isMobile && (
            <IconButton
              icon={<SearchIcon />}
              variant="ghost"
              aria-label="search"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              mx={2}
            />
          )}

          {/* Right Side Buttons */}
          <Flex align="center" gap={{ base: 2, md: 4 }} minW="fit-content">
            {/* Desktop User Menu */}
            {!isMobile && <UserMenu />}

            {/* Desktop Create Account Button */}
            {!isLoggedIn && !isMobile && (
              <Button
                bg="#ff6a00"
                color="white"
                borderRadius="full"
                px={6}
                size={{ base: "sm", md: "md" }}
                _hover={{ bg: "#cc4400" }}
                onClick={() => navigate("/signup")}
              >
                <Text display={{ base: "none", lg: "block" }}>
                  Create account
                </Text>
                <Text display={{ base: "block", lg: "none" }}>Sign up</Text>
              </Button>
            )}

            {/* Mobile User Icon */}
            {isMobile && (
              <IconButton
                icon={isLoggedIn ? <span>{firstLetter}</span> : <FaUser />}
                color="black"
                bg="transparent"
                fontSize="20px"
                aria-label="user"
                onClick={() => navigate("/signin")}
              />
            )}
          </Flex>
        </Flex>

        {/* Mobile Search Bar */}
        <Collapse in={showMobileSearch} animateOpacity>
          <Box mt={3} px={2}>
            <SearchBar isMobile />
          </Box>
        </Collapse>
      </Box>

      {/* Mobile Drawer Menu */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            {isLoggedIn ? `Hi ${displayUsername}` : "Welcome to Alibaba"}
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {!isLoggedIn && (
                <VStack spacing={2}>
                  <Button
                    width="100%"
                    borderRadius="full"
                    bg="#f60"
                    color="white"
                    fontWeight="bold"
                    _hover={{ bg: "#cc4400" }}
                    onClick={() => {
                      navigate("/signin");
                      onClose();
                    }}
                  >
                    Sign in
                  </Button>
                  <Button
                    width="100%"
                    borderRadius="full"
                    variant="outline"
                    borderColor="#f60"
                    color="#f60"
                    fontWeight="bold"
                    _hover={{ bg: "#f60", color: "white" }}
                    onClick={() => {
                      navigate("/signup");
                      onClose();
                    }}
                  >
                    Create account
                  </Button>
                </VStack>
              )}

              {isLoggedIn && (
                <Button
                  width="100%"
                  borderRadius="full"
                  bg="#f60"
                  color="white"
                  fontWeight="bold"
                  _hover={{ bg: "#cc4400" }}
                  onClick={() => {
                    handleSignOut();
                    onClose();
                  }}
                >
                  Sign out
                </Button>
              )}

              <Divider />

              {[
                { label: "My Alibaba", path: "/my-alibaba" },
                { label: "Orders", path: "/orders" },
                { label: "Messages", path: "/messages" },
                { label: "RFQs", path: "/rfqs" },
                { label: "Account", path: "/account" },
              ].map(({ label, path }) => (
                <Button
                  key={label}
                  variant="ghost"
                  justifyContent="flex-start"
                  onClick={() => {
                    handleMenuClick(path);
                    onClose();
                  }}
                >
                  {label}
                </Button>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Cart Content */}
      {cartItems.length > 0 ? (
        <Box
          maxW="container.xl"
          mx="auto"
          px={{ base: 4, md: 6, lg: 10 }}
          py={6}
        >
          <Text
            fontWeight="bold"
            fontSize={{ base: "24px", md: "30px" }}
            mb={4}
          >
            Shopping Cart
          </Text>

          <Stack
            direction={{ base: "column", xl: "row" }}
            align="flex-start"
            spacing={8}
          >
            {/* Cart Items */}
            <Box flex="1" w="100%">
              {cartItems.map((item) => (
                <Box
                  key={item._id}
                  bg="rgba(0,0,0,.04)"
                  borderWidth={1}
                  borderColor="gray.200"
                  borderRadius="xl"
                  p={{ base: 3, md: 4 }}
                  mb={4}
                  w="100%"
                >
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={{ base: "center", sm: "flex-start" }}
                    spacing={4}
                  >
                    {/* Product Image */}
                    <Link to={`/products/${item.productId._id}`}>
                      <Box
                        boxSize={{ base: "100px", md: "120px" }}
                        flexShrink={0}
                      >
                        <Img
                          src={item.productId.images?.[0]}
                          alt={item.productId.name}
                          objectFit="cover"
                          borderRadius="md"
                          width="100%"
                          height="100%"
                        />
                      </Box>
                    </Link>

                    {/* Product Info */}
                    <Box flex="1" w="100%">
                      <Link
                        to={`/products/${item.productId._id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Text
                          fontWeight="semibold"
                          fontSize={{ base: "md", md: "lg" }}
                          noOfLines={2}
                          textAlign={{ base: "center", sm: "left" }}
                        >
                          {item.productId.name}
                        </Text>
                      </Link>

                      <Link
                        to={`/products/${item.productId._id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Text
                          fontSize="sm"
                          color="gray.600"
                          mt={1}
                          textAlign={{ base: "center", sm: "left" }}
                          display={{ base: "none", md: "block" }}
                        >
                          {item.productId.description?.slice(0, 150)}...
                        </Text>
                      </Link>

                      <Text
                        fontWeight="bold"
                        fontSize={{ base: "sm", md: "md" }}
                        mt={2}
                        textAlign={{ base: "center", sm: "left" }}
                      >
                        Single Item Price: ${item.productId.price}
                      </Text>

                      {/* Quantity Controls */}
                      <Stack
                        direction={{ base: "column", md: "row" }}
                        justify="space-between"
                        align={{ base: "center", md: "flex-start" }}
                        mt={3}
                        spacing={4}
                      >
                        <HStack spacing={2}>
                          <Button
                            size="sm"
                            onClick={() =>
                              handleQtyChange(item.productId._id, item.qty - 1)
                            }
                          >
                            −
                          </Button>
                          <Text minW="30px" textAlign="center">
                            {item.qty}
                          </Text>
                          <Button
                            size="sm"
                            onClick={() => {
                              if (item.qty >= item.productId.stock) {
                                toast({
                                  title: "Stock limit reached",
                                  description: "No more available stock.",
                                  status: "warning",
                                  duration: 3000,
                                  isClosable: true,
                                });
                                return;
                              }
                              handleQtyChange(item.productId._id, item.qty + 1);
                            }}
                          >
                            +
                          </Button>
                          <IconButton
                            icon={<DeleteIcon />}
                            size="sm"
                            aria-label="Remove item"
                            colorScheme="red"
                            onClick={() => handleRemoveItem(item.productId._id)}
                            ml={2}
                          />
                        </HStack>

                        <Text
                          fontWeight="bold"
                          fontSize={{ base: "sm", md: "md" }}
                          textAlign={{ base: "center", md: "right" }}
                        >
                          Total: ${item.qty * item.productId.price}
                        </Text>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Box>

            {/* Order Summary */}
            <Box
              width={{ base: "100%", xl: "350px" }}
              bg="white"
              boxShadow="md"
              borderRadius="xl"
              p={{ base: 4, md: 6 }}
              height="fit-content"
              position={{ base: "static", xl: "sticky" }}
              top={{ xl: "20px" }}
            >
              <Text fontWeight="bold" fontSize="lg" mb={4}>
                Order summary ({cartItems.length}{" "}
                {cartItems.length === 1 ? "item" : "items"})
              </Text>

              {/* Item Subtotal */}
              <Flex justify="space-between" mb={2}>
                <Text fontSize={{ base: "sm", md: "md" }}>Item subtotal</Text>
                <Text fontWeight="semibold" fontSize={{ base: "sm", md: "md" }}>
                  $
                  {cartItems
                    .reduce(
                      (acc, item) => acc + item.qty * item.productId.price,
                      0
                    )
                    .toFixed(2)}
                </Text>
              </Flex>

              {/* Shipping */}
              <Flex justify="space-between" mb={2}>
                <Text fontSize={{ base: "sm", md: "md" }}>Shipping fee</Text>
                <Text fontWeight="semibold" fontSize={{ base: "sm", md: "md" }}>
                  $10.00
                </Text>
              </Flex>

              <Divider my={4} />

              {/* Total */}
              <Flex
                justify="space-between"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
              >
                <Text>Subtotal excl. tax</Text>
                <Text>
                  $
                  {(
                    cartItems.reduce(
                      (acc, item) => acc + item.qty * item.productId.price,
                      0
                    ) + 10
                  ).toFixed(2)}
                </Text>
              </Flex>

              <Button
                mt={6}
                width="100%"
                bg="#ff6a00"
                color="white"
                borderRadius="full"
                fontWeight="bold"
                size={{ base: "md", md: "lg" }}
                _hover={{ bg: "#cc4400" }}
                onClick={() =>
                  navigate("/cart/checkout", { state: { fromCart: true } })
                }
              >
                Check out
              </Button>

              <Box mt={4} fontSize={{ base: "xs", md: "sm" }}>
                <Text fontWeight="bold" mb={1}>
                  You're protected on Alibaba.com
                </Text>
                <Text>Secure payment</Text>
                <Text>Refund and returns</Text>
                <Text>Fulfillment by Alibaba.com Logistics</Text>
              </Box>
            </Box>
          </Stack>
        </Box>
      ) : (
        <Box
          minH="80vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="white"
          px={{ base: 4, md: 6 }}
        >
          <VStack spacing={4} textAlign="center" maxW="500px">
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
              Shopping cart
            </Text>
            <VStack spacing={1}>
              <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                Your shopping cart is empty.
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }}>
                You're protected on Alibaba.com
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }}>Secure payment</Text>
              <Text fontSize={{ base: "sm", md: "md" }}>
                Refund and returns
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }}>
                Fulfillment by Alibaba.com Logistics
              </Text>
            </VStack>
            <Button
              mt={4}
              borderRadius="full"
              px={8}
              py={6}
              fontWeight="bold"
              fontSize={{ base: "sm", md: "md" }}
              variant="outline"
              onClick={() => navigate("/")}
            >
              Start Sourcing
            </Button>
          </VStack>
        </Box>
      )}
    </>
  );
}

export default CartPage;
