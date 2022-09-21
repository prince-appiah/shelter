import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const HostProperties = (props: Props) => {
  return (
    <Flex direction="column" mt={12}>
      <Text fontWeight={700}>Properties</Text>
      {/* dropdown item for filter */}
      {/* properties */}
      <Grid gridGap={3} mt={8} templateColumns="repeat(3, 1fr)">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </Grid>
    </Flex>
  );
};

const PropertyCard = () => {
  return (
    <GridItem
      rounded="lg"
      overflow="hidden"
      borderWidth="thin"
      bg="white"
      borderColor="gray.100"
    >
      {/* <Text
        position="relative"
        roundedTopLeft="lg"
        roundedBottomLeft="lg"
        top={3}
        pl={4}
        py={1}
        // right={-48}
        right={0}
        bottom={0}
        left={0}
        zindex={999}
        bg="blue.200"
      >
        Occupied
      </Text> */}
      <Image
        src="https://res.cloudinary.com/ddnozuc0s/image/upload/v1644180173/sample.jpg"
        height={48}
        width="full"
        objectFit="cover"
      />
      <VStack spacing={0} align="start" px={4} py={3}>
        <Text fontWeight={600} color="brand.primary">
          $65,000/per month
        </Text>
        <Text>Property Name goes here</Text>
        <Text color="gray">12 Aboude streeet</Text>
        <Text fontSize={13} color="gray">
          3 bed • 2 bathrooms
        </Text>
      </VStack>
    </GridItem>
  );
};

export default HostProperties;
