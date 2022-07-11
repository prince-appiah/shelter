import { Flex } from "@chakra-ui/react";
import Footer from "components/Footer";
import { useAppDispatch, useGlobalState } from "hooks/reduxHooks";
import { useEffect } from "react";
import { fetchListingsAction } from "redux/global/asyncActions";
import { setStatus } from "redux/global/globalSlice";
import { store } from "redux/store";
import BeAHost from "./widgets/BeAHost";
import Header from "./widgets/Header";
import Hero from "./widgets/Hero";
import RecentListings from "./widgets/RecentListings";
import RentARoom from "./widgets/RentARoom";
import SubHero from "./widgets/SubHero";

export type RecentListing = {
  id: number;
  name: string;
  location: string;
  price: number;
  stayPeriod: string;
  image: string;
  status: string;
};

const LandingPage = () => {
  const dispatch = useAppDispatch();
  const { listings } = useGlobalState();

  useEffect(() => {
    const fetchListings = () => dispatch(fetchListingsAction());
    fetchListings();

    return () => {
      store.dispatch(setStatus("idle"));
    };
  }, [dispatch]);

  return (
    <>
      <Flex direction="column" px={{ base: 4, lg: 8, xl: 28 }}>
        {/* <Container> */}
        <Header />
        <Hero />
        <SubHero />
        {/* todo: fix this later */}
        <RecentListings data={listings} />
        <BeAHost />
        <RentARoom />
        {/* </Container> */}
      </Flex>
      <Footer />
    </>
  );
};

export default LandingPage;
