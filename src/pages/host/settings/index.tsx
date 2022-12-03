import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import PersonalDetails from "components/SettingsPanels/PersonalDetails";
import ProfileDetails from "components/SettingsPanels/ProfileDetails";
import { roles } from "config/constants/vars";
import { useAuthState } from "hooks/reduxHooks";
import { withProtected } from "shared/routes";

const HostSettings = () => {
  const { currentUser: user } = useAuthState();

  console.log("new host settings rendering");

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
          {/* TODO: Remove customer when building out profile section for customer  */}
          {user?.userType !== roles.admin && user?.userType !== roles.customer && <Tab>Profile</Tab>}
          {/* <Tab>Social Profiles</Tab> */}
        </TabList>
        <TabPanels>
          <TabPanel>
            <PersonalDetails user={user} />
          </TabPanel>
          {/* TODO: Remove customer when building out profile section for customer  */}
          {user?.userType !== roles.admin && user?.userType !== roles.customer && (
            <TabPanel>
              <ProfileDetails user={user} />
            </TabPanel>
          )}
          {/* <TabPanel>
            <SocialProfiles />
          </TabPanel> */}
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default withProtected(HostSettings, [roles.host]);
