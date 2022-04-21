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

const RentARoom = () => {
  return (
    <Box py={10} px={28}>
      <Heading fontWeight="semibold" textAlign="center" fontSize={24} mb={6}>
        Want to rent a room/house?
      </Heading>

      <Flex px="40" width="100%">
        {/* Left Side  */}
        <Tabs orientation="vertical" width="100%" isFitted size="lg">
          <TabList width="70%">
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
                Search Available Properties
              </Heading>
              <Text noOfLines={3} textAlign="left" fontSize={14}>
                Id aliquet hac pellentesque odio vestibulum. In aliquam, magna
                sed sit faucibus donec consectetur. Ipsum sed risus duisr
              </Text>
            </Tab>
            <Tab display="flex" flexDirection="column">
              <Heading fontSize={18} textAlign="left" mb={2}>
                Schedule a Visit
              </Heading>
              <Text noOfLines={3} textAlign="left" fontSize={14}>
                Id aliquet hac pellentesque odio vestibulum. In aliquam, magna
                sed sit faucibus donec consectetur. Ipsum sed risus duisr
              </Text>
            </Tab>
          </TabList>
          {/* Right Side  */}
          <TabPanels>
            <TabPanel width="100%" height="100%">
              <Image src="http://placehold.jp/400x400.png" />
            </TabPanel>
            <TabPanel width="100%" height="100%">
              <Image src="http://placehold.jp/400x400.png" />
            </TabPanel>
            <TabPanel width="100%" height="100%">
              <Image src="http://placehold.jp/400x400.png" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
};

export default RentARoom;
