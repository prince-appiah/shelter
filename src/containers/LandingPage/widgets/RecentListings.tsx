import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { getListingDetailsRoute } from "config/constants/routes";
import { useNavigate } from "react-router-dom";
import { IProperty } from "typings";

const RecentListings = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Box py={6}>
      <Heading fontWeight="semibold" fontSize={{ base: 22, md: 24 }} mb={6}>
        Recent Listings
      </Heading>
      {/* Grid */}

      {data?.length > 0 ? (
        <Grid
          templateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
          gap={4}
        >
          {data?.map((item: IProperty) => (
            <GridItem
              onClick={() => navigate(getListingDetailsRoute(item?._id))}
              sx={{ cursor: "pointer" }}
              key={item?._id}
            >
              <Image
                src={item?.images[0]}
                alt={item?.name}
                height={200}
                width={330}
                objectFit="cover"
                loading="lazy"
                rounded="xl"
              />
              {/* </Box> */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                px={1}
                py={2}
              >
                <Box maxWidth={150} overflow="hidden" flexGrow={1}>
                  <Text fontWeight="semibold" isTruncated>
                    {item?.name}
                  </Text>
                  <Text fontWeight="normal" color="gray.500" isTruncated>
                    {item?.location}
                  </Text>
                </Box>

                {/* Price */}
                <Text color="brand.primary" fontWeight="medium">
                  ${item?.price}/{item?.stayPeriod}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Center
          borderStyle="solid"
          borderWidth={1}
          borderColor="gray.100"
          rounded="md"
          sx={{
            height: 150,
            width: "full",
            mx: "auto",
          }}
        >
          <Text fontWeight={500} color="GrayText" fontSize={18}>
            No listings found
          </Text>
        </Center>
      )}
    </Box>
  );
};

export default RecentListings;
