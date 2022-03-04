import { Box, Text } from "@chakra-ui/react";

const DashboardCard = () => {
  return (
    <Box
      sx={{
        borderRadius: 6,
        padding: 3,
        borderWidth: "0.02em",
        // borderColor: "gray.400",
        width: "auto",
      }}
    >
      <Box
        sx={{ width: 12, height: 12, borderRadius: 100, bgColor: "gray.500" }}
      ></Box>
      <Text py={1} color="gray.600">
        Registered Users
      </Text>
      <Text fontSize={24} fontWeight="semibold" color="brand.primary">
        235
      </Text>
    </Box>
  );
};

export default DashboardCard;
