import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { roles } from "config/constants/vars";
import { withProtected } from "shared/routes";
import PersonalDetails from "./panels/PersonalDetails";
import Security from "./panels/Security";
import SocialProfiles from "./panels/SocialProfiles";

const AdminSettings = () => {
  return (
    <Flex direction="column" my={6} px={{ base: 2 }}>
      <Text fontWeight={600} fontSize={18}>
        Settings
      </Text>
      <Text color="gray" fontSize={14}>
        Configurations and preferences
      </Text>

      {/* Sections */}
      <Tabs>
        <TabList>
          <Tab>Personal Details</Tab>
          <Tab>Security</Tab>
          <Tab>Social Profiles</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PersonalDetails />
          </TabPanel>
          <TabPanel>
            <Security />
          </TabPanel>
          <TabPanel>
            <SocialProfiles />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default withProtected(AdminSettings, [roles.admin]);
