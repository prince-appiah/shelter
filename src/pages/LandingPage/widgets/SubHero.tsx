import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Image, Text } from "@chakra-ui/react";

import bgHero2 from "assets/images/bg-hero-2.png";
import { LISTINGS_ROUTE } from "config/constants/routes";
import { useNavigate } from "react-router-dom";

const SubHero = () => {
  return (
    <Box py={10} px={28}>
      <Box position="relative">
        <Image src={bgHero2} />
        <Box position="absolute" top={7} right={91}>
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
            url="#"
          />
        </Box>
      </Box>
    </Box>
  );
};

const SubHeroCard = ({ title, body, link, url }) => {
  const navigate = useNavigate();

  return (
    <Box
      my={1}
      p={7}
      borderRadius={8}
      borderColor="gray.300"
      borderWidth={1}
      bgColor="white"
      width={441}
    >
      <Text fontWeight="semibold" color="brand.primary" mb={4}>
        {title}
      </Text>
      <Text color="gray.500" noOfLines={3} mb={6}>
        {body}
      </Text>
      <Box
        onClick={() => navigate(url)}
        display="flex"
        _hover={{ cursor: "pointer" }}
        alignItems="center"
      >
        <Text color="brand.primary" fontWeight="medium" pr={6}>
          {link}
        </Text>
        <ArrowForwardIcon color="brand.primary" fontSize="xl" />
      </Box>
    </Box>
  );
};

export default SubHero;
