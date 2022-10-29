import { Flex, Heading, Text } from "@chakra-ui/layout";

interface Props {}

const channels = [{ name: "Facebook" }];

const SocialProfiles = (props: Props) => {
  return (
    <Flex direction="column">
      <Heading fontSize={18}>Social profiles</Heading>
      <Text color="gray" fontSize={14}>
        Connect with other channels for better exposure
      </Text>

      <Flex direction="column" bg="white" p={5} mt={6} rounded="lg">
        <Text fontSize={14} fontWeight={600}>
          Channels
        </Text>
      </Flex>
    </Flex>
  );
};

export default SocialProfiles;
