import React from "react";
import GlobalStyles from 'styles/GlobalStyles';

import SaaSProductLandingPage from "./demos/SaaSProductLandingPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<SaaSProductLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}
