import { Flex, Text } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import PersonalDetails from "components/SettingsPanels/PersonalDetails";
import ProfileDetails from "components/SettingsPanels/ProfileDetails";
import SocialProfiles from "components/SettingsPanels/SocialProfiles";
import { roles } from "config/constants/vars";
import { useAuthState } from "hooks/reduxHooks";
import { withProtected } from "shared/routes";

const AdminSettings = () => {
  const { currentUser: user } = useAuthState();

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
          {/* <Tab>My Profile</Tab> */}
          {/* <Tab>Social Profiles</Tab> */}
        </TabList>
        <TabPanels>
          <TabPanel>
            <PersonalDetails user={user} />
          </TabPanel>
          {/* <TabPanel>
            <ProfileDetails user={user} />
          </TabPanel> */}
          {/* <TabPanel>
            <SocialProfiles />
          </TabPanel> */}
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default withProtected(AdminSettings, [roles.admin]);
