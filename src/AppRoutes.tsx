import { HOME_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from "config/constants/routes";
import LandingPage from "containers/LandingPage";
import Login from "containers/Login";
import NotFound from "containers/NotFound";
import Signup from "containers/Signup";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (<>
    <Routes>
      <Route path={HOME_ROUTE} element={<LandingPage />} />
      <Route path={LOGIN_ROUTE} element={<Login />} />
      <Route path={SIGNUP_ROUTE} element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  );
};

export default AppRoutes;
