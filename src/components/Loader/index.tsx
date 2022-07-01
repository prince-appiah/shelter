import { Box, Flex, Spinner, Text } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Flex justify="center" align="center" height="100vh">
      <Box display="flex" alignItems="center">
        <Spinner size="lg" color="brand.primary" />
        <Text pl={4} fontWeight={400}>
          Hold tight -- just getting this page ready
        </Text>
      </Box>
    </Flex>
  );
};

export default Loader;
