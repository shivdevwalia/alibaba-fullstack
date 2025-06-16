import React from "react";
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
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signout } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { USER_MENU_ITEMS } from "../../constants/navigationConstants";

function UserPopover({ isLoggedIn, username, firstLetter, isHovered }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const borderColorUser = isLoggedIn ? "white" : "transparent";

  const handleMenuClick = (path) => {
    if (isLoggedIn) {
      navigate(path);
    } else {
      navigate("/signin");
    }
  };

  const handleSignOut = () => {
    dispatch(signout());
    navigate("/");
  };

  return (
    <Popover trigger="hover" placement="bottom" closeOnBlur={true}>
      <PopoverTrigger>
        <IconButton
          icon={isLoggedIn ? <span>{firstLetter}</span> : <FaUser />}
          color={isHovered ? "black" : "white"}
          borderColor={borderColorUser}
          bg="transparent"
          _hover={{ border: "black" }}
          fontSize={{ base: "16px", md: "20px" }}
          size={{ base: "xs", md: "md" }}
          onClick={() => navigate("/signin")}
        />
      </PopoverTrigger>

      <PopoverContent
        width={{ base: "280px", md: "340px" }}
        maxH="100%"
        borderRadius="xl"
        boxShadow="lg"
        p={0}
        color="black"
      >
        <PopoverArrow />
        <PopoverHeader
          fontWeight={600}
          px={4}
          py={4}
          pb={2}
          pt={1}
          borderBottom="gray"
        >
          {isLoggedIn ? (
            <>
              Hi {username}
              <Button
                mt="4"
                width="100%"
                borderRadius="full"
                bg="#f60"
                color="white"
                fontWeight="bold"
                _hover={{ border: "#f60" }}
                onClick={handleSignOut}
              >
                Sign out
              </Button>
            </>
          ) : (
            <>
              Welcome to Alibaba
              <Button
                mt="4"
                width="100%"
                borderRadius="full"
                bg="#f60"
                color="white"
                fontWeight="bold"
                _hover={{ border: "#f60", bg: "#cc4400" }}
                onClick={() => navigate("/signin")}
              >
                Sign in
              </Button>
            </>
          )}
        </PopoverHeader>
        <Box px={4} pb={3}>
          <Divider borderColor="gray.300" />
        </Box>
        <PopoverBody p={0}>
          <Flex
            justify="left"
            align="left"
            fontSize="14"
            fontWeight="semibold"
            gap="1"
            flexDirection="column"
            p={0}
            width="100%"
          >
            {USER_MENU_ITEMS.map(({ label }) => (
              <Box
                key={label}
                w="100%"
                px={4}
                py={2}
                _hover={{
                  bg: "gray.100",
                  fontWeight: "bold",
                  color: "gray.800",
                  cursor: "pointer",
                }}
              >
                <Text>{label}</Text>
              </Box>
            ))}
          </Flex>
        </PopoverBody>
        <Box px={4} pb={3}>
          <Divider borderColor="gray.300" />
        </Box>
      </PopoverContent>
    </Popover>
  );
}

export default UserPopover;
