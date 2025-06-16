// import React from "react";
// import { Flex, Text } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

// function AdminSecondaryNav({ setIsHovered, isHovered }) {
//   const navigate = useNavigate();

//   const navItems = [
//     { label: "Products", path: "/dashboard/products" },
//     { label: "Orders", path: "/dashboard/orders" },
//     { label: "Preview Webstore", path: "/" },
//     { label: "Pages", path: "/pages" },
//   ];

//   return (
//     <Flex
//       py={3}
//       px={6}
//       fontSize={{ base: 12, md: 14 }}
//       justifyContent="space-between"
//       alignItems="center"
//       bg="black"
//       color="white"
//       display={{ base: "none", lg: "flex" }}
//     >
//       <Flex gap={8}>
//         {navItems.map((item, idx) => (
//           <Text
//             key={idx}
//             cursor="pointer"
//             _hover={{ textDecoration: "underline", color: "gray.300" }}
//             onClick={() => navigate(item.path)}
//           >
//             {item.label}
//           </Text>
//         ))}
//       </Flex>
//     </Flex>
//   );
// }

// export default AdminSecondaryNav;
import { Flex, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";

function AdminSecondaryNav({ onNavigate }) {
  const navigate = useNavigate();

  const navItems = [
    { label: "Products", path: "/dashboard/products" },
    { label: "Orders", path: "/dashboard/orders" },
    { label: "Preview Webstore", path: "/" },
    { label: "Pages", path: "/pages" },
  ];

  return (
    <>
      {/* Desktop Nav */}
      <Flex
        py={3}
        px={6}
        fontSize={{ base: 12, md: 14 }}
        justifyContent="space-between"
        alignItems="center"
        bg="black"
        color="white"
        display={{ base: "none", lg: "flex" }}
      >
        <Flex
          gap={{ base: 4, md: 6, lg: 8 }}
          display={{ base: "none", md: "flex" }}
        >
          {navItems.map((item, idx) => (
            <Text
              key={idx}
              cursor="pointer"
              _hover={{ textDecoration: "underline", color: "gray.300" }}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Text>
          ))}
        </Flex>
      </Flex>

      {/* Mobile Nav (inside drawer) */}
      <VStack
        spacing={4}
        align="flex-start"
        display={{ base: "flex", lg: "none" }}
        mt={4}
      >
        {navItems.map((item, idx) => (
          <Text
            key={idx}
            fontSize="md"
            cursor="pointer"
            _hover={{ color: "gray.300" }}
            onClick={() => {
              navigate(item.path);
              if (onNavigate) onNavigate(); // Close drawer if passed
            }}
          >
            {item.label}
          </Text>
        ))}
      </VStack>
    </>
  );
}

export default AdminSecondaryNav;
