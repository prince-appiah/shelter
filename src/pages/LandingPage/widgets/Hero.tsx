import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import bgHero1 from "assets/images/bg-hero-1.png";
import Button from "components/Button";
import { LISTINGS_ROUTE } from "config/constants/routes";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="full"
      py={10}
      px={28}
    >
      {/* Left side  */}
      <VStack maxWidth="sm" alignItems="start">
        <Heading as="h5" color="black" fontSize={42} pb={2}>
          Sell or rent a room at the best price
        </Heading>
        <Text color="gray" pb={8}>
          We will help you find the best residence you dream of and reach out to
          your potential customers easily
        </Text>
        <Button
          onClick={() => navigate(LISTINGS_ROUTE)}
          rightIcon={<ArrowForwardIcon />}
          size="lg"
        >
          Browse Listings
        </Button>
      </VStack>
      {/* Right side  */}
      <Image src={bgHero1} alt="Living Room" sx={{ objectFit: "cover" }} />
    </Box>
  );
};

export default Hero;
