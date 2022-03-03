import { Box, Heading } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Box
      bgColor="brand.primary"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
    >
      <Heading fontWeight={600}>Page Not Found</Heading>
    </Box>
  );
};

export default NotFound;
