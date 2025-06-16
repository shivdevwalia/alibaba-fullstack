// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrders } from "../redux/actions";
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Container,
//   Spinner,
//   Center,
//   Divider,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import AdminNavbar from "../components/adminComponents/AdminNavbar";

// function capitalize(name = "") {
//   return name
//     .split(" ")
//     .map((word) => word[0]?.toUpperCase() + word.slice(1).toLowerCase())
//     .join(" ");
// }

// function DashOrders() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllOrders());
//   }, [dispatch]);

//   const { orders, loadingOrders, errorOrders } = useSelector((state) => ({
//     orders: state.orders,
//     loadingOrders: state.loadingOrders,
//     errorOrders: state.errorOrders,
//   }));

//   const bg = useColorModeValue("white", "gray.800");
//   const border = useColorModeValue("gray.200", "gray.700");

//   if (loadingOrders) {
//     return (
//       <>
//         <AdminNavbar />
//         <Center h="50vh">
//           <Spinner size="xl" color="blue.500" />
//         </Center>
//       </>
//     );
//   }

//   if (errorOrders) {
//     return (
//       <>
//         <AdminNavbar />
//         <Center h="50vh">
//           <Text color="red.500">Error: {errorOrders}</Text>
//         </Center>
//       </>
//     );
//   }

//   return (
//     <>
//       <AdminNavbar />
//       <Container maxW="container.lg" py={8}>
//         <Box
//           bg={bg}
//           border="1px solid"
//           borderColor={border}
//           borderRadius="lg"
//           boxShadow="md"
//           overflow="hidden"
//         >
//           {/* Header Row */}
//           <HStack
//             spacing={0}
//             px={6}
//             py={4}
//             bg="gray.100"
//             borderBottom="1px solid"
//             borderColor={border}
//             fontWeight="bold"
//             fontSize="md"
//             color="gray.700"
//           >
//             <Box flex="1">User</Box>
//             <Box flex="2">Item</Box>
//             <Box flex="1" textAlign="right">
//               Total
//             </Box>
//           </HStack>

//           {/* Order Rows */}
//           <VStack align="stretch" spacing={0}>
//             {orders && orders.length > 0 ? (
//               orders.map((order) => {
//                 const userName = capitalize(order.user?.name || "Unknown");
//                 const items = order.orderItems
//                   .map(
//                     (item) =>
//                       `${item.product?.name || "Unnamed"} x${item.qty || 1}`
//                   )
//                   .join(", ");
//                 const total = `$${order.totalAmount?.toFixed(2) || "0.00"}`;

//                 return (
//                   <Box
//                     key={order._id}
//                     px={6}
//                     py={4}
//                     _hover={{ bg: "gray.50" }}
//                     borderBottom="1px solid"
//                     borderColor={border}
//                   >
//                     <HStack spacing={0}>
//                       <Box flex="1" color="gray.800" fontWeight="medium">
//                         {userName}
//                       </Box>
//                       <Box flex="2" color="gray.600">
//                         {items}
//                       </Box>
//                       <Box
//                         flex="1"
//                         textAlign="right"
//                         color="green.600"
//                         fontWeight="bold"
//                       >
//                         {total}
//                       </Box>
//                     </HStack>
//                   </Box>
//                 );
//               })
//             ) : (
//               <Center py={16}>
//                 <VStack spacing={2}>
//                   <Text fontSize="lg" fontWeight="semibold" color="gray.600">
//                     No orders found
//                   </Text>
//                   <Text color="gray.400">Orders will appear here soon.</Text>
//                 </VStack>
//               </Center>
//             )}
//           </VStack>
//         </Box>
//       </Container>
//     </>
//   );
// }

// export default DashOrders;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../redux/actions";
import {
  Box,
  Text,
  VStack,
  HStack,
  Container,
  Spinner,
  Center,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import AdminNavbar from "../components/adminComponents/AdminNavbar";

// Capitalize helper
function capitalize(name = "") {
  return name
    .split(" ")
    .map((word) => word[0]?.toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Date formatter
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function DashOrders() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const { orders, loadingOrders, errorOrders } = useSelector((state) => ({
    orders: state.orders,
    loadingOrders: state.loadingOrders,
    errorOrders: state.errorOrders,
  }));

  const bg = useColorModeValue("white", "gray.800");
  const border = useColorModeValue("gray.200", "gray.700");

  if (loadingOrders) {
    return (
      <>
        <AdminNavbar />
        <Center h="50vh">
          <Spinner size="xl" color="blue.500" />
        </Center>
      </>
    );
  }

  if (errorOrders) {
    return (
      <>
        <AdminNavbar />
        <Center h="50vh">
          <Text color="red.500">Error: {errorOrders}</Text>
        </Center>
      </>
    );
  }

  return (
    <>
      <AdminNavbar />
      <Container maxW="container.lg" py={8}>
        <Box
          bg={bg}
          border="1px solid"
          borderColor={border}
          borderRadius="lg"
          boxShadow="md"
          overflow="hidden"
        >
          {/* Header Row */}
          <HStack
            spacing={0}
            px={6}
            py={4}
            bg="gray.100"
            borderBottom="1px solid"
            borderColor={border}
            fontWeight="bold"
            fontSize="md"
            color="gray.700"
          >
            <Box flex="1">User</Box>
            <Box flex="2" display={{ base: "none", md: "block" }}>
              Item
            </Box>
            <Box flex="1" display={{ base: "none", md: "block" }}>
              Date
            </Box>
            <Box flex="1" textAlign="right">
              Total
            </Box>
          </HStack>

          {/* Order Rows */}
          <VStack align="stretch" spacing={0}>
            {orders && orders.length > 0 ? (
              orders.map((order) => {
                const userName = capitalize(order.user?.name || "Unknown");
                const items = order.orderItems
                  .map(
                    (item) =>
                      `${item.product?.name || "Unnamed"} x${item.qty || 1}`
                  )
                  .join(", ");
                const total = `$${order.totalAmount?.toFixed(2) || "0.00"}`;
                const createdAt = formatDate(order.createdAt);

                return (
                  <Box
                    key={order._id}
                    px={6}
                    py={4}
                    _hover={{ bg: "gray.50" }}
                    borderBottom="1px solid"
                    borderColor={border}
                  >
                    <HStack spacing={0}>
                      <Box flex="1" color="gray.800" fontWeight="medium">
                        {userName}
                      </Box>
                      <Box flex="2" color="gray.600" display={{ base: "none", md: "block" }}>
                        {items}
                      </Box>
                      <Box flex="1" color="gray.500" display={{ base: "none", md: "block" }}>
                        {createdAt}
                      </Box>
                      <Box
                        flex="1"
                        textAlign="right"
                        color="green.600"
                        fontWeight="bold"
                      >
                        {total}
                      </Box>
                    </HStack>
                  </Box>
                );
              })
            ) : (
              <Center py={16}>
                <VStack spacing={2}>
                  <Text fontSize="lg" fontWeight="semibold" color="gray.600">
                    No orders found
                  </Text>
                  <Text color="gray.400">Orders will appear here soon.</Text>
                </VStack>
              </Center>
            )}
          </VStack>
        </Box>
      </Container>
    </>
  );
}

export default DashOrders;
