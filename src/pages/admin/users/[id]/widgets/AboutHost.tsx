import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Button from "components/Button";
import React from "react";
import { AiOutlineLink, AiOutlineMail } from "react-icons/ai";

type Props = {};

const AboutHost = (props: Props) => {
  return (
    <>
      <Flex justify="space-between" align="start">
        <HStack align="center">
          <Image
            src="https://res.cloudinary.com/ddnozuc0s/image/upload/v1644180173/sample.jpg"
            width={20}
            height={20}
            objectFit="cover"
            rounded="lg"
          />
          <Flex direction="column">
            <Text fontWeight={600} mb={2}>
              Dynamic Properties Ltd
            </Text>
            <Text color="gray" fontSize={14}>
              1278 Hayes Avenue, SHY 892
            </Text>
            <Flex align="center" cursor="pointer" _hover={{ color: "blue" }}>
              <Icon as={AiOutlineLink} mr={1} fontSize={14} />
              <Text fontSize={12} fontWeight={500} color="blue">
                dynamicproperties.com
              </Text>
            </Flex>
          </Flex>
        </HStack>

        <HStack align="center">
          <Button variant="outline" leftIcon={<AiOutlineMail />}>
            Email
          </Button>
          <Button>Call Us</Button>
        </HStack>
      </Flex>

      {/* number of properties and bookings  */}
      <Flex bg="gray.100" p={4} mt={4} rounded="lg" justify="space-around">
        <Box mx={3}>
          <Text fontWeight={600}>12</Text>
          <Text fontSize={13} color="gray">
            Properties listed
          </Text>
        </Box>
        <Divider orientation="vertical" />
        <Box mx={3}>
          <Text fontWeight={600}>34</Text>
          <Text fontSize={13} color="gray">
            Approved listings
          </Text>
        </Box>
        <Divider orientation="vertical" />
        <Box mx={3}>
          <Text fontWeight={600}>34</Text>
          <Text fontSize={13} color="gray">
            Tenant bookings
          </Text>
        </Box>
        <Divider orientation="vertical" />
        <Box mx={3}>
          <Text fontWeight={600}>34</Text>
          <Text fontSize={13} color="gray">
            Approved bookings
          </Text>
        </Box>
      </Flex>
      {/* about  */}
      <VStack align="start" mt={6}>
        <Text fontWeight={600}>About us</Text>
        <Text color="gray" fontSize={14}>
          With a shared vision for excellence, the close-knit team at Shelter
          has worked together for almost 3 years. Young, dynamic and style
          savvy, theirs is a philosophy based on superior client-focused service
          and premium results
        </Text>
      </VStack>
    </>
  );
};

export default AboutHost;
