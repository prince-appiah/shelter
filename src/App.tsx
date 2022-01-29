import { CircularProgress, Text } from "@chakra-ui/react";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "pages/LandingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
