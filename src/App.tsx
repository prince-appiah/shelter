import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Loadable from "components/Loadable";
import {
  ADMIN_AMENITIES,
  ADMIN_BOOKINGS,
  ADMIN_DASHBOARD,
  ADMIN_LISTINGS,
  ADMIN_LISTING_DETAILS,
  ADMIN_ROOM_TYPES,
  ADMIN_SETTINGS,
  ADMIN_USERS,
  CUSTOMER_BOOKINGS,
  CUSTOMER_DASHBOARD,
  CUSTOMER_LISTING_DETAILS,
  CUSTOMER_SETTINGS,
  HOME_ROUTE,
  HOST_DASHBOARD,
  HOST_LISTINGS,
  LISTINGS_ROUTE,
  LISTING_DETAILS,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
} from "config/constants/routes";
import Layout from "containers/Layout";
import Login from "containers/Login";
import NotFound from "containers/NotFound";
import Signup from "containers/Signup";

// ADMIN IMPORTS
const Admin = Loadable(lazy(() => import("pages/admin/dashboard")));
const AdminListings = Loadable(lazy(() => import("pages/admin/listings")));
const Amenities = Loadable(lazy(() => import("pages/admin/amenities")));
const Bookings = Loadable(lazy(() => import("pages/admin/bookings")));
const Users = Loadable(lazy(() => import("pages/admin/users")));
const RoomTypes = Loadable(lazy(() => import("pages/admin/property-types")));
const AdminSettings = Loadable(lazy(() => import("pages/admin/settings")));

// CUSTOMER IMPORTS
const Customer = Loadable(lazy(() => import("pages/customer/dashboard")));
const CustomerBookings = Loadable(
  lazy(() => import("pages/customer/bookings"))
);
const CustomerSettings = Loadable(
  lazy(() => import("pages/customer/settings"))
);

// HOST IMPORTS
const Host = Loadable(lazy(() => import("pages/host/dashboard")));
const HostListings = Loadable(lazy(() => import("pages/host/listings")));

// OTHER COMPONENT IMPORTS
const LandingPage = Loadable(lazy(() => import("containers/LandingPage")));
const ListingDetails = Loadable(
  lazy(() => import("containers/ListingDetails"))
);
const Listings = Loadable(lazy(() => import("containers/Listings")));

const AppRoutes = () => {
  // const { hasNetwork, setHasNetwork } = useContext(NetworkStatusContext);
  // const [isConnected, setIsConnected] = useState(hasNetwork);

  // useEffect(() => {
  //   setHasNetwork(!isConnected);
  // }, [hasNetwork]);

  // if (hasNetwork) {
  //   return (
  //     <OnlineStatusModal
  //       isOpen={isConnected}
  //       onClose={() => setIsConnected(!isConnected)}
  //     >
  //       <Flex direction="column" p={8} maxH="2xl" overflowY="scroll">
  //         <Text>
  //           {!isConnected &&
  //             "Uh oh! Check your internet connection and try again"}
  //         </Text>
  //       </Flex>
  //     </OnlineStatusModal>
  //   );
  // }

  return (
    <>
      <Routes>
        {/* Auth routes */}
        <Route path={HOME_ROUTE} element={<LandingPage />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={SIGNUP_ROUTE} element={<Signup />} />
        <Route path={SIGNUP_ROUTE} element={<Signup />} />

        {/* Public routes */}
        <Route path={LISTING_DETAILS} element={<ListingDetails />} />
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
          path={ADMIN_BOOKINGS}
          element={
            <Layout>
              <Bookings />
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
          path={ADMIN_LISTING_DETAILS}
          element={
            <Layout>
              <ListingDetails />
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
        <Route
          path={ADMIN_SETTINGS}
          element={
            <Layout>
              <AdminSettings />
            </Layout>
          }
        />

        {/* Host routes */}
        <Route
          path={HOST_DASHBOARD}
          element={
            <Layout>
              <Host />
            </Layout>
          }
        />
        <Route
          path={HOST_LISTINGS}
          element={
            <Layout>
              <HostListings />
            </Layout>
          }
        />

        {/* Customer routes */}
        <Route
          path={CUSTOMER_DASHBOARD}
          element={
            <Layout>
              <Customer />
            </Layout>
          }
        />
        <Route
          path={CUSTOMER_LISTING_DETAILS}
          element={
            <Layout>
              <ListingDetails />
            </Layout>
          }
        />
        <Route
          path={CUSTOMER_BOOKINGS}
          element={
            <Layout>
              <CustomerBookings />
            </Layout>
          }
        />
        <Route
          path={CUSTOMER_SETTINGS}
          element={
            <Layout>
              <CustomerSettings />
            </Layout>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
