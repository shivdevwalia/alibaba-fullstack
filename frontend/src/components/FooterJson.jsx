// import React, { useEffect, useState } from "react";

// function FooterJson() {
//   const [footerLinks, setFooterLinks] = useState([]);

//   useEffect(() => {
//     fetch("/footer.json") // Public folder, no need for full path
//       .then((res) => res.json())
//       .then((data) => setFooterLinks(data))
//       .catch((err) => console.error("Failed to load footer links:", err));
//   }, []);
//   return (
//     <footer style={{ padding: "2rem", backgroundColor: "white" }}>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
//         {footerLinks.map((section) => (
//           <div key={section.section}>
//             <h4 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
//               {section.section}
//             </h4>
//             <ul style={{ listStyle: "none", padding: 0 }}>
//               {section.links.map((link, index) => (
//                 <li
//                   key={index}
//                   style={{ marginBottom: "0.25rem", color: "#555" }}
//                 >
//                   {link}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </footer>
//   );
// }

// export default FooterJson;
import React, { useEffect, useState } from "react";
import { Box, Flex, Text, UnorderedList, ListItem } from "@chakra-ui/react";

function FooterJson() {
  const [footerLinks, setFooterLinks] = useState([]);

  useEffect(() => {
    fetch("/footer.json")
      .then((res) => res.json())
      .then((data) => setFooterLinks(data))
      .catch((err) => console.error("Failed to load footer links:", err));
  }, []);

  return (
    <Box py={6} px={{ base: 4, md: 12 }} bg="white">
      <Flex wrap="wrap" gap={10}>
        {footerLinks.map((section) => (
          <Box key={section.section} minW="150px">
            <Text fontWeight="bold" mb={2}>
              {section.section}
            </Text>
            <UnorderedList styleType="none" m={0} spacing={1}>
              {section.links.map((link, idx) => (
                <ListItem key={idx} color="gray.600">
                  {link}
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default FooterJson;
