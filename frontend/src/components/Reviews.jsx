import React, { useState } from "react";
import { Box, Flex, Text, Image, IconButton, VStack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ron Williams and Tonja Williams",
      title: "Founder and CEO (respectively) of Ron Williams Fitness",
      quote:
        "Alibaba.com is a game changer for small businesses like us. We were able to find the exact product we needed and I don’t think we could have sourced anything without Alibaba.com.",
      image:
        "https://s.alicdn.com/@img/imgextra/i4/O1CN01cBGvqy1R9eJnhkpv5_!!6000000002069-2-tps-352-352.png_350x350.jpg", // use the actual public path or import
    },
    {
      name: "Eva Jane",
      title: "Founder of Eva Jane Beauty",
      quote:
        "As an entrepreneur who is deeply involved in the Beauty industry, I have been very devoted to creating my original products. Alibaba.com has been my trusted partner in this process.",
      image:
        "https://s.alicdn.com/@img/imgextra/i4/O1CN01XrvnBG1YDUxJ0l5Bh_!!6000000003025-2-tps-352-352.png_350x350.jpg",
    },
    {
      name: "Dr. Sayed Ibrahim",
      title: "Founder of SprinJene",
      quote:
        "Once I discovered Alibaba.com, I was amazed at how many options I had with suppliers from all over the world.",
      image:
        "https://s.alicdn.com/@img/imgextra/i3/O1CN01wllRR11a9Uiq6syoP_!!6000000003287-2-tps-352-352.png_350x350.jpg",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const { name, title, quote, image } = testimonials[currentIndex];

  return (
    <Flex
    my={8} 
      align="center"
      justify="center"
      p={10}
      bg="white"
      direction={{ base: "column", md: "row" }}
      gap={10}
      borderRadius={"2xl"}
      minHeight={"300px"}
    >
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={handlePrev}
        aria-label="Previous"
        variant="ghost"
        fontSize="2xl"
      />

      <Flex direction={{ base: "column", md: "row" }} align="center" maxW="4xl">
        <Image
          src={image}
          alt={name}
          borderRadius="full"
          boxSize="150px"
          objectFit="cover"
          mr={{ md: 6 }}
        />
        <VStack align="start" spacing={3} maxW="lg">
          <Text fontSize="xl" fontWeight="bold">
            {name}
          </Text>
          <Text color="gray.500" fontSize="sm">
            {title}
          </Text>
          <Text fontSize="md" fontStyle="italic">
            “{quote}”
          </Text>
        </VStack>
      </Flex>

      <IconButton
        icon={<ChevronRightIcon />}
        onClick={handleNext}
        aria-label="Next"
        variant="ghost"
        fontSize="2xl"
      />
    </Flex>
  );
};

export default Reviews;
