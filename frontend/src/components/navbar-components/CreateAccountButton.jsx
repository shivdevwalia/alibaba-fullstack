import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function CreateAccountButton({ isLoggedIn }) {
  const navigate = useNavigate();

  if (isLoggedIn) return null;

  return (
    <Button
      px={{ base: 3, md: 6 }}
      py={2}
      borderRadius="full"
      bg="#f60"
      color="white"
      fontWeight={"semibold"}
      fontSize={{ base: "sm", md: "md" }}
      display={{ base: "none", sm: "flex" }}
      _hover={{
        bg: "#cc4400",
        borderColor: "#f60",
      }}
      onClick={() => navigate("/signup")}
    >
      Create account
    </Button>
  );
}

export default CreateAccountButton;
