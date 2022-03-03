import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image, Text
} from "@chakra-ui/react";
import { RecentListing } from "..";

const RecentListings = ({ data }) => {
  return (
    <Box py={10} px={28}>
      <Heading fontWeight="semibold" fontSize={24} mb={6}>
        Recent Listings
      </Heading>
      {/* Grid */}
      <Grid templateColumns="repeat(4,1fr)" gap={4}>
        {data.length &&
          data.map((item: RecentListing) => (
            <GridItem key={item.id}>
              <Image
                src={item.image}
                alt={item.name}
                height={200}
                width={330}
                objectFit="cover"
                rounded="xl"
              />
              {/* </Box> */}
              <Box display="flex" alignItems="center" justifyContent='space-between' px={1} py={2}>
                <Box maxWidth={150} overflow='hidden' flexGrow={1}>
                  <Text fontWeight="semibold" isTruncated>
                    {item.name}
                  </Text>
                  <Text fontWeight="normal" color="gray.500" isTruncated>
                    {item.location}
                  </Text>
                </Box>

                {/* Price */}
                <Text color="brand.primary" fontWeight="medium">
                  ${item.price}/{item.stayPeriod}
                </Text>
              </Box>
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};

export default RecentListings;
