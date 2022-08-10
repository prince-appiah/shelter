import { Flex, Text } from "@chakra-ui/react";
import { IProperty } from "typings";

type DescriptionProps = {
  listing: IProperty;
};

const Description = ({ listing }: DescriptionProps) => {
  return (
    <Flex
      direction="column"
      borderRadius={10}
      borderWidth="thin"
      borderColor="rgba(69, 77, 102, 0.2)"
      width="full"
      bg="white"
      py={8}
      px={6}
      mb={6}
    >
      <Text fontSize={24} fontWeight={600} mb={4}>
        Description
      </Text>
      <Text color="gray" noOfLines={6} mb={6}>
        {listing?.description}{" "}
      </Text>

      <Text fontWeight={600} color="gray" fontSize={14}>
        Ref: {listing?.referenceNo}
      </Text>
    </Flex>
  );
};

export default Description;
