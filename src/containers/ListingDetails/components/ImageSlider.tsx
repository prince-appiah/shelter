import { Flex, HStack, Image } from "@chakra-ui/react";
import { IProperty } from "typings";

type ImageSliderProps = {
  listing: IProperty;
};

const ImageSlider = ({ listing }: ImageSliderProps) => {
  return (
    <Flex
      direction="column"
      //   borderRadius={6}
      //   borderWidth="thin"
      //   borderColor="rgba(69, 77, 102, 0.2)"
      width="full"
      mb={6}
    >
      <Image
        src={listing?.images[0]}
        rounded="2xl"
        height={480}
        width="full"
        mb={4}
      />
      <HStack spacing={3}>
        <Image src={listing?.images[1]} rounded="xl" height={100} width={128} />
        <Image src={listing?.images[2]} rounded="xl" height={100} width={128} />
        <Image src="" rounded="xl" height={100} width={128} />
      </HStack>
    </Flex>
  );
};

export default ImageSlider;
