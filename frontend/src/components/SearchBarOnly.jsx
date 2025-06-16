// import { SearchIcon } from "@chakra-ui/icons";
// import { Flex, IconButton, Input, Button } from "@chakra-ui/react";
// import { FaCamera } from "react-icons/fa";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function SearchBarOnly() {
//   const [searchText, setSearchText] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (searchText.trim()) {
//       navigate(`/search?q=${encodeURIComponent(searchText.trim())}`);
//     }
//   };

//   return (
//     <Flex
//       align="center"
//       border="1px solid"
//       borderColor="gray.300"
//       borderRadius="full"
//       bg="white"
//       px={2}
//       py={1}
//       flex="1"
//       mx="auto"
//       mt={4}
//       maxW="500px"
//       gap={2}
//     >
//       <Input
//         placeholder="Search products..."
//         variant="unstyled"
//         px={4}
//         flex="1"
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//         _placeholder={{ color: "gray.500" }}
//         color="black"
//         onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//       />
//       <IconButton
//         icon={<FaCamera />}
//         variant="ghost"
//         aria-label="camera"
//         size="sm"
//         border="1px solid white"
//         _hover={{ bg: "white", borderColor: "white", color: "#f60" }}
//         _focus={{
//           outline: "none",
//           boxShadow: "none",
//           borderColor: "white",
//           bg: "white",
//         }}
//       />
//       <Button
//         bg="#ff6a00"
//         color="white"
//         borderRadius="full"
//         px={6}
//         onClick={handleSearch}
//         _hover={{
//           bg: "#cc4400",
//           borderColor: "#f60",
//         }}
//       >
//         <SearchIcon mr={1} /> Search
//       </Button>
//     </Flex>
//   );
// }

// export default SearchBarOnly;

import React, { useState, useEffect, useCallback } from "react";
import {
  Flex,
  IconButton,
  Input,
  Button,
  Box,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";

function SearchBarOnly() {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (query = searchText) => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  // Debounced fetchSuggestions function
  const fetchSuggestions = useCallback(
    debounce(async (query) => {
      if (!query.trim()) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8000/products?q=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        const names = [...new Set(data.map((p) => p.name))].slice(0, 10); // get unique names
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

  return (
    <Box position="relative" maxW="500px" mx="auto" mt={4}>
      <Flex
        align="center"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="full"
        bg="white"
        px={2}
        py={1}
        gap={2}
      >
        <Input
          placeholder="Search products..."
          variant="unstyled"
          px={4}
          flex="1"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          _placeholder={{ color: "gray.500" }}
          color="black"
        />
        <IconButton
          icon={<FaCamera />}
          variant="ghost"
          aria-label="camera"
          size="sm"
          border="1px solid white"
          _hover={{ bg: "white", borderColor: "white", color: "#f60" }}
          _focus={{
            outline: "none",
            boxShadow: "none",
            borderColor: "white",
            bg: "white",
          }}
        />
        <Button
          bg="#ff6a00"
          color="white"
          borderRadius="full"
          px={6}
          onClick={() => handleSearch()}
          _hover={{
            bg: "#cc4400",
            borderColor: "#f60",
          }}
        >
          <SearchIcon mr={1} /> Search
        </Button>
      </Flex>

      {loading && <Spinner size="sm" mt={2} color="orange.500" />}
      {suggestions.length > 0 && (
        <List
          position="absolute"
          zIndex="10"
          bg="white"
          w="100%"
          mt={1}
          borderRadius="md"
          boxShadow="md"
          maxH="200px"
          overflowY="auto"
        >
          {suggestions.map((sugg, idx) => (
            <ListItem
              key={idx}
              px={4}
              py={2}
              cursor="pointer"
              color={"black"}
              onClick={() => handleSearch(sugg.name)}
            >
              {sugg.name}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

export default SearchBarOnly;
