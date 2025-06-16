import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Button,
  VStack,
  Divider,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getCart, placeOrder } from "../redux/actions";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!location.state?.fromCart) {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  const cartItems = useSelector((state) => state.cartItems || []);
  const placingOrder = useSelector((state) => state.placingOrder);
  const errorPlaceOrder = useSelector((state) => state.errorPlaceOrder);
  const successPlaceOrder = useSelector((state) => state.successPlaceOrder);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.qty * item.productId.price,
    0
  );
  const shipping = 10;
  const total = subtotal + shipping;

  const [form, setForm] = useState({
    fullName: "",
    country: "",
    phone: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = true;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  useEffect(() => {
    if (successPlaceOrder) {
      toast({
        title: "Order placed successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setTimeout(() => {
        navigate("/", { replace: true });
      }, 3000);
    }
  }, [successPlaceOrder, toast, navigate]);

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      toast({
        title: "Please fill out all required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    await dispatch(getCart());
    const orderItems = cartItems.map((item) => ({
      product: item.productId._id,
      qty: item.qty,
    }));
    dispatch(placeOrder(orderItems, total));
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      maxW="container.xl"
      mx="auto"
      py={10}
      px={6}
      gap={8}
    >
      {/* Left side - Form */}
      <Box flex="2">
        <Heading size="lg" mb={6}>
          Checkout
        </Heading>

        {/* Personal Info */}
        <Box mb={8}>
          <Heading size="md" mb={4}>
            Personal Information
          </Heading>
          <VStack spacing={4} align="stretch">
            <FormControl isInvalid={errors.fullName}>
              <FormLabel>Full Name</FormLabel>
              <Input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="John Doe"
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.country}>
              <FormLabel>Country</FormLabel>
              <Input
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Country"
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.phone}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 234 567 890"
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.address}>
              <FormLabel>Address</FormLabel>
              <Input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Street, City, Zip Code"
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
          </VStack>
        </Box>

        {/* Payment Info */}
        <Box>
          <Heading size="md" mb={4}>
            Payment Information
          </Heading>
          <VStack spacing={4} align="stretch">
            <FormControl isInvalid={errors.cardNumber}>
              <FormLabel>Card Number</FormLabel>
              <Input
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.expiry}>
              <FormLabel>Expiration Date</FormLabel>
              <Input
                name="expiry"
                value={form.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.cvv}>
              <FormLabel>CVV</FormLabel>
              <Input
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
                placeholder="123"
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
          </VStack>
          <Button
            mt={6}
            colorScheme="orange"
            size="lg"
            width="100%"
            onClick={handlePlaceOrder}
            isLoading={placingOrder}
            loadingText="Placing Order..."
          >
            Place Order
          </Button>
        </Box>
      </Box>

      {/* Right side - Order Summary */}
      <Box
        flex="1"
        bg="white"
        boxShadow="md"
        borderRadius="xl"
        p={6}
        h="fit-content"
      >
        <Text fontWeight="bold" fontSize="lg" mb={4}>
          Order summary ({cartItems.length} item
          {cartItems.length !== 1 && "s"})
        </Text>

        {cartItems.map((item) => (
          <Flex key={item._id} justify="space-between" mb={2}>
            <Text noOfLines={1}>{item.productId.name}</Text>
            <Text>${(item.qty * item.productId.price).toFixed(2)}</Text>
          </Flex>
        ))}

        <Divider my={4} />

        <Flex justify="space-between" mb={2}>
          <Text>Items subtotal</Text>
          <Text>${subtotal.toFixed(2)}</Text>
        </Flex>
        <Flex justify="space-between" mb={2}>
          <Text>Shipping</Text>
          <Text>${shipping.toFixed(2)}</Text>
        </Flex>

        <Divider my={4} />

        <Flex justify="space-between" fontWeight="bold" fontSize="lg">
          <Text>Total</Text>
          <Text>${total.toFixed(2)}</Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Checkout;
