import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { useRef } from "react";

const ProductCard = ({ product }) => {
  const { name, price, images = [], features = [], category } = product;
  const scrollRef = useRef(null);
  const imageHeight = category === "Sports" ? "300px" : "130px";

  return (
    <Box
      borderRadius="xl"
      boxShadow="md"
      overflow="hidden"
      bg="white"
      p={3}
      display={"flex"}
      flexDirection={"column"}
      align="center"
      justify="center"
    >
      <Box overflowX="hidden" whiteSpace="nowrap" ref={scrollRef}>
        <Flex gap={2} align="center" justify="center">
          {images.length > 0 && (
            <Image mt={2}
              src={images[0]}
              alt={`Product 0`}
              boxSize="130px"
              objectFit="cover"
              borderRadius="md"
            />
          )}
        </Flex>
      </Box>
      <Text mt={2} fontWeight="bold" noOfLines={2}>
        {name}
      </Text>
      <Text color="black" fontSize="lg">
        ${price}
      </Text>
      <Box mt={1}>
        {features.slice(0, 3).map((feat, i) => (
          <Text fontSize="sm" color="gray.600" key={i}>
            • {feat}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default ProductCard;
