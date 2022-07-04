import {
  Box,
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

const BeAHost = () => {
  return (
    <Box py={10}>
      <Heading
        fontWeight="semibold"
        textAlign={{ base: "center" }}
        fontSize={{ base: 22, md: 24 }}
        mb={6}
      >
        Want to be a host?
      </Heading>

      <Flex width="100%">
        <Tabs
          orientation="vertical"
          width={{ base: "100%", lg: "80%" }}
          mx="auto"
          isFitted
          size="lg"
        >
          {/* Left Side  */}
          <TabList width={{ base: "full", md: "60%" }}>
            <Tab display="flex" flexDirection="column">
              <Heading fontSize={18} textAlign="left" mb={2}>
                Create An Account
              </Heading>
              <Text noOfLines={3} textAlign="left" fontSize={14}>
                Id aliquet hac pellentesque odio vestibulum. In aliquam, magna
                sed sit faucibus donec consectetur. Ipsum sed risus duisr
              </Text>
            </Tab>
            <Tab display="flex" flexDirection="column">
              <Heading fontSize={18} textAlign="left" mb={2}>
                Verify Your Identity
              </Heading>
              <Text noOfLines={3} textAlign="left" fontSize={14}>
                Id aliquet hac pellentesque odio vestibulum. In aliquam, magna
                sed sit faucibus donec consectetur. Ipsum sed risus duisr
              </Text>
            </Tab>
            <Tab display="flex" flexDirection="column">
              <Heading fontSize={18} textAlign="left" mb={2}>
                Add Your Listings
              </Heading>
              <Text noOfLines={3} textAlign="left" fontSize={14}>
                Id aliquet hac pellentesque odio vestibulum. In aliquam, magna
                sed sit faucibus donec consectetur. Ipsum sed risus duisr
              </Text>
            </Tab>
          </TabList>
          {/* Right Side  */}
          <TabPanels width="full" display={{ base: "none", md: "unset" }}>
            <TabPanel
              width="100%"
              height="100%"
              align="center"
              justify="center"
            >
              <Image src="http://placehold.jp/400x400.png" />
            </TabPanel>
            <TabPanel
              width="100%"
              height="100%"
              align="center"
              justify="center"
            >
              <Image src="http://placehold.jp/400x400.png" />
            </TabPanel>
            <TabPanel
              width="100%"
              height="100%"
              align="center"
              justify="center"
            >
              <Image src="http://placehold.jp/400x400.png" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
};

export default BeAHost;
