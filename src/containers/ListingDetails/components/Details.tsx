import { Box, Flex } from "@chakra-ui/react";
import { IProperty } from "typings";
import Description from "./Description";
import ImageSlider from "./ImageSlider";
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
      {/* Description */}
      <Description listing={listing} />
    </Flex>
  );
};

export default Details;
