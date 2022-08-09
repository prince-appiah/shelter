import { Flex, HStack, Image } from "@chakra-ui/react";
import Listings from "containers/Listings";
import { useState } from "react";
import { IProperty } from "typings";

type ImageSliderProps = {
  listing: IProperty;
};

const ImageSlider = ({ listing }: ImageSliderProps) => {
  const [selectedImage, setSelectedImage] = useState(listing?.images[0]);
  // const isSelected= selectedImage._id===listing

  return (
    <Flex direction="column" width="full" mb={6}>
      <Image
        src={selectedImage?.url}
        rounded="2xl"
        height={480}
        cursor="pointer"
        width="full"
        objectFit="cover"
        mb={4}
      />
      <HStack spacing={3} overflowX="scroll">
        {listing?.images?.map((img) => (
          <Image
            key={img._id}
            src={img?.url}
            border={selectedImage._id === img._id ? "2px solid green" : "unset"}
            cursor="pointer"
            objectFit="cover"
            rounded="xl"
            height={100}
            width={128}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </HStack>
    </Flex>
  );
};

export default ImageSlider;
