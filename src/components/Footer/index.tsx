import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Button from "components/Button";
import Input from "components/Input";

const footerLinks = [
    {
        id: 0,
        title: "Products",
        subs: [
            { id: 0, title: "Shelter for Property Owners", href: "#" },
            { id: 1, title: "Shelter for Customers", href: "#" },
            { id: 2, title: "Careers", href: "#" },
        ],
    },
    {
        id: 1,
        title: "Help and Support",
        subs: [
            { id: 0, title: "Shelter Support", href: "#" },
            { id: 1, title: "Privacy Policy", href: "#" },
            { id: 2, title: "Subscribe to our newsletter", href: "#" },
        ],
    },
];

const Footer = () => {
    return (
        <Box py={16} px={28} bgColor="text.primary" color="white">
            {/* Subscribe Section */}
            <Flex direction="column" alignItems="center">
                <Heading fontSize={24} fontWeight="semibold" mb={2}>
                    STAY UPDATED
                </Heading>
                <Text color="gray.300" mb={2}>
                    Write your email below and get latest news from us
                </Text>
                <Flex>
                    <Input
                        width={400}
                        flexGrow={1}
                        size="lg"
                        bgColor="white"
                        color="text.primary"
                        mr={3}
                    />
                    <Button size="lg">Subscribe</Button>
                </Flex>
            </Flex>
            {/* Links section */}
            <Flex py={10}>
                {footerLinks.map((item) => (
                    <Box px={8} py={5} key={item.id}>
                        <Heading mb={3} fontWeight="semibold" fontSize={20}>
                            {item.title}
                        </Heading>
                        {item.subs.map((sub) => (


                            <Text as={Link} to="#" key={sub.id} color="gray.300" my={3} display='flex'>
                                {sub.title}
                            </Text>

                        ))}
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default Footer;
