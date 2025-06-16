import React, { useState } from "react";
import { Box, Flex, Text, VStack, Image } from "@chakra-ui/react";

// Step data
const steps = [
  {
    title: "Search for matches",
    description:
      "Search and filter from millions of product and supplier offerings to find the matching ones for your business.",
    image:
      "https://s.alicdn.com/@img/imgextra/i1/O1CN01KrWFW11fg52xUQzdc_!!6000000004035-0-tps-1380-1060.jpg_q60.jpg",
  },
  {
    title: "Identify the right one",
    description:
      "Evaluate product quality and supplier capabilities easily and efficiently through verified inspections and digital sourcing tools.",
    image:
      "https://s.alicdn.com/@img/imgextra/i1/O1CN01HrdHbz2511UJNFOxq_!!6000000007465-2-tps-1380-1060.png_q60.jpg",
  },
  {
    title: "Pay with confidence",
    description:
      "Pay for your order in over 20 currencies via 20+ secure payment methods, including flexible payment terms.",
    image:
      "https://s.alicdn.com/@img/imgextra/i1/O1CN01KrWFW11fg52xUQzdc_!!6000000004035-0-tps-1380-1060.jpg_q60.jpg",
  },
  {
    title: "Fulfill with transparency",
    description:
      "Get your logistics needs fulfilled with customized solutions at the Alibaba.com Logistics Marketplace, with real-time tracking for 26,000+ routes across 220 countries and regions, all powered by Alibaba.com Logistics.",
    image:
      "https://s.alicdn.com/@img/imgextra/i1/O1CN01HrdHbz2511UJNFOxq_!!6000000007465-2-tps-1380-1060.png_q60.jpg",
  },
  {
    title: "Manage with ease",
    description:
      "Check order status, manage suppliers, track payments and shipments, and contact after-sales support all via My Alibaba.",
    image:
      "https://s.alicdn.com/@img/imgextra/i1/O1CN01KrWFW11fg52xUQzdc_!!6000000004035-0-tps-1380-1060.jpg_q60.jpg",
  },
];

const DynamicScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Flex
      p={{ base: 10, md: 10 }}
      gap={10}
      flexDir={{ base: "column", md: "row" }}
      align={{ base: "center", md: "flex-start" }}
      justify="center"
    >
      {/* Step List */}
      <VStack align="start" spacing={8}>
        {steps.map((step, index) => (
          <Box
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            cursor="pointer"
          >
            <Text
              fontWeight={activeIndex === index ? "bold" : "semibold"}
              fontSize="xl"
              color={activeIndex === index ? "orange.500" : "gray.700"}
            >
              {step.title}
            </Text>
            {activeIndex === index && (
              <Text fontSize="sm" color="gray.500" mt={1} maxWidth={"500px"}>
                {step.description}
              </Text>
            )}
          </Box>
        ))}
      </VStack>

      {/* Step Image */}
      <Box flex="1" maxW="500px">
        <Image
          key={activeIndex}
          src={steps[activeIndex].image}
          alt={steps[activeIndex].title}
          borderRadius="lg"
          boxShadow="xl"
          w="100%"
          h="auto"
        />
      </Box>
    </Flex>
  );
};

export default DynamicScroll;
