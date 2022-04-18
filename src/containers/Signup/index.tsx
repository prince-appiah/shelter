import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Text,
  useRadioGroup,
} from "@chakra-ui/react";
import Button from "components/Button";
import Input from "components/Input";
import { LOGIN_ROUTE } from "config/constants/routes";
import { useNavigate } from "react-router-dom";
import AccountTypeCard from "./widgets/AccountTypeCard";

const Signup = () => {
  const accountOptions = [
    { title: "Customer", value: "user" },
    { title: "Host", value: "host" },
  ];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "userType",
    defaultValue: "user",
    onChange: console.log,
  });
  const group = getRootProps();
  const navigate = useNavigate();

  return (
    <Flex width="100vw" height="100vh">
      {/* Left Image */}
      <Image src="http://placehold.jp/1000x1024.png" />
      {/* Form */}
      <Box mx="auto" my="auto" width="35%" py={8} px={16}>
        <Heading fontSize={24} pb={5} textAlign="center">
          Join Shelter
        </Heading>

        <Box as="form">
          <FormControl sx={{ width: "100%", pb: 6 }}>
            <FormLabel pb={3} color="gray.500">
              Select Account Type
            </FormLabel>
            <HStack justifyContent="space-around" {...group}>
              {accountOptions.map((val) => {
                const radio = getRadioProps({
                  value: val.value,
                  name: "userType",
                });

                return (
                  <AccountTypeCard key={val.value} {...radio}>
                    {val.title}
                  </AccountTypeCard>
                );
              })}
            </HStack>
          </FormControl>

          <FormControl sx={{ width: "100%" }}>
            <FormLabel mb={3} color="gray.500">
              First Name
            </FormLabel>
            <Input size="lg" placeholder="John" pb={3} />
          </FormControl>
          <FormControl sx={{ width: "100%" }}>
            <FormLabel mb={3} color="gray.500">
              Last Name
            </FormLabel>
            <Input size="lg" placeholder="Doe" pb={3} />
          </FormControl>
          <FormControl sx={{ width: "100%" }}>
            <FormLabel mb={3} color="gray.500">
              Email Address
            </FormLabel>
            <Input
              type="email"
              size="lg"
              placeholder="user@example.com"
              mb={3}
            />
          </FormControl>
          <Button size="lg" mt={8} isFullWidth>
            Create Account
          </Button>

          <Divider pb={4} />
          <Text color="gray.400" fontWeight="medium" textAlign="center">
            Already have an account?
            <Box
              as="span"
              onClick={() => navigate(LOGIN_ROUTE)}
              _hover={{ cursor: "pointer", color: "blue.500" }}
              fontWeight="semibold"
              pl={3}
              color="blue.600"
            >
              Log In
            </Box>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Signup;
