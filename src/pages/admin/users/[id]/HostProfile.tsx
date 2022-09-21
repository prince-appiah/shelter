import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import React from "react";

import hostBg from "assets/images/host-profile-img.jpeg";
import AboutHost from "./widgets/AboutHost";
import HostProperties from "./widgets/HostProperties";

type Props = {};

const HostProfile = (props: Props) => {
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
      {/* main content - floating beneath the fixed image */}
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
          <AboutHost />
        </Flex>
        {/* list all properties belonging to host */}
        <HostProperties />
      </Flex>
    </>
  );
};

export default HostProfile;
