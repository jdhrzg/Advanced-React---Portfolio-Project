import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) =>
{
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
      <VStack
        spacing={4}
        background="white"
        borderRadius="lg"
        color="black"
      >
        <Image src={imageSrc} alt={title} borderRadius="lg" />
        <Box padding="10px 15px 15px">
          <VStack spacing={4}>
            <Heading width="100%" size="sm">{title}</Heading>
            <Text color="grey">{description}</Text>
            <HStack width="100%">
              <Text>See more</Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </>
  );
};

export default Card;
