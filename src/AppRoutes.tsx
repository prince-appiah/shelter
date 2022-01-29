import { HOME_ROUTE } from "config/constants/routes";
import LandingPage from "pages/LandingPage";
import NotFound from "pages/NotFound";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<LandingPage />} />
      {/* <Route path='signin' element={<LandingPage/> }/> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
