import { Flex, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { getAdminListingDetailsRoute } from "config/constants/routes";
import { randomizeNumber } from "shared/strings";
import { IProperty } from "typings";

type Props = {
  properties: IProperty[];
};

const HostProperties = ({ properties }: Props) => {
  return (
    <Flex direction="column" mt={12}>
      <Text fontWeight={700}>Properties</Text>
      {/* dropdown item for filter */}
      {/* properties */}
      <Grid
        gridGap={3}
        mt={8}
        templateColumns={properties.length >= 0 && { base: "repeat(3, 1fr)" }}
      >
        {properties?.length <= 0 ? (
          <Flex justify="center" align="center" width="full" height={48}>
            <Text color="gray">This host has no listed properties</Text>
          </Flex>
        ) : (
          properties?.map((item) => (
            <PropertyCard key={item._id} property={item} />
          ))
        )}
        {/* <PropertyCard /> 
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard /> */}
      </Grid>
    </Flex>
  );
};

const PropertyCard = ({ property }: { property: IProperty }) => {
  return (
    <GridItem
      rounded="lg"
      overflow="hidden"
      borderWidth="thin"
      bg="white"
      borderColor="gray.200"
      cursor="pointer"
      as="a"
      href={getAdminListingDetailsRoute(property._id)}
      target="_blank"
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
        src={randomizeNumber(property?.images).url}
        height={48}
        width="full"
        objectFit="cover"
      />
      <VStack spacing={0} align="start" px={4} py={3}>
        <Text fontWeight={600} color="brand.primary">
          ${property?.price}/per {property?.stayPeriod}
        </Text>
        <Text>{property?.name}</Text>
        <Text color="gray">{property?.location}</Text>
        <Text fontSize={13} color="gray">
          {property?.numOfBedrooms} bed(s) • {property?.numOfBathrooms}{" "}
          bathroom(s)
        </Text>
      </VStack>
    </GridItem>
  );
};

export default HostProperties;
