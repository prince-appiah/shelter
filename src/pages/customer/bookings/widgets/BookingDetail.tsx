import { Box, Flex, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { MdLocationCity } from "react-icons/md";
import { IBooking } from "typings";

type Props = {
  booking: IBooking;
};

const BookingDetail = ({ booking }: Props) => {
  return (
    <Flex direction="column" p={8}>
      <HStack spacing={5}>
        <Image
          src={booking.property.images[0]["url"]}
          rounded="lg"
          objectFit="cover"
          width={24}
          height={24}
          loading="lazy"
        />

        <VStack align="flex-start">
          <Box>
            <Text fontWeight={600} fontSize={20}>
              {booking.property.name}
            </Text>

            <Text color="brand.primary">${booking.property.price}</Text>
          </Box>
          <Flex align="center">
            <Icon as={MdLocationCity} color="gray" mr={2} />
            <Text color="gray">{booking.property.location}</Text>
          </Flex>
        </VStack>
      </HStack>

      <VStack>{booking.property?.owner?.lastname}</VStack>
    </Flex>
  );
};

export default BookingDetail;
