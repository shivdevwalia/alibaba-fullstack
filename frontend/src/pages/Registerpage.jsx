import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Img,
  Container,
  Text,
  Heading,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import FooterJson from "../components/FooterJson";
import SigninFooter from "../components/SigninFooter";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/actions";
import GoogleLoginButton from "../components/GoogleLoginButton";
function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const loadingSignup = useSelector((state) => state.loadingSignup);
  const errorSignup = useSelector((state) => state.errorSignup);
  const isAuth = useSelector((state) => state.isAuth);
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const handleSubmit = () => {
    let hasError = false;
    if (!name) {
      setNameError("Enter your name");
      hasError = true;
    } else {
      setNameError("");
    }
    if (!email) {
      setEmailError("Enter your email ID");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password cannot be empty");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (!hasError) {
      const payload = { name, email, password };
      dispatch(signup(payload));
      navigate("/signin");
    }
  };

  return (
    <Box w="100%" bg="white" minH="100vh" overflowX={"hidden"}>
      <Box w="100%" bg="white" boxShadow="sm" py={2}>
        <Container maxW="container.xl">
          <Flex gap={4} align="center">
            <Img
              src="https://s.alicdn.com/@img/i4/O1CN017MrHk61F6C7ZVpv3s_!!6000000000437-2-tps-496-60.png"
              alt="Alibaba Logo"
              h="8"
            />
          </Flex>
        </Container>
      </Box>

      <Flex
        direction={{ base: "column", lg: "row" }}
        px={6}
        py={12}
        align="center"
        justify="center"
      >
        <Flex flex="1" justify="center" position={"relative"}>
          <Img
            src="https://s.alicdn.com/@img/imgextra/i4/O1CN01SWUy3H1gNanAnecJg_!!6000000004130-2-tps-1840-1600.png"
            maxW="90%"
            objectFit="contain"
            alt="Alibaba visual"
            pb={{ base: "10px", lg: "0" }}
          />
          <Box
            display={{ base: "none", lg: "flex" }}
            position="absolute"
            bottom={0}
            left={0}
            width="100vw"
            height="1px"
            bg="gray.300"
            transform="translateX(calc(-50vw + 50%))"
            zIndex={1}
          />
        </Flex>

        <Flex flex="1" justify="center" align="center">
          <Box
            width="100%"
            maxW="400px"
            bg="white"
            borderRadius="md"
            boxShadow="md"
            p={6}
          >
            <Flex flexDirection={"column"} align={"center"} w="100%">
              <Heading fontSize={"2xl"} mb={4}>
                Create your account
              </Heading>
              <FormControl isInvalid={nameError} mt={4}>
                <Input
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  borderRadius={7}
                />
                {nameError && <FormErrorMessage>{nameError}</FormErrorMessage>}
              </FormControl>

              <FormControl isInvalid={emailError} mt={4}>
                <Input
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  borderRadius={7}
                />
                {emailError && (
                  <FormErrorMessage>{emailError}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={passwordError} mt={4}>
                <Input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  borderRadius={7}
                />
                {passwordError && (
                  <FormErrorMessage>{passwordError}</FormErrorMessage>
                )}
              </FormControl>

              <Button
                bg="#f60"
                color="white"
                borderRadius="full"
                size="lg"
                width="100%"
                mt={6}
                _hover={{ borderColor: "#f60" }}
                onClick={handleSubmit}
                isLoading={loadingSignup}
                loadingText="Registering..."
              >
                Register
              </Button>
              <Flex mt={8} align={"center"} flexDirection={"row"}>
                <Text color={"gray"} fontSize={14} fontWeight={400} mr={2}>
                  Continue with google
                </Text>
                <GoogleLoginButton></GoogleLoginButton>
              </Flex>

              <Flex mt={4} align={"center"} flexDirection={"row"}>
                <Text color={"gray"} fontSize={14} fontWeight={400} mr={2}>
                  Already have an account?
                </Text>
                <Text
                  fontSize={14}
                  fontWeight="bold"
                  cursor="pointer"
                  textDecoration="underline"
                  color={"gray.700"}
                  _hover={{ textDecoration: "underline" }}
                  onClick={() => navigate("/signin")}
                >
                  Sign in
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      {errorSignup && (
        <Box mt={4} bg="red.50" p={3} borderRadius="md" color="red.600">
          {errorSignup}
        </Box>
      )}
      <FooterJson />
      <SigninFooter />
    </Box>
  );
}

export default RegisterPage;
