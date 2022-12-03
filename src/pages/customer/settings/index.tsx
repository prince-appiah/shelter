import { Flex, Text } from "@chakra-ui/layout";
import { roles } from "config/constants/vars";
import { withProtected } from "shared/routes";

const CustomerSettings = () => {
  return (
    <Flex direction="column" my={6} px={{ base: 2 }}>
      <Text color="gray">Configurations and preferences</Text>
    </Flex>
  );
};

export default withProtected(CustomerSettings, [roles.customer]);
