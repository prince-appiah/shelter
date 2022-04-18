import {
  ADMIN_DASHBOARD,
  CUSTOMER_DASHBOARD,
  HOME_ROUTE,
  HOST_DASHBOARD,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
} from "config/constants/routes";
import LandingPage from "containers/LandingPage";
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
        <Route path={HOME_ROUTE} element={<LandingPage />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={SIGNUP_ROUTE} element={<Signup />} />
        <Route path={SIGNUP_ROUTE} element={<Signup />} />
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
