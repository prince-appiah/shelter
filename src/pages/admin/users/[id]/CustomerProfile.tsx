import { Flex, Image } from "@chakra-ui/react";

import hostBg from "assets/images/host-profile-img.jpeg";

type Props = {};

const CustomerProfile = (props: Props) => {
  return (
    <>
      {/* fixed image at the top */}
      <Image
        src={hostBg}
        height={200}
        width="full"
        rounded="lg"
        objectFit="cover"
      />

      {/* Main content  */}
      <Flex
        px={32}
        direction="column"
        bg="transparent"
        position="relative"
        bottom={8}
      >
        {/* main content with white bg */}
        <Flex
          direction="column"
          bg="white"
          width="full"
          borderWidth="thin"
          borderColor="gray.100"
          rounded="lg"
          p={4}
        >
          {/* host image with address, website, email, total listings and ratings */}
        </Flex>
        {/* list all properties belonging to host */}
      </Flex>
    </>
  );
};

export default CustomerProfile;
