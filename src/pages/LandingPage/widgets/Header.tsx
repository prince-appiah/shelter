import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Image, Spacer } from "@chakra-ui/react";
import Button from "components/Button";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "config/constants/routes";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Flex py={4}>
      <Image src="http://placehold.jp/50x50.png" />
      <Spacer />
      <Button onClick={() => navigate(LOGIN_ROUTE)} variant="outline">
        Log In
      </Button>
      <Button
        onClick={() => navigate(SIGNUP_ROUTE)}
        rightIcon={<ArrowForwardIcon />}
        ml={4}
      >
        Create Account
      </Button>
    </Flex>
  );
};

export default Header;
