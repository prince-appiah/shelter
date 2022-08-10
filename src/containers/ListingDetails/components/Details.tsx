import { Flex } from "@chakra-ui/react";
import { IProperty } from "typings";
import Description from "./Description";
import ImageSlider from "./ImageSlider";
import KeyAmenities from "./KeyAmenities";
import KeyDetails from "./KeyDetails";

type DetailsProps = {
  listing: IProperty;
};

const Details = ({ listing }: DetailsProps) => {
  return (
    <Flex direction="column" width={{ base: "full", lg: "55%" }}>
      {/* Images carousel */}
      <ImageSlider listing={listing} />
      {/* Key Details */}
      <KeyDetails listing={listing} />
      {/* Amenities */}
      <KeyAmenities listing={listing} />
      {/* Description */}
      <Description listing={listing} />
    </Flex>
  );
};

export default Details;
