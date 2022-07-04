import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { IProperty } from "typings";

type KeyDetailsProps = {
  listing: IProperty;
};

const KeyDetails = ({ listing }: KeyDetailsProps) => {
  const details = [
    { title: "Days on market", body: "7 days ago", icon: "" },
    { title: "Estimated Payment", body: "$451", icon: "" },
    {
      title: "Property Type",
      body: listing?.roomType?.name || "Studio",
      icon: "",
    },
    { title: "Number of bathrooms", body: 3, icon: "" },
    { title: "Number of bedrooms", body: 6, icon: "" },
    { title: "Stay Period", body: "Per night", icon: "" },
  ];

  return (
    <Flex
      direction="column"
      borderRadius={10}
      borderWidth="thin"
      borderColor="rgba(69, 77, 102, 0.2)"
      width="full"
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
