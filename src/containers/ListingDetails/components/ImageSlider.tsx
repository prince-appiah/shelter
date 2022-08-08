import { Flex, HStack, Image } from "@chakra-ui/react";
import { IProperty } from "typings";

type ImageSliderProps = {
  listing: IProperty;
};

const ImageSlider = ({ listing }: ImageSliderProps) => {
  return (
    <Flex direction="column" width="full" mb={6}>
      <Image
        src={listing?.images[0]["url"]}
        rounded="2xl"
        height={480}
        cursor="pointer"
        width="full"
        objectFit="cover"
        mb={4}
      />
      <HStack spacing={3} overflowX="scroll">
        <Image
          src={listing?.images[1]["url"]}
          cursor="pointer"
          rounded="xl"
          height={100}
          width={128}
        />
        <Image
          src={listing?.images[1]["url"]}
          cursor="pointer"
          rounded="xl"
          height={100}
          width={128}
        />
        <Image
          src={listing?.images[1]["url"]}
          cursor="pointer"
          rounded="xl"
          height={100}
          width={128}
        />
        <Image
          src={listing?.images[1]["url"]}
          cursor="pointer"
          rounded="xl"
          height={100}
          width={128}
        />
        <Image
          src={listing?.images[1]["url"]}
          cursor="pointer"
          rounded="xl"
          height={100}
          width={128}
        />
        <Image
          src={listing?.images[1]["url"]}
          cursor="pointer"
          rounded="xl"
          height={100}
          width={128}
        />
      </HStack>
    </Flex>
  );
};

export default ImageSlider;
