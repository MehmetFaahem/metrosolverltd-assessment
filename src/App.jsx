import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
