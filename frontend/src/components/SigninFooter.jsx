// import React from "react";
// import { Box, Flex, Text, HStack, IconButton, VStack } from "@chakra-ui/react";
// import {
//   FaFacebook,
//   FaLinkedin,
//   FaTwitter,
//   FaInstagram,
//   FaYoutube,
//   FaTiktok,
// } from "react-icons/fa";

// function SigninFooter() {
//   return (
//     <Box bg="white" py={{ base: 4, md: 10 }} px={4}>
//       <Flex flexDirection={"row"} gap={255} wrap={"wrap"}>
//         <HStack justify="center" spacing={6} mb={{ base: 0, md: 6 }}>
//           <IconButton
//             icon={<FaFacebook />}
//             aria-label="Facebook"
//             variant={"ghost"}
//           />
//           <IconButton
//             icon={<FaLinkedin />}
//             aria-label="LinkedIn"
//             variant={"ghost"}
//           />
//           <IconButton
//             icon={<FaTwitter />}
//             aria-label="Twitter"
//             variant={"ghost"}
//           />
//           <IconButton
//             icon={<FaInstagram />}
//             aria-label="Instagram"
//             variant={"ghost"}
//           />
//           <IconButton
//             icon={<FaYoutube />}
//             aria-label="YouTube"
//             variant={"ghost"}
//           />
//           <IconButton
//             icon={<FaTiktok />}
//             aria-label="TikTok"
//             variant={"ghost"}
//           />
//         </HStack>
//         <Flex align="center" flexWrap="wrap" gap={2}>
//           <Text fontSize="14px">
//             Trade on the go with the{" "}
//             <Text
//               as="span"
//               fontWeight="bold"
//               color="black"
//               textDecoration="underline"
//             >
//               Alibaba.com app
//             </Text>
//           </Text>

//           <Flex
//             bg="black"
//             color="white"
//             borderRadius="md"
//             align="center"
//             justify="center"
//             height="32px"
//             px={3}
//             fontSize="14px"
//             fontWeight="medium"
//             cursor="pointer"
//           >
//             App Store
//           </Flex>

//           <Flex
//             bg="black"
//             color="white"
//             borderRadius="md"
//             align="center"
//             justify="center"
//             height="32px"
//             px={4}
//             fontSize="14px"
//             fontWeight="medium"
//             cursor="pointer"
//           >
//             Google Play
//           </Flex>
//         </Flex>
//       </Flex>
//       {/* App Section */}
//     </Box>
//   );
// }

// export default SigninFooter;

import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  HStack,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

function SigninFooter() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="white" py={{ base: 4, md: 8 }} px={{ base: 4, md: 12 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        gap={6}
        wrap="wrap"
      >
        <HStack spacing={4} justify={{ base: "center", md: "start" }}>
          <IconButton
            icon={<FaFacebook />}
            aria-label="Facebook"
            variant="ghost"
          />
          <IconButton
            icon={<FaLinkedin />}
            aria-label="LinkedIn"
            variant="ghost"
          />
          <IconButton
            icon={<FaTwitter />}
            aria-label="Twitter"
            variant="ghost"
          />
          <IconButton
            icon={<FaInstagram />}
            aria-label="Instagram"
            variant="ghost"
          />
          <IconButton
            icon={<FaYoutube />}
            aria-label="YouTube"
            variant="ghost"
          />
          <IconButton icon={<FaTiktok />} aria-label="TikTok" variant="ghost" />
        </HStack>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={3}
          align="center"
          textAlign={{ base: "center", md: "left" }}
        >
          <Text fontSize="sm">
            Trade on the go with the{" "}
            <Text
              as="span"
              fontWeight="bold"
              color="black"
              textDecoration="underline"
            >
              Alibaba.com app
            </Text>
          </Text>
          <Flex flexDirection={"row"} gap={2}>
            <Flex
              bg="black"
              color="white"
              borderRadius="md"
              align="center"
              justify="center"
              height="32px"
              px={3}
              fontSize="sm"
              fontWeight="medium"
              cursor="pointer"
            >
              App Store
            </Flex>

            <Flex
              bg="black"
              color="white"
              borderRadius="md"
              align="center"
              justify="center"
              height="32px"
              px={4}
              fontSize="sm"
              fontWeight="medium"
              cursor="pointer"
            >
              Google Play
            </Flex>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}

export default SigninFooter;
