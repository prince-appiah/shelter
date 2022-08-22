import {
  Divider,
  Flex,
  GridItem,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import Button from "components/Button";
import { getListingDetailsRoute } from "config/constants/routes";
import React from "react";
import { FaBath, FaBed, FaCalendar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { calculateMomentAgo } from "shared/strings";
import { IProperty } from "typings";

type Props = {
  property: IProperty;
};

const PropertyItem = ({ property }: Props) => {
  const navigate = useNavigate();

  return (
    <GridItem
      onClick={() => navigate(getListingDetailsRoute(property._id))}
      borderWidth={1}
      rounded="md"
      bg="white"
      px={3}
      py={4}
      sx={{
        cursor: "pointer",
        overflow: "hidden",
        _hover: { shadow: "sm" },
      }}
      key={property?._id}
    >
      <Flex direction="column">
        <Text fontSize={14} color="gray">
          {property?.roomType?.name}
        </Text>
        <Text fontSize={18} fontWeight={600} color="text.primary">
          {property?.name}
        </Text>
      </Flex>
      <Image
        src={property?.images[0]["url"]}
        alt={property?.name}
        height={160}
        width="full"
        mt={3}
        rounded="lg"
        objectFit="cover"
        loading="lazy"
      />

      <Text py={2} color="brand.primary" fontWeight={600}>
        ${property?.price}/{property?.stayPeriod}
      </Text>
      <Divider />
      <HStack align="center" spacing={4} py={2}>
        <Flex align="center">
          <Icon as={FaBath} mr={2} />
          <Text>{property?.numOfBathrooms}</Text>
        </Flex>
        <Text>•</Text>
        <Flex align="center">
          <Icon as={FaBed} mr={2} />
          <Text>{property?.numOfBedrooms}</Text>
        </Flex>
      </HStack>
      <Button isFullWidth variant="outline">
        View details
      </Button>
    </GridItem>
  );
};

export default PropertyItem;
