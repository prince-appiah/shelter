import {
    Box,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Image,
    useRadioGroup,
} from "@chakra-ui/react";
import Button from "components/Button";
import Input from "components/Input";
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

    return (
        <Flex width="100vw" height="100vh">
            {/* Left Image */}
            <Image src="http://placehold.jp/1000x1024.png" />
            {/* Form */}
            <Box mx="auto" my="auto" width="35%" py={10} px={16}>
                <Heading fontSize={24} mb={5} textAlign="center">
                    Join Shelter
                </Heading>

                <Box as="form">
                    <FormControl sx={{ width: "100%", mb: 6 }}>
                        <FormLabel mb={3} color="gray.500">
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

                    <FormControl sx={{ width: "100%", }}>
                        <FormLabel mb={3} color="gray.500">First Name</FormLabel>
                        <Input
                            size="lg"
                            placeholder="John"
                            mb={3} />
                    </FormControl>
                    <FormControl sx={{ width: "100%", }}>
                        <FormLabel mb={3} color="gray.500">Last Name</FormLabel>
                        <Input
                            size="lg"
                            placeholder="Doe"
                            mb={3} />
                    </FormControl>
                    <FormControl sx={{ width: "100%", }}>
                        <FormLabel mb={3} color="gray.500">Email Address</FormLabel>
                        <Input
                            type="email"
                            size="lg"
                            placeholder="user@example.com"
                            mb={3} />
                    </FormControl>
                    <Button size="lg" mt={8} isFullWidth>
                        Create Account
                    </Button>

                    <Divider />
                </Box>
            </Box>
        </Flex>
    );
};

export default Signup;
