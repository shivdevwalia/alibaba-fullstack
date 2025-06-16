// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Img,
//   Text,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux";

// import HamburgerButton from "../navbar-components/HamburgerButton.jsx";
// import AdminSecondaryNav from "./AdminSecondaryNavbar.jsx";
// import { useNavigate } from "react-router-dom";
// import { signout } from "../../redux/actions.js";

// function AdminNavbar() {
//   const username = useSelector((state) => state.username);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSignOut = () => {
//     dispatch(signout());
//     navigate("/");
//   };
//   const displayUsername = username
//     ? username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()
//     : "";

//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const [isHovered, setIsHovered] = useState(false);
//   return (
//     <Container
//       w="100%"
//       maxW="100%"
//       p={0}
//       bg={isHovered ? "white" : "black"}
//       color={isHovered ? "black" : "white"}
//     >
//       <Flex
//         marginBottom={-2}
//         bg={isHovered ? "white" : "black"}
//         color={isHovered ? "black" : "white"}
//         justifyContent="space-between"
//         w="100%"
//         p={{ base: 2, md: 4 }}
//         align="center"
//       >
//         <Flex align="center" gap={3}>
//           <HamburgerButton onOpen={onOpen} />
//           <Img
//             h={{ base: 4, md: 22 }}
//             w={{ base: 20, md: 40 }}
//             src={
//               isHovered
//                 ? "https://s.alicdn.com/@img/imgextra/i1/O1CN01e5zQ2S1cAWz26ivMo_!!6000000003560-2-tps-920-110.png"
//                 : "https://s.alicdn.com/@img/imgextra/i4/O1CN011ZJg9l24hKaeQlVNh_!!6000000007422-2-tps-1380-165.png"
//             }
//             alt="Alibaba Logo"
//           />
//         </Flex>

//         <Flex gap={1} align="center">
//           <Box px={10}>
//             <Text
//               fontSize={{ base: "md", sm: "lg", md: "25px" }}
//               fontWeight={600}
//             >
//               Welcome Admin!
//             </Text>
//           </Box>
//           <Button
//             px={{ base: 3, md: 6 }}
//             py={2}
//             borderRadius="full"
//             bg="#f60"
//             color="white"
//             fontWeight={"semibold"}
//             fontSize={{ base: "sm", md: "md" }}
//             display={{ base: "none", sm: "flex" }}
//             _hover={{
//               bg: "#cc4400",
//               borderColor: "#f60",
//             }}
//             onClick={handleSignOut}
//           >
//             {" "}
//             Sign out
//           </Button>
//         </Flex>
//       </Flex>

//       <AdminSecondaryNav></AdminSecondaryNav>
//     </Container>
//   );
// }

// export default AdminNavbar;
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Img,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import HamburgerButton from "../navbar-components/HamburgerButton.jsx";
import AdminSecondaryNav from "./AdminSecondaryNavbar.jsx";
import { useNavigate } from "react-router-dom";
import { signout } from "../../redux/actions.js";
import React, { useState } from "react";

function AdminNavbar() {
  const username = useSelector((state) => state.username);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);

  const handleSignOut = () => {
    dispatch(signout());
    navigate("/");
  };

  const displayUsername = username
    ? username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()
    : "";

  return (
    <Container
      w="100%"
      maxW="100%"
      p={0}
      bg={isHovered ? "white" : "black"}
      color={isHovered ? "black" : "white"}
    >
      <Flex
        marginBottom={-2}
        bg={isHovered ? "white" : "black"}
        color={isHovered ? "black" : "white"}
        justifyContent="space-between"
        w="100%"
        p={{ base: 2, md: 4 }}
        align="center"
      >
        <Flex align="center" gap={3}>
          <HamburgerButton onOpen={onOpen} />
          <Img
            h={{ base: 4, md: 22 }}
            w={{ base: 20, md: 40 }}
            src={
              isHovered
                ? "https://s.alicdn.com/@img/imgextra/i1/O1CN01e5zQ2S1cAWz26ivMo_!!6000000003560-2-tps-920-110.png"
                : "https://s.alicdn.com/@img/imgextra/i4/O1CN011ZJg9l24hKaeQlVNh_!!6000000007422-2-tps-1380-165.png"
            }
            alt="Alibaba Logo"
          />
        </Flex>

        <Flex gap={1} align="center">
          <Box px={10}>
            <Text
              fontSize={{ base: "md", sm: "lg", md: "25px" }}
              fontWeight={600}
            >
              Welcome Admin!
            </Text>
          </Box>
          <Button
            px={{ base: 3, md: 6 }}
            py={2}
            borderRadius="full"
            bg="#f60"
            color="white"
            fontWeight={"semibold"}
            fontSize={{ base: "sm", md: "md" }}
            display={{ base: "none", md: "none", lg: "flex" }}
            _hover={{ bg: "#cc4400", borderColor: "#f60" }}
            onClick={handleSignOut}
          >
            Sign out
          </Button>
        </Flex>
      </Flex>

      {/* Desktop secondary nav */}
      <Box display={{ base: "none", lg: "block" }}>
        <AdminSecondaryNav />
      </Box>

      {/* Drawer for mobile nav */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="black" color="white">
          <DrawerHeader borderBottomWidth="1px">Admin Menu</DrawerHeader>
          <DrawerBody>
            <AdminSecondaryNav onNavigate={onClose} />
            <Button
              mt={6}
              width="100%"
              bg="#f60"
              color="white"
              onClick={() => {
                handleSignOut();
                onClose();
              }}
            >
              Sign out
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
}

export default AdminNavbar;
