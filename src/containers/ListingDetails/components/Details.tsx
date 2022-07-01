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
    <Flex
      direction="column"
      //   borderRadius={6}
      //   borderWidth="thin"
      //   borderColor="rgba(69, 77, 102, 0.2)"
      px={6}
      width={{ md: "60%" }}
    >
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
