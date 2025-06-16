// components/OrderComponents.jsx

import { Flex, Box, Text, Icon, Circle } from "@chakra-ui/react";
import {
  AiOutlineCheckCircle,
  AiOutlineDollarCircle,
  AiOutlineCar,
  AiOutlineTool,
  AiOutlineArrowRight,
} from "react-icons/ai";

const features = [
  {
    icon: AiOutlineCheckCircle,
    label: "Safe & easy payments",
  },
  {
    icon: AiOutlineDollarCircle,
    label: "Money-back policy",
  },
  {
    icon: AiOutlineCar,
    label: "Shipping & logistics services",
  },
  {
    icon: AiOutlineTool,
    label: "After-sales protections",
  },
];

const FeatureCard = ({ icon, label }) => (
  <Flex
  mt={4}
    bg="gray.50"
    borderRadius="2xl"
    p={6}
    align="center"
    justify="space-between"
    minW="300px"
    flex="1"
    boxShadow="sm"
  >
    <Flex align="center" gap={4}>
      <Circle size="50px" bg="yellow.100">
        <Icon as={icon} boxSize={6} color="black" />
      </Circle>
      <Text fontWeight="semibold" fontSize="md">
        {label}
      </Text>
    </Flex>
    <Icon as={AiOutlineArrowRight} boxSize={5} />
  </Flex>
);

const OrderComponents = () => {
  return (
    <Flex direction="column" gap={6}>
      <Flex direction="row" gap={6}>
        <FeatureCard {...features[0]} />
        <FeatureCard {...features[1]} />
      </Flex>
      <Flex direction="row" gap={6}>
        <FeatureCard {...features[2]} />
        <FeatureCard {...features[3]} />
      </Flex>
    </Flex>
  );
};

export default OrderComponents;
