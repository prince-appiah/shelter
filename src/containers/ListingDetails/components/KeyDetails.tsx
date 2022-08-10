import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { calculateMomentAgo, capitalizeFirstLetter } from "shared/strings";
import { IProperty } from "typings";

type KeyDetailsProps = {
  listing: IProperty;
};

const KeyDetails = ({ listing }: KeyDetailsProps) => {
  const details = [
    {
      title: "Days on market",
      body: calculateMomentAgo(listing?.createdAt),
      icon: "",
    },
    { title: "Estimated Payment", body: `$ ${listing?.price}`, icon: "" },
    {
      title: "Property Type",
      body: listing?.roomType?.name,
      icon: "",
    },
    { title: "Number of bathrooms", body: listing?.numOfBathrooms, icon: "" },
    { title: "Number of bedrooms", body: listing?.numOfBedrooms, icon: "" },
    {
      title: "Stay Period",
      body: capitalizeFirstLetter(listing?.stayPeriod),
      icon: "",
    },
  ];

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
        Key Details
      </Text>
      <SimpleGrid spacing={4} columns={{ base: 2, xl: 3 }}>
        {details.map((item, idx) => (
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
      minWidth={178}
      borderRadius={6}
      borderWidth="thin"
      borderColor="rgba(69, 77, 102, 0.2)"
      p={3}
    >
      <Text fontSize={14} color="gray">
        {item?.title}
      </Text>
      <Text fontWeight={600}>{item?.body}</Text>
    </Flex>
  );
};

export default KeyDetails;
