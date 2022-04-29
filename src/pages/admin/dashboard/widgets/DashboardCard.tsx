import { Box, Text } from "@chakra-ui/react";

const DashboardCard = () => {
  return (
    <Box
      cursor="pointer"
      sx={{
        borderRadius: 6,
        py: 3,
        px: 8,
        borderWidth: "0.02em",
        width: "auto",
        bgColor: "white",
        _hover: {
          bgColor: "gray.50",
        },
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
