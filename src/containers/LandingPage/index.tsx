import featuredListing from 'assets/images/featured-listing.png';
import Footer from "shared/Footer";
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

const recentListings: RecentListing[] = [
  {
    id: 1,
    name: "Living Room",
    location: "Trassacco Valley Trassacco Valley Trassacco Valley",
    price: 100,
    stayPeriod: "month",
    image: featuredListing,
    status: "For Hire",
  },
  {
    id: 2,
    name: "Cottage House",
    location: "East Legon",
    price: 90,
    stayPeriod: "night",
    image: featuredListing,
    status: "For Rent",
  },
  {
    id: 3,
    name: "Chase Villa Villa Villa Villa",
    location: "West Hills",
    price: 30,
    stayPeriod: "day",
    image: featuredListing,
    status: "For Lease",
  },
  {
    id: 4,
    name: "Chase Villa",
    location: "West Hills",
    price: 89,
    stayPeriod: "night",
    image: featuredListing,
    status: "For Rent",
  },
];

const LandingPage = () => {
  return (
    <>
      {/* <Container> */}
      <Header />
      <Hero />
      <SubHero />
      <RecentListings data={recentListings} />
      <BeAHost />
      <RentARoom />
      <Footer />
      {/* </Container> */}
    </>
  )

};

export default LandingPage;
