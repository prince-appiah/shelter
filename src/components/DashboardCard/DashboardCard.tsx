import { Box, Text } from "@chakra-ui/react";
import LoadingSkeleton from "pages/admin/dashboard/widgets/LoadingSkeleton";

export interface DashboardCardProps {
  loading: boolean;
  data: { title: string; value: number };
}

const DashboardCard = ({ loading, data }: DashboardCardProps) => {
  return (
    <LoadingSkeleton isLoading={loading}>
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
          {data?.title}
        </Text>
        <Text fontSize={24} fontWeight="semibold" color="brand.primary">
          {data?.value}
        </Text>
      </Box>
    </LoadingSkeleton>
  );
};

export default DashboardCard;
