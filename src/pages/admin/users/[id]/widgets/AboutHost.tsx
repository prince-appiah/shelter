import { Box, Divider, Flex, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import Button from "components/Button";
import { AiOutlineLink, AiOutlineMail } from "react-icons/ai";
import { IHost, IUser } from "typings";

type Props = {
  profile: IHost & IUser;
};

const AboutHost = ({ profile }: Props) => {
  const approvedListings = profile?.properties?.map((item) => item.isApproved);

  return (
    <>
      <Flex justify="space-between" align="start">
        <HStack align="center">
          <Image
            src="https://res.cloudinary.com/ddnozuc0s/image/upload/v1644180173/sample.jpg"
            width={20}
            height={20}
            objectFit="cover"
            rounded="lg"
          />
          <Flex direction="column">
            <Text fontWeight={600} mb={2}>
              {profile?.companyName ?? "No company name"}
            </Text>
            <Text color="gray" fontSize={14}>
              {/* 1278 Hayes Avenue, SHY 892 */}
              {profile?.location ?? "No location set"}
            </Text>
            <Flex align="center" cursor="pointer" _hover={{ color: "blue" }}>
              <Icon as={AiOutlineLink} mr={1} fontSize={14} />
              <Text fontSize={12} fontWeight={500} color="blue">
                {profile?.website ?? ""}
              </Text>
            </Flex>
          </Flex>
        </HStack>

        <HStack align="center">
          <Button
            variant="outline"
            leftIcon={<AiOutlineMail />}
            onClick={() => alert(`Send mail to ${profile?.email}`)}
          >
            Email
          </Button>
          <Button>Call Us</Button>
        </HStack>
      </Flex>

      {/* number of properties and bookings  */}
      <Flex bg="gray.100" p={4} mt={4} rounded="lg" justify="space-around">
        <Box mx={3}>
          <Text fontWeight={600}>{profile?.properties?.length}</Text>
          <Text fontSize={13} color="gray">
            Properties listed
          </Text>
        </Box>
        <Divider orientation="vertical" />
        <Box mx={3}>
          <Text fontWeight={600}>{approvedListings?.length ?? 0}</Text>
          <Text fontSize={13} color="gray">
            Approved listings
          </Text>
        </Box>
        <Divider orientation="vertical" />
        <Box mx={3}>
          <Text fontWeight={600}>0</Text>
          <Text fontSize={13} color="gray">
            Tenant bookings
          </Text>
        </Box>
        <Divider orientation="vertical" />
        <Box mx={3}>
          <Text fontWeight={600}>0</Text>
          <Text fontSize={13} color="gray">
            Approved bookings
          </Text>
        </Box>
      </Flex>
      {/* about  */}
      <VStack align="start" mt={6}>
        <Text fontWeight={600}>About us</Text>
        <Text color="gray" fontSize={14}>
          {profile?.about ?? "No description to display"}
        </Text>
      </VStack>
    </>
  );
};

export default AboutHost;
