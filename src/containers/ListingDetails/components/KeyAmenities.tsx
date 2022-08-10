import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { IProperty } from "typings";

type KeyAmenitiesProps = {
  listing: IProperty;
};

const KeyAmenities = ({ listing }: KeyAmenitiesProps) => {
  return (
    <Flex
      direction="column"
      borderRadius={10}
      borderWidth="thin"
      borderColor="rgba(69, 77, 102, 0.2)"
      width="full"
      bg="white"
      py={8}
      mb={6}
      px={6}
    >
      <Text fontSize={24} fontWeight={600} mb={4}>
        Amenities
      </Text>
      <SimpleGrid spacing={4} columns={{ base: 2, xl: 4 }}>
        {listing?.amenities?.map((item, idx) => (
          <KeyDetailItem key={idx} item={item} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

const KeyDetailItem = ({ item }) => {
  return (
    <Flex
      direction="column"
      borderRadius={6}
      borderWidth="thin"
      borderColor="rgba(69, 77, 102, 0.2)"
      p={3}
    >
      <Text fontSize={14} color="gray">
        {item?.name}
      </Text>
    </Flex>
  );
};

export default KeyAmenities;
