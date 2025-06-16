// import React, { useState, useEffect } from "react";
// import { Box, Input } from "@chakra-ui/react";

// const RotatingPlaceholderInput = () => {
//   const placeholders = [
//     "What are you looking for?",
//     "Electronics",
//     "Sports equipment",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [value, setValue] = useState("");
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     if (value) return; // Don't animate when user is typing

//     const interval = setInterval(() => {
//       // Fade out current placeholder
//       setIsVisible(false);

//       // After fade out completes, change text and fade in
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
//         setIsVisible(true);
//       }, 300); // Wait for fade out to complete
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, [value, placeholders.length]);

//   // Reset visibility when user starts/stops typing
//   useEffect(() => {
//     if (value) {
//       setIsVisible(false);
//     } else {
//       setIsVisible(true);
//     }
//   }, [value]);

//   return (
//     <Box position="relative" flex="1">
//       <Input
//         flex="1"
//         border="none"
//         _focus={{ boxShadow: "none" }}
//         color="black"
//         bg="white"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="" // Remove default placeholder
//       />

//       {/* Custom animated placeholder */}
//       {!value && (
//         <Box
//           position="absolute"
//           top="50%"
//           left="16px"
//           transform="translateY(-50%)"
//           color="gray.600"
//           pointerEvents="none"
//           fontSize="md"
//           transition="opacity 0.3s ease-in-out"
//           opacity={isVisible ? 1 : 0}
//           whiteSpace="nowrap"
//         >
//           {placeholders[currentIndex]}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default RotatingPlaceholderInput;
import React, { useState, useEffect } from "react";
import { Box, Input } from "@chakra-ui/react";

const RotatingPlaceholderInput = ({ value, onChange, onKeyDown }) => {
  const placeholders = [
    "What are you looking for?",
    "Electronics",
    "Sports equipment",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (value) return; // Don't animate when user is typing

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [value]);

  useEffect(() => {
    if (value) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [value]);

  return (
    <Box position="relative" flex="1">
      <Input
        flex="1"
        border="none"
        _focus={{ boxShadow: "none" }}
        color="black"
        bg="white"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder=""
      />
      {!value && (
        <Box
          position="absolute"
          top="50%"
          left="16px"
          transform="translateY(-50%)"
          color="gray.600"
          pointerEvents="none"
          transition="opacity 0.3s ease-in-out"
          opacity={isVisible ? 1 : 0}
          whiteSpace="nowrap"
          fontSize={{ base: "11px", md: "md", lg: "lg" }}
        >
          {placeholders[currentIndex]}
        </Box>
      )}
    </Box>
  );
};

export default RotatingPlaceholderInput;
