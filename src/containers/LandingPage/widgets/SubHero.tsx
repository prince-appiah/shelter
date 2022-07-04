import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

import bgHero2 from "assets/images/bg-hero-2.png";
import { LISTINGS_ROUTE, SIGNUP_ROUTE } from "config/constants/routes";
import { useNavigate } from "react-router-dom";

const SubHero = () => {
  return (
    <Flex py={10} direction={{ base: "column", md: "row" }}>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={5}
        justifyContent="center"
        align="center"
      >
        <Image
          src={bgHero2}
          alt="living-room"
          objectFit="contain"
          display={{ base: "none", lg: "unset" }}
          height={{ base: 300, md: 440 }}
        />
        <Stack width={{ base: "full", lg: "50%" }}>
          <SubHeroCard
            title="Rent a room"
            body="Vulputate purus, facilisi eu eget eget. Justo diam condimentum fusce mi enim. Nunc, arcu purus amet, augue hendrerit dapibus feugiat. Eget aliquam"
            link="See all listings"
            url={LISTINGS_ROUTE}
          />
          <SubHeroCard
            title="Sell your home/apartment"
            body="Vulputate purus, facilisi eu eget eget. Justo diam condimentum fusce mi enim. Nunc, arcu purus amet, augue hendrerit dapibus feugiat. Eget aliquam"
            link="Get Started"
            url={SIGNUP_ROUTE}
          />
        </Stack>
      </Stack>
    </Flex>
  );
};

const SubHeroCard = ({ title, body, link, url }) => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(url)}
      p={7}
      borderRadius={10}
      borderColor="gray.300"
      borderWidth={1}
      bgColor="white"
      width={{ base: "full" }}
      _hover={{
        cursor: "pointer",
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Text fontWeight="semibold" color="brand.primary" mb={4}>
        {title}
      </Text>
      <Text color="gray.500" noOfLines={3} mb={6}>
        {body}
      </Text>
      <Box display="flex" _hover={{ cursor: "pointer" }} alignItems="center">
        <Text color="brand.primary" fontWeight="medium" pr={6}>
          {link}
        </Text>
        <ArrowForwardIcon color="brand.primary" fontSize="xl" />
      </Box>
    </Box>
  );
};

export default SubHero;
