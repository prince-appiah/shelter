import {
  ADMIN_DASHBOARD,
  CUSTOMER_DASHBOARD,
  HOME_ROUTE,
  HOST_DASHBOARD,
  LISTINGS_ROUTE,
  LISTING_DETAILS_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
} from "config/constants/routes";
import LandingPage from "containers/LandingPage";
import ListingDetails from "containers/ListingDetails";
import Listings from "containers/Listings";
import Login from "containers/Login";
import NotFound from "containers/NotFound";
import Signup from "containers/Signup";
import Admin from "pages/Admin";
import Customer from "pages/Customer";
import Host from "pages/Host";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Auth routes */}
        <Route path={HOME_ROUTE} element={<LandingPage />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={SIGNUP_ROUTE} element={<Signup />} />
        <Route path={SIGNUP_ROUTE} element={<Signup />} />

        {/* Public routes */}
        <Route path={LISTING_DETAILS_ROUTE} element={<ListingDetails />} />
        <Route path={LISTINGS_ROUTE} element={<Listings />} />

        {/* Admin routes */}
        <Route path={ADMIN_DASHBOARD} element={<Admin />} />

        {/* Host routes */}
        <Route path={HOST_DASHBOARD} element={<Host />} />

        {/* Customer routes */}
        <Route path={CUSTOMER_DASHBOARD} element={<Customer />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
