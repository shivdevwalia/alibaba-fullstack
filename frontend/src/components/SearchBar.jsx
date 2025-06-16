import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Img,
  Input,
  Text,
  Spinner,
  List,
  ListItem,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import RotatingPlaceholderInput from "./RotatingPlaceholder";
import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";

function SearchBar() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (input.trim()) {
      navigate(`/search?q=${encodeURIComponent(input.trim())}`);
    }
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
    fetchSuggestions(input);
  }, [input, fetchSuggestions]);

  return (
    <Flex
      gap={2}
      color={"white"}
      flexDirection={"column"}
      minH={"600px"}
      maxWidth={"100%"}
    >
      <Flex
        direction="column"
        pt={{ base: "40px", md: "80px", lg: "105px" }}
        pl={{ base: 4, md: 8, lg: 10 }}
        gap={{ base: 2, md: 3 }}
        width="100%"
      >
        <Flex alignItems="center" gap={1}>
          <Img
            src="https://s.alicdn.com/@img/imgextra/i4/O1CN01AcYYU3215pAonO55E_!!6000000006934-2-tps-56-56.png"
            boxSize="24px"
            alt="Learn About Alibaba"
          />
          <Text fontSize="23" fontWeight={400} cursor="pointer">
            Learn about Alibaba
          </Text>
        </Flex>

        <Text
          fontWeight={600}
          fontSize={{ base: 30, md: 50 }}
          maxWidth={"1000"}
          lineHeight={{ base: "45px", md: "60px" }}
        >
          The leading B2B ecommerce platform for global trade
        </Text>

        {/* SEARCH BOX */}
        <Box
          position="relative"
          maxW="800px"
          mx={0}
          mt={2}
          pl={{ base: 0, md: 4, lg: 4 }}
          pr={{ base: 2, md: 4, lg: 6 }}
        >
          <Flex
            align="center"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="full"
            bg="white"
            px={2}
            py={1}
            flex="1"
            gap={2}
          >
            <RotatingPlaceholderInput
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
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
              px={{ base: 4, md: 6 }}
              fontSize={{ base: "sm", md: "md" }}
              _hover={{
                bg: "#cc4400",
                borderColor: "#f60",
              }}
              onClick={handleSearch}
              size={{ base: "sm", md: "md" }}
            >
              <SearchIcon mr={1} /> Search
            </Button>
          </Flex>

          {/* Suggestions */}
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

        {/* Frequently searched */}
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          m={{ base: 3, md: 5 }}
          align={{ base: "flex-start", md: "center" }}
          gap={{ base: 2, md: 4 }}
        >
          <Text fontSize={{ base: "md", md: "lg" }}> Frequently searched:</Text>
          <Flex
            bg={"blackAlpha.200"}
            _hover={{ bg: "blackAlpha.500" }}
            ml={"15px"}
            borderRadius={"full"}
            borderColor={"white"}
            border={"1px"}
            justify={"center"}
            minWidth={"100px"}
            px={4}
            py={2}
            cursor={"pointer"}
            onClick={() => navigate("/search?category=Electronics")}
          >
            <Text fontSize={{ base: "xs", md: "md" }}>Electronics</Text>
          </Flex>
          <Flex
            bg={"blackAlpha.200"}
            ml={"15px"}
            borderRadius={"full"}
            borderColor={"white"}
            border={"1px"}
            justify={"center"}
            minWidth={"100px"}
            _hover={{ bg: "blackAlpha.500" }}
            cursor={"pointer"}
            px={4}
            py={2}
            onClick={() => navigate("/search?category=Sports")}
          >
            <Text fontSize={{ base: "xs", md: "md" }}>Sports</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SearchBar;
