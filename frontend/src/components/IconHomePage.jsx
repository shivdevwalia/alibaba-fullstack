import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaKeyboard, FaTableTennis } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StatBox = ({ value, label, minWidth = "200px", marginLeft = 0 }) => (
  <>
   
    <Flex flexDirection="column" gap={4}>
      <Box borderLeft={"2px"}  pl={2}>
      <Box minW={minWidth}>
        <Text color="#f60" fontSize="35px" fontWeight="semibold">
          {value}
        </Text>
      </Box>
      <Box>
        <Text color="black" fontSize="18px">
          {label}
        </Text>
      </Box>
      </Box>
    </Flex>
  </>
);
const CategoryIcon = ({ icon, label, onClick }) => (
  <Box
    _hover={{ borderColor: "#f60" }}
    borderWidth="2px"
    borderColor="gray.200"
    borderRadius="full"
    width="130px"
    height="130px"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    gap={1}
    onClick={onClick}
  >
    {icon}
    <Text>{label}</Text>
  </Box>
);
const categories = [
  {
    icon: <FaTableTennis size="25px" />,
    label: "Sports",
    value: "/search?category=Sports",
  },
  {
    icon: <FaKeyboard size="25px" />,
    label: "Electronics",
    value: "/search?category=Electronics",
  },
  {
    icon: <FaTableTennis size="25px" />,
    label: "Sports",
    value: "/search?category=Sports",
  },
  {
    icon: <FaKeyboard size="25px" />,
    label: "Electronics",
    value: "/search?category=Electronics",
  },
  {
    icon: <FaTableTennis size="25px" />,
    label: "Sports",
    value: "/search?category=Sports",
  },
  {
    icon: <FaKeyboard size="25px" />,
    label: "Electronics",
    value: "/search?category=Electronics",
  },
  {
    icon: <FaTableTennis size="25px" />,
    label: "Sports",
    value: "/search?category=Sports",
  },
  {
    icon: <FaKeyboard size="25px" />,
    label: "Electronics",
    value: "/search?category=Electronics",
  },
  {
    icon: <FaTableTennis size="25px" />,
    label: "Sports",
    value: "/search?category=Sports",
  },
  {
    icon: <FaKeyboard size="25px" />,
    label: "Electronics",
    value: "/search?category=Electronics",
  },
  {
    icon: <FaTableTennis size="25px" />,
    label: "Sports",
    value: "/search?category=Sports",
  },
  {
    icon: <FaKeyboard size="25px" />,
    label: "Electronics",
    value: "/search?category=Electronics",
  },
  {
    icon: <FaTableTennis size="25px" />,
    label: "Sports",
    value: "/search?category=Sports",
  },
  {
    icon: <FaKeyboard size="25px" />,
    label: "Electronics",
    value: "/search?category=Electronics",
  },
  {
    icon: <FaTableTennis size="25px" />,
    label: "Sports",
    value: "/search?category=Sports",
  },
  {
    icon: <FaKeyboard size="25px" />,
    label: "Electronics",
    value: "/search?category=Electronics",
  },
];

function IconHomePage() {
  const navigate = useNavigate();
  return (
    <Flex
      flexDirection="column"
      m={3}
      gap={{ base: 8, md: 8 }}
      minHeight={"750px"}
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        pt={{ base: 2, md: 10 }}
      >
        <Box>
          <Text
            fontWeight={600}
            fontSize={{ base: "25px", md: "40px" }}
            maxWidth="700px"
          >
            Explore millions of offerings tailored to your business needs
          </Text>
        </Box>
        <Flex flexDirection="column" mt={{ base: 6, md: 2 }} gap={2} >
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            gap={2}
          >
            <StatBox value="200M+" label="products" />
            <StatBox value="200K+" label="suppliers" />
          </Flex>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            mt={{ base: 0, md: 5 }}
            gap={2}
          >
            <StatBox value="5,900+" label="product categories" />
            <StatBox
              value="200+"
              label="countries and regions"
              marginLeft={10}
            />
          </Flex>
        </Flex>
      </Flex>

      <Flex
        // flexDirection={{ base: "column", md: "row" }}
        flexWrap="wrap"
        gap={3}
        justify={"center"}
      >
        {categories.map((item, index) => (
          <CategoryIcon
            key={index}
            icon={item.icon}
            label={item.label}
            onClick={() => navigate(item.value)}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default IconHomePage;
