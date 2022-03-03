import LandingPage from "containers/LandingPage";
import React from "react";
import { Route, Routes } from "react-router-dom";


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
