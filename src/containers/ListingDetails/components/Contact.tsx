import { Avatar, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Button from "components/Button";
import { IProperty } from "typings";

type IListingContactProps = {
  listing: IProperty;
};

const ListingContact = ({ listing }: IListingContactProps) => {
  return (
    <VStack align="start" mt={6} width="full">
      {/* Avatar and name/role */}
      <Flex width="full">
        <Avatar mr={4} />
        <Flex direction="column">
          <Text fontWeight={600}>
            {listing?.owner?.firstname} {listing?.owner?.lastname}
          </Text>
          <Text color="gray">Property Owner</Text>
        </Flex>
      </Flex>
      {/* divider */}
      <Divider my={4} />
      {/* flex with divider in the middle */}
      <HStack spacing={4} mx="auto" px={2} width="full">
        <Button variant="ghost" isFullWidth>
          Ask a question
        </Button>
        <Divider mx={4} orientation="vertical" />
        <Button variant="ghost" isFullWidth>
          Call Owner
        </Button>
      </HStack>
    </VStack>
  );
};

export default ListingContact;
