import { Divider, Flex, Text, VStack } from "@chakra-ui/react";
import Button from "components/Button";
import { IProperty } from "typings";
import ListingContact from "./Contact";

type SummaryProps = {
  listing: IProperty;
};

const Summary = ({ listing }: SummaryProps) => {
  return (
    <Flex
      direction="column"
      borderRadius={6}
      borderWidth="thin"
      borderColor="rgba(69, 77, 102, 0.2)"
      align="start"
      height="max-content"
      width={{ base: "full", lg: "max-content" }}
      p={6}
    >
      <VStack align="start" width="full" spacing={-1}>
        <Text fontWeight={700} fontSize={20}>
          {listing?.name}
        </Text>
        <Text color="gray">{listing?.location}</Text>
      </VStack>
      <Text py={2} fontWeight={600}>
        {listing?.numOfBedrooms} bedrooms • {listing?.numOfBathrooms} bathrooms
      </Text>
      <VStack align="start" width="full">
        <Text fontSize={14} color="gray">
          Listing Price
        </Text>
        <Text fontWeight={700} fontSize={22}>
          $ {listing?.price}
        </Text>
      </VStack>
      {/* Divider */}
      <Divider my={4} />
      <VStack align="start" width="full">
        <Text fontSize={14} fontWeight={600} color="gray">
          Tour this property - it's free, with no obligation
        </Text>
        <Button isFullWidth sx={{ fontSize: 14 }}>
          Schedule a Tour
        </Button>
      </VStack>
      {/* Property Owner */}
      <ListingContact listing={listing} />
    </Flex>
  );
};

export default Summary;
