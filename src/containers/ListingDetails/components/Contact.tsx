import { Avatar, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Button from "components/Button";

const ListingContact = () => {
  return (
    <VStack align="start" mt={6}>
      {/* Avatar and name/role */}
      <Flex>
        <Avatar mr={4} />
        <Flex direction="column">
          <Text fontWeight={600}>John Snow</Text>
          <Text color="gray">Property Owner</Text>
        </Flex>
      </Flex>
      {/* divider */}
      <Divider my={4} />
      {/* flex with divider in the middle */}
      <HStack spacing={4} mx="auto" px={2}>
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
