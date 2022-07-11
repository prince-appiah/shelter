import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import bgHero1 from "assets/images/bg-hero-1.png";
import Button from "components/Button";
import { LISTINGS_ROUTE } from "config/constants/routes";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Stack
      direction={{ base: "column-reverse", lg: "row" }}
      alignItems="center"
      // justifyContent="space-between"
      width="full"
      py={10}
    >
      {/* Left side  */}
      <VStack
        // maxWidth="sm"
        alignItems="start"
        width={{ base: "full", lg: "auto" }}
        spacing={4}
      >
        <Heading as="h5" color="black" fontSize={{ base: 28, lg: 40 }}>
          Sell or rent a room at the best price
        </Heading>
        <Text color="gray">
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
      <Image
        src={bgHero1}
        alt="Living Room"
        rounded="xl"
        width={{ base: "full", lg: "60%  " }}
        height={{ base: 300, md: 350 }}
        sx={{ objectFit: "cover" }}
      />
    </Stack>
  );
};

export default Hero;
