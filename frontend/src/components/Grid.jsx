import React from "react";
import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";

function Grid() {
  const cardData = [
    {
      title: "Millions of business offerings",
      description:
        "Explore products and suppliers for your business from millions of offerings worldwide.",
      icon: "https://s.alicdn.com/@img/imgextra/i1/O1CN01tbfptg1Fv1tsyww7q_!!6000000000548-2-tps-96-96.png",
    },
    {
      title: "Assured quality and transaction",
      description:
        "Ensure production quality from verified suppliers, with your orders protected from payment to delivery.",
      icon: "https://s.alicdn.com/@img/imgextra/i2/O1CN01VxEwc91YXeNmcyV6j_!!6000000003069-2-tps-96-96.png",
    },
    {
      title: "One-stop trading solution",
      description:
        "Order seamlessly from product/supplier search to order management, payment, and fulfillment.",
      icon: "https://s.alicdn.com/@img/imgextra/i2/O1CN01WxanpW1Hv9ESW9cfs_!!6000000000819-2-tps-96-96.png",
    },
    {
      title: "Tailored trading experience",
      description:
        "Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way.",
      icon: "https://s.alicdn.com/@img/imgextra/i4/O1CN010nrLfB25RaSKdVtHu_!!6000000007523-2-tps-96-96.png",
    },
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
      {cardData.map((card, index) => (
        <Box
          key={index}
          bg="hsla(0,0%,100%,.03)"
          borderRadius="xl"
          p={6}
          height="340px"
        >
          <Box
            bg="hsla(0,0%,100%,.08)"
            borderRadius="30px"
            height="60px"
            width="60px"
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={6}
          >
            <Img src={card.icon} height="45px" />
          </Box>
          <Text fontWeight="500" color="white" fontSize="25px" mb={3}>
            {card.title}
          </Text>
          <Text color="white" fontSize="md">
            {card.description}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default Grid;
