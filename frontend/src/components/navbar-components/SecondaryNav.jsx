// import React, { useState } from "react";
// import {
//   Box,
//   Divider,
//   Flex,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuList,
//   Text,
// } from "@chakra-ui/react";
// import {
//   FaBars,
//   FaBuilding,
//   FaCommentAlt,
//   FaTag,
//   FaTrophy,
//   FaUser,
// } from "react-icons/fa";

// function SecondaryNav({ setIsHovered, isHovered }) {
//   const [openMenu, setOpenMenu] = useState(null);

//   const handleOpen = (menuKey) => {
//     setIsHovered(true);
//     setOpenMenu(menuKey);
//   };

//   const handleClose = () => {
//     setIsHovered(false);
//     setOpenMenu(null);
//   };

//   return (
//     <Flex
//       py={2}
//       flexDirection={"row"}
//       justifyContent={"space-between"}
//       px={4}
//       fontSize={{ base: 11, md: 14 }}
//       display={{ base: "none", lg: "flex" }}
//       bg={isHovered ? "white" : "transparent"}
//       color={isHovered ? "black" : "white"}
//       transition="all 0.2s ease"
//     >
//       <Flex gap={5}>
//         <Menu isOpen={openMenu === "categories"}>
//           <MenuButton
//             onMouseEnter={() => handleOpen("categories")}
//             onMouseLeave={handleClose}
//           >
//             <Flex flexDirection={"row"} align={"center"}>
//               <FaBars />
//               <Text ml={1}>Categories</Text>
//             </Flex>
//           </MenuButton>
//           <MenuList
//             borderRadius={0}
//             onMouseEnter={() => handleOpen("categories")}
//             onMouseLeave={handleClose}
//           >
//             <MenuItem>Electronics</MenuItem>
//             <MenuItem>Sports</MenuItem>
//           </MenuList>
//         </Menu>

//         <Menu isOpen={openMenu === "featured"}>
//           <MenuButton
//             onMouseEnter={() => handleOpen("featured")}
//             onMouseLeave={handleClose}
//           >
//             Featured selections
//           </MenuButton>
//           <MenuList
//             width={"100vw"}
//             borderRadius={0}
//             onMouseEnter={() => handleOpen("featured")}
//             onMouseLeave={handleClose}
//           >
//             <MenuItem>
//               <Flex
//                 flexDirection={"row"}
//                 gap={10}
//                 minHeight={"200px"}
//                 px={15}
//                 py={5}
//               >
//                 <Flex
//                   border="1px"
//                   borderRadius={"10px"}
//                   flexDirection={"column"}
//                   justifyContent={"center"}
//                   align={"center"}
//                   minWidth={"250px"}
//                   maxHeight={"150px"}
//                   gap={2}
//                 >
//                   <FaTrophy></FaTrophy>
//                   <Box>
//                     <Text> Top ranking</Text>
//                   </Box>
//                 </Flex>
//                 <Flex
//                   border="1px"
//                   borderRadius={"10px"}
//                   flexDirection={"column"}
//                   justifyContent={"center"}
//                   align={"center"}
//                   minWidth={"250px"}
//                   maxHeight={"150px"}
//                   gap={2}
//                 >
//                   <FaCommentAlt></FaCommentAlt>
//                   <Box>
//                     <Text> New arrivals</Text>
//                   </Box>
//                 </Flex>
//                 <Flex
//                   border="1px"
//                   borderRadius={"10px"}
//                   flexDirection={"column"}
//                   justifyContent={"center"}
//                   align={"center"}
//                   minWidth={"250px"}
//                   maxHeight={"150px"}
//                   gap={2}
//                 >
//                   <FaTag></FaTag>
//                   <Box>
//                     <Text> Top deals</Text>
//                   </Box>
//                 </Flex>
//                 <Divider
//                   mx={2}
//                   orientation="vertical"
//                   color={"gray.900"}
//                   minHeight={"190px"}
//                   py={0}
//                 ></Divider>
//                 <Flex
//                   flexDirection={"column"}
//                   gap={4}
//                   align={"left"}
//                   justify={"center"}
//                   minWidth={"200px"}
//                   fontSize={15}
//                 >
//                   <Box>
//                     <Text>Sample center</Text>
//                   </Box>
//                   <Box>
//                     <Text>Online trade show</Text>
//                   </Box>
//                   <Box>
//                     <Text>Tips</Text>
//                   </Box>
//                   <Box>
//                     <Text>LIVE</Text>
//                   </Box>
//                   <Box>
//                     <Text>Global suppliers</Text>
//                   </Box>
//                 </Flex>
//               </Flex>
//             </MenuItem>
//           </MenuList>
//         </Menu>

//         <Menu isOpen={openMenu === "orders"}>
//           <MenuButton
//             onMouseEnter={() => handleOpen("orders")}
//             onMouseLeave={handleClose}
//           >
//             Order protections
//           </MenuButton>
//           <MenuList
//             borderRadius={0}
//             onMouseEnter={() => handleOpen("orders")}
//             onMouseLeave={handleClose}
//           >
//             <MenuItem>Refund Policy</MenuItem>
//             <MenuItem>Shipping Insurance</MenuItem>
//           </MenuList>
//         </Menu>
//       </Flex>

//       <Flex gap={5}>
//         {/* AI sourcing agent */}
//         <Menu isOpen={openMenu === "ai"}>
//           <MenuButton
//             onMouseEnter={() => handleOpen("ai")}
//             onMouseLeave={handleClose}
//             as={"button"}
//             variant="ghost"
//           >
//             AI sourcing agent
//           </MenuButton>
//           <MenuList
//             borderRadius={0}
//             onMouseEnter={() => handleOpen("ai")}
//             onMouseLeave={handleClose}
//           >
//             <MenuItem>AI Option 1</MenuItem>
//             <MenuItem>AI Option 2</MenuItem>
//             {/* More AI-specific items */}
//           </MenuList>
//         </Menu>

//         {/* Buyer central */}
//         <Menu isOpen={openMenu === "buyer"}>
//           <MenuButton
//             onMouseEnter={() => handleOpen("buyer")}
//             onMouseLeave={handleClose}
//             as={"button"}
//             variant="ghost"
//           >
//             Buyer central
//           </MenuButton>
//           <MenuList
//             borderRadius={0}
//             onMouseEnter={() => handleOpen("buyer")}
//             onMouseLeave={handleClose}
//           >
//             <MenuItem>Buyer Option A</MenuItem>
//             <MenuItem>Buyer Option B</MenuItem>
//             {/* Buyer-specific items */}
//           </MenuList>
//         </Menu>

//         {/* Help center */}
//         <Menu isOpen={openMenu === "help"}>
//           <MenuButton
//             onMouseEnter={() => handleOpen("help")}
//             onMouseLeave={handleClose}
//             as={"button"}
//             variant="ghost"
//           >
//             Help center
//           </MenuButton>
//           <MenuList
//             width={"100vw"}
//             borderRadius={0}
//             onMouseEnter={() => handleOpen("help")}
//             onMouseLeave={handleClose}
//           >
//             <MenuItem>
//               <Flex
//                 flexDirection={"row"}
//                 gap={10}
//                 minHeight={"200px"}
//                 px={40}
//                 py={5}
//                 left={0}
//               >
//                 <Flex
//                   border="1px"
//                   borderRadius={"10px"}
//                   flexDirection={"column"}
//                   justifyContent={"center"}
//                   align={"center"}
//                   minWidth={"250px"}
//                   maxHeight={"150px"}
//                   gap={2}
//                 >
//                   <FaUser></FaUser>
//                   <Box>
//                     <Text> For buyers</Text>
//                   </Box>
//                 </Flex>
//                 <Flex
//                   border="1px"
//                   borderRadius={"10px"}
//                   flexDirection={"column"}
//                   justifyContent={"center"}
//                   align={"center"}
//                   minWidth={"250px"}
//                   maxHeight={"150px"}
//                   gap={2}
//                 >
//                   <FaBuilding></FaBuilding>
//                   <Box>
//                     <Text> For suppliers</Text>
//                   </Box>
//                 </Flex>

//                 <Divider
//                   mx={2}
//                   orientation="vertical"
//                   color={"gray.900"}
//                   minHeight={"190px"}
//                   py={0}
//                 ></Divider>
//                 <Flex
//                   flexDirection={"column"}
//                   gap={4}
//                   align={"left"}
//                   justify={"center"}
//                   minWidth={"200px"}
//                   fontSize={15}
//                 >
//                   <Box>
//                     <Text>Open a dispute</Text>
//                   </Box>
//                   <Box>
//                     <Text>Report IPR infringement</Text>
//                   </Box>
//                   <Box>
//                     <Text>Report abuse</Text>
//                   </Box>
//                 </Flex>
//               </Flex>
//             </MenuItem>
//           </MenuList>
//         </Menu>

//         {/* App & extension */}
//         <Menu isOpen={openMenu === "app"}>
//           <MenuButton
//             onMouseEnter={() => handleOpen("app")}
//             onMouseLeave={handleClose}
//             as={"button"}
//             variant="ghost"
//           >
//             App & extension
//           </MenuButton>
//           <MenuList
//             borderRadius={0}
//             onMouseEnter={() => handleOpen("app")}
//             onMouseLeave={handleClose}
//           >
//             <MenuItem>Download App</MenuItem>
//             <MenuItem>Browser Extension</MenuItem>
//             {/* App-specific items */}
//           </MenuList>
//         </Menu>

//         {/* Become a supplier */}
//         <Menu isOpen={openMenu === "supplier"}>
//           <MenuButton
//             onMouseEnter={() => handleOpen("supplier")}
//             onMouseLeave={handleClose}
//             as={"button"}
//             variant="ghost"
//           >
//             Become a supplier
//           </MenuButton>
//           <MenuList
//             borderRadius={0}
//             onMouseEnter={() => handleOpen("supplier")}
//             onMouseLeave={handleClose}
//           >
//             <MenuItem>Supplier Info</MenuItem>
//             <MenuItem>Registration</MenuItem>
//             {/* Supplier-specific items */}
//           </MenuList>
//         </Menu>
//       </Flex>
//     </Flex>
//   );
// }

// export default SecondaryNav;

import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { CategoriesMenu } from "../menus/CategoriesMenu";
import { FeaturedMenu } from "../menus/FeaturedMenu";
import { OrderProtectionMenu } from "../menus/OrderProtectionMenu";
import { AISourcingMenu } from "../menus/AISourcingMenu";
import { BuyerCentralMenu } from "../menus/BuyerCentral";
import { HelpCenterMenu } from "../menus/HelpCenterMenu";
import { AppExtensionMenu } from "../menus/AppExtensionMenu";
import AboutUs from "../menus/AboutUs";

function SecondaryNav({ setIsHovered, isHovered }) {
  const [openMenu, setOpenMenu] = useState(null);

  const handleOpen = (menuKey) => {
    setIsHovered(true);
    setOpenMenu(menuKey);
  };

  const handleClose = () => {
    setIsHovered(false);
    setOpenMenu(null);
  };

  return (
    <Flex
      py={2}
      flexDirection={"row"}
      justifyContent={"space-between"}
      px={4}
      fontSize={{ base: 11, md: 14 }}
      display={{ base: "none", lg: "flex" }}
      bg={isHovered ? "white" : "transparent"}
      color={isHovered ? "black" : "white"}
      transition="all 0.2s ease"
    >
      <Flex gap={5}>
        <CategoriesMenu
          isOpen={openMenu === "categories"}
          onOpen={() => handleOpen("categories")}
          onClose={handleClose}
        />
        <FeaturedMenu
          isOpen={openMenu === "featured"}
          onOpen={() => handleOpen("featured")}
          onClose={handleClose}
        />
        <OrderProtectionMenu
          isOpen={openMenu === "orders"}
          onOpen={() => handleOpen("orders")}
          onClose={handleClose}
        />
      </Flex>

      <Flex gap={5}>
        <AISourcingMenu
          isOpen={openMenu === "ai"}
          onOpen={() => handleOpen("ai")}
          onClose={handleClose}
        />
        <BuyerCentralMenu
          isOpen={openMenu === "buyer"}
          onOpen={() => handleOpen("buyer")}
          onClose={handleClose}
        />
        <HelpCenterMenu
          isOpen={openMenu === "help"}
          onOpen={() => handleOpen("help")}
          onClose={handleClose}
        />
        <AppExtensionMenu
          isOpen={openMenu === "app"}
          onOpen={() => handleOpen("app")}
          onClose={handleClose}
        />
        <AboutUs></AboutUs>
      </Flex>
    </Flex>
  );
}

export default SecondaryNav;
