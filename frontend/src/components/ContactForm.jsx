import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { submitContact } from "../redux/actions"; // adjust path
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [captchaToken, setCaptchaToken] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      toast({
        title: "Captcha Required",
        description: "Please verify that you are not a robot.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      await dispatch(submitContact({ ...formData, token: captchaToken }));
      toast({
        title: "Message sent!",
        description: "We’ll get back to you soon.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
      setCaptchaToken(null);
    } catch (err) {
      toast({
        title: "Error",
        description:
          err?.response?.data?.message ||
          err.message ||
          "Something went wrong.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bgColor={"white"}>
      <Box
        maxW="600px"
        mx="auto"
        mt={10}
        p={6}
        border="1px solid #eee"
        borderRadius="md"
        boxShadow="sm"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Contact Us
        </Text>

        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                variant="filled"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                variant="filled"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                variant="filled"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                variant="filled"
                rows={5}
              />
            </FormControl>
            <ReCAPTCHA
              sitekey="6Ldo2F0rAAAAADUaSyZt4d6OVmqpwZ74sYEug8WH"
              onChange={handleCaptchaChange}
            ></ReCAPTCHA>

            <Button type="submit" colorScheme="orange" width="full">
              Send Message
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
