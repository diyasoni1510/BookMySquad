import React from "react";
import Home from "./Pages/Home";
import AdminLogin from "./admin/AdminLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./admin/AdminDashboard";
import Home2 from "./Pages/Home2";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Home2 />} />
          <Route path="/services" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
