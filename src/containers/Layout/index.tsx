import { Flex } from "@chakra-ui/react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Flex>
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <Flex>{children}</Flex>
      </Flex>
    </>
  );
};

export default Layout;
