import Container from "components/Container";
import Header from "./widgets/Header";
import Hero from "./widgets/Hero";
import RecentListings from "./widgets/RecentListings";
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
    image: "http://placehold.jp/330x250.png",
    status: "For Hire",
  },
  {
    id: 2,
    name: "Cottage House",
    location: "East Legon",
    price: 90,
    stayPeriod: "night",
    image: "http://placehold.jp/330x250.png",
    status: "For Rent",
  },
  {
    id: 3,
    name: "Chase Villa",
    location: "West Hills",
    price: 30,
    stayPeriod: "day",
    image: "http://placehold.jp/330x250.png",
    status: "For Lease",
  },
  {
    id: 4,
    name: "Chase Villa",
    location: "West Hills",
    price: 89,
    stayPeriod: "night",
    image: "http://placehold.jp/330x250.png",
    status: "For Rent",
  },
];

const LandingPage = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <SubHero />
      <RecentListings data={recentListings} />
    </Container>
  );
};

export default LandingPage;
