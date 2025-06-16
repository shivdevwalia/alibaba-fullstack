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
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

import FooterJson from "../components/FooterJson";
import SigninFooter from "../components/SigninFooter";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../redux/actions";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadingChangePassword = useSelector(
    (state) => state.loadingChangePassword
  );
  const errorChangePassword = useSelector((state) => state.errorChangePassword);
  const isAuth = useSelector((state) => state.isAuth);
  const successChangePassword = useSelector(
    (state) => state.successChangePassword
  );

  // Redirect authenticated users to homepage
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  // Handle error visibility and auto-dismiss
  useEffect(() => {
    if (errorChangePassword) {
      setShowError(true);
      // Auto-dismiss after 5 seconds
      const timer = setTimeout(() => {
        setShowError(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errorChangePassword]);

  useEffect(() => {
    if (successChangePassword) {
      navigate("/signin");
    }
  }, [successChangePassword]);

  const handleSubmit = () => {
    let hasError = false;

    if (!email) {
      setEmailError("Enter your email");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Enter your new password");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (!newPassword) {
      setNewPasswordError("Confirm your password");
      hasError = true;
    } else if (newPassword !== password) {
      setNewPasswordError("Passwords must match");
      hasError = true; // Fixed: was missing this line
    } else {
      setNewPasswordError("");
    }

    if (!hasError) {
      const payload = { email, password, newPassword };
      dispatch(forgotPassword(payload));
    }
  }; // Fixed: added missing closing brace

  const handleCloseError = () => {
    setShowError(false);
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
                Reset your password
              </Heading>

              {/* Error Alert - Now positioned prominently within the form */}
              {errorChangePassword && showError && (
                <Alert status="error" borderRadius="md" mb={4}>
                  <AlertIcon />
                  <AlertDescription flex="1">
                    {errorChangePassword}
                  </AlertDescription>
                  <CloseButton
                    alignSelf="flex-start"
                    position="relative"
                    right={-1}
                    top={-1}
                    onClick={handleCloseError}
                  />
                </Alert>
              )}

              <FormControl isInvalid={emailError} mt={4}>
                <Input
                  type="email"
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
                  placeholder="New password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  borderRadius={7}
                />
                {passwordError && (
                  <FormErrorMessage>{passwordError}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={newPasswordError} mt={4}>
                <Input
                  type="password"
                  placeholder="Confirm new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  borderRadius={7}
                />
                {newPasswordError && (
                  <FormErrorMessage>{newPasswordError}</FormErrorMessage>
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
                isLoading={loadingChangePassword}
                loadingText="Updating..."
              >
                Reset Password
              </Button>

              <Flex mt={4} align={"center"} flexDirection={"row"}>
                <Text color={"gray"} fontSize={14} fontWeight={400} mr={2}>
                  Remember your password?
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

      <FooterJson />
      <SigninFooter />
    </Box>
  );
}

export default ForgotPasswordPage;
