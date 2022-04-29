import {
  ADMIN_AMENITIES,
  ADMIN_DASHBOARD,
  ADMIN_LISTINGS,
  ADMIN_ROOM_TYPES,
  ADMIN_USERS,
  CUSTOMER_DASHBOARD,
  HOME_ROUTE,
  HOST_DASHBOARD,
  LISTINGS_ROUTE,
  LISTING_DETAILS_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
} from "config/constants/routes";
import LandingPage from "containers/LandingPage";
import Layout from "containers/Layout";
import ListingDetails from "containers/ListingDetails";
import Listings from "containers/Listings";
import Login from "containers/Login";
import NotFound from "containers/NotFound";
import Signup from "containers/Signup";
import Amenities from "pages/Admin/amenities";
import Admin from "pages/Admin/dashboard";
import AdminListings from "pages/Admin/listings";
import RoomTypes from "pages/Admin/property-types";
import Users from "pages/Admin/users";
import Customer from "pages/customer";
import Host from "pages/host";
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
        <Route
          path={ADMIN_DASHBOARD}
          element={
            <Layout>
              <Admin />
            </Layout>
          }
        />

        <Route
          path={ADMIN_USERS}
          element={
            <Layout>
              <Users />
            </Layout>
          }
        />

        <Route
          path={ADMIN_LISTINGS}
          element={
            <Layout>
              <AdminListings />
            </Layout>
          }
        />

        <Route
          path={ADMIN_ROOM_TYPES}
          element={
            <Layout>
              <RoomTypes />
            </Layout>
          }
        />

        <Route
          path={ADMIN_AMENITIES}
          element={
            <Layout>
              <Amenities />
            </Layout>
          }
        />

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
