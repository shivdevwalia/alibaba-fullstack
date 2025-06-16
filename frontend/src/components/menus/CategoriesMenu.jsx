// import React from "react";
// import {
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuList,
//   Flex,
//   Text,
// } from "@chakra-ui/react";
// import { FaBars } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// export const CategoriesMenu = ({ isOpen, onOpen, onClose }) => {
//   const navigate = useNavigate();
//   return (
//     <Menu isOpen={isOpen}>
//       <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
//         <Flex flexDirection={"row"} align={"center"}>
//           <FaBars />
//           <Text ml={1}>Categories</Text>
//         </Flex>
//       </MenuButton>
//       <MenuList borderRadius={0} onMouseEnter={onOpen} onMouseLeave={onClose}>
//         <MenuItem onClick={() => navigate("/category/Electronics")}>
//           Electronics
//         </MenuItem>
//         <MenuItem onClick={() => navigate("/category/Sports")}>Sports</MenuItem>
//       </MenuList>
//     </Menu>
//   );
// };
import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const CategoriesMenu = ({ isOpen, onOpen, onClose }) => {
  const navigate = useNavigate();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
        <Flex flexDirection={"row"} align={"center"}>
          <FaBars />
          <Text ml={1}>Categories</Text>
        </Flex>
      </MenuButton>
      <MenuList borderRadius={0} onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuItem onClick={() => navigate("/search?category=Electronics")}>
          Electronics
        </MenuItem>
        <MenuItem onClick={() => navigate("/search?category=Sports")}>
          Sports
        </MenuItem>
      </MenuList>
    </Menu>
  );
};