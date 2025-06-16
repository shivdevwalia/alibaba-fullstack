import React, { useEffect } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverHeader,
  IconButton,
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/actions";

function CartPopover({ isHovered }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCartNavigation = () => {
    navigate("/cart");
  };
  const cartItems = useSelector((state) => state.cartItems);
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <Popover trigger="hover" placement="bottom" closeOnBlur={true}>
      <PopoverTrigger>
        <IconButton
          aria-label="Open Cart"
          borderColor={"transparent"}
          icon={<FaShoppingCart />}
          color={isHovered ? "black" : "white"}
          bg="transparent"
          _hover={{ border: "black" }}
          fontSize={{ base: "16px", md: "20px" }}
          size={{ base: "xs", md: "md" }}
        />
      </PopoverTrigger>

      <PopoverContent
        width={{ base: "280px", md: "340px" }}
        maxH="400px"
        borderRadius="xl"
        boxShadow="lg"
        color="black"
        p={0}
      >
        <PopoverArrow />
        <PopoverHeader
          fontWeight="bold"
          fontSize="lg"
          px={4}
          pt={4}
          pb={2}
          borderBottom="none"
        >
          Shopping Cart
        </PopoverHeader>
        <PopoverBody px={4} py={0}>
          <Flex
            justify="center"
            align="center"
            height="100px"
            fontSize="md"
            fontWeight="semibold"
          >
            {cartItems.length > 0 ? "Continue Shopping" : "Your cart is empty"}
          </Flex>
        </PopoverBody>
        <Box borderTop="1px solid #eee" px={4} py={4}>
          <Button
            width="100%"
            borderRadius="2xl"
            bg="white"
            border="1px solid #ccc"
            fontWeight="bold"
            onClick={handleCartNavigation}
            _hover={{ bg: "white", border: "1px solid #ccc" }}
          >
            Go to Cart
          </Button>
        </Box>
      </PopoverContent>
    </Popover>
  );
}

export default CartPopover;
