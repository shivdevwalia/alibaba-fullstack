import React from "react";
import AdminNavbar from "../components/adminComponents/AdminNavbar";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function EditPages() {
  const navigate = useNavigate();
  return (
    <>
      <AdminNavbar></AdminNavbar>
      <Flex m={20}>
        <Box
          p={6}
          bg="white"
          borderRadius="2xl"
          boxShadow="xl"
          _hover={{
            boxShadow: "2xl",
            transform: "translateY(-2px)",
            transition: "0.2s",
          }}
          cursor="pointer"
          onClick={() => navigate("/admin-aboutus")}
        >
          <Text fontWeight={"bold"}>About Us</Text>
        </Box>
      </Flex>
    </>
  );
}

export default EditPages;
