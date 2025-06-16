import React, { useState } from "react";
import { Box, Container, Flex, Img, useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CartPopover from "./navbar-components/CartPopover";
import UserPopover from "./navbar-components/UserPopover";

import SecondaryNav from "./navbar-components/SecondaryNav.jsx";
import CreateAccountButton from "./navbar-components/CreateAccountButton";
import MobileMenu from "./navbar-components/MobileMenu.jsx";
import HamburgerButton from "./navbar-components/HamburgerButton.jsx";

function Navbar({ SearchBar }) {
  const token = useSelector((state) => state.token);
  const username = useSelector((state) => state.username);
  const isLoggedIn = Boolean(token);

  const displayUsername = username
    ? username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()
    : "";
  const firstLetter = displayUsername.charAt(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isHovered, setIsHovered] = useState(false);
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

        {SearchBar && (
          <Box display={{ base: "none", md: "block" }} flex={1} px={4}>
            {SearchBar}
          </Box>
        )}

        <Flex gap={{ base: 2, md: 6 }} align="center">
          <CartPopover isHovered={isHovered} />

          <UserPopover
            isHovered={isHovered}
            isLoggedIn={isLoggedIn}
            username={displayUsername}
            firstLetter={firstLetter}
          />

          <Box display={{ base: "none", lg: "flex" }}>
            <CreateAccountButton isLoggedIn={isLoggedIn} />
          </Box>
        </Flex>
      </Flex>

      <SecondaryNav setIsHovered={setIsHovered} isHovered={isHovered} />
      <MobileMenu isOpen={isOpen} onClose={onClose}></MobileMenu>
    </Container>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import {
//   Box,
//   Container,
//   Flex,
//   Img,
//   useDisclosure,
//   useBreakpointValue,
//   IconButton,
//   Collapse
// } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";
// import { useSelector } from "react-redux";
// import CartPopover from "./navbar-components/CartPopover";
// import UserPopover from "./navbar-components/UserPopover";
// import SecondaryNav from "./navbar-components/SecondaryNav.jsx";
// import CreateAccountButton from "./navbar-components/CreateAccountButton";
// import MobileMenu from "./navbar-components/MobileMenu.jsx";
// import HamburgerButton from "./navbar-components/HamburgerButton.jsx";

// function Navbar({
//   SearchBar,
//   showMobileSearch,
//   setShowMobileSearch
// }) {
//   const token = useSelector((state) => state.token);
//   const username = useSelector((state) => state.username);
//   const isLoggedIn = Boolean(token);

//   const displayUsername = username
//     ? username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()
//     : "";
//   const firstLetter = displayUsername.charAt(0);

//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [isHovered, setIsHovered] = useState(false);

//   // Responsive breakpoints
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const showDesktopSearch = useBreakpointValue({ base: false, md: true });
//   const showCompactNav = useBreakpointValue({ base: true, lg: false });

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
//         wrap="nowrap"
//       >
//         {/* Left Section - Hamburger + Logo */}
//         <Flex align="center" gap={{ base: 2, md: 3 }} minW="fit-content">
//           <HamburgerButton onOpen={onOpen} />
//           <Img
//             h={{ base: 4, sm: 6, md: 8, lg: 22 }}
//             w={{ base: 20, sm: 24, md: 32, lg: 40 }}
//             src={
//               isHovered
//                 ? "https://s.alicdn.com/@img/imgextra/i1/O1CN01e5zQ2S1cAWz26ivMo_!!6000000003560-2-tps-920-110.png"
//                 : "https://s.alicdn.com/@img/imgextra/i4/O1CN011ZJg9l24hKaeQlVNh_!!6000000007422-2-tps-1380-165.png"
//             }
//             alt="Alibaba Logo"
//           />
//         </Flex>

//         {/* Center Section - Desktop Search Bar */}
//         {SearchBar && showDesktopSearch && (
//           <Box flex={1} px={{ base: 2, md: 4 }} maxW="800px">
//             {SearchBar}
//           </Box>
//         )}

//         {/* Mobile Search Toggle Button */}
//         {SearchBar && isMobile && setShowMobileSearch && (
//           <IconButton
//             icon={<SearchIcon />}
//             variant="ghost"
//             aria-label="search"
//             color={isHovered ? "black" : "white"}
//             _hover={{ bg: isHovered ? "gray.100" : "gray.800" }}
//             onClick={() => setShowMobileSearch(!showMobileSearch)}
//             mx={2}
//             size={{ base: "sm", md: "md" }}
//           />
//         )}

//         {/* Right Section - Cart, User, Create Account */}
//         <Flex
//           gap={{ base: 1, sm: 2, md: 4, lg: 6 }}
//           align="center"
//           minW="fit-content"
//         >
//           <CartPopover isHovered={isHovered} />

//           <UserPopover
//             isHovered={isHovered}
//             isLoggedIn={isLoggedIn}
//             username={displayUsername}
//             firstLetter={firstLetter}
//           />

//           {/* Desktop Create Account Button */}
//           <Box display={{ base: "none", md: isLoggedIn ? "none" : "flex", lg: "flex" }}>
//             <CreateAccountButton isLoggedIn={isLoggedIn} />
//           </Box>
//         </Flex>
//       </Flex>

//       {/* Mobile Search Bar Collapse */}
//       {SearchBar && isMobile && (
//         <Collapse in={showMobileSearch} animateOpacity>
//           <Box
//             bg={isHovered ? "white" : "black"}
//             px={{ base: 3, md: 4 }}
//             pb={3}
//           >
//             {SearchBar}
//           </Box>
//         </Collapse>
//       )}

//       <SecondaryNav setIsHovered={setIsHovered} isHovered={isHovered} />
//       <MobileMenu isOpen={isOpen} onClose={onClose} />
//     </Container>
//   );
// }

// export default Navbar;
