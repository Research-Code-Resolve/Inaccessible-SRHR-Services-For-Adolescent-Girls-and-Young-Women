import React from "react";
import { Routes, Route } from "react-router-dom";
import HealthServices from "./HealthServices";
import ServiceDetail from "./ServiceDetail";

const HealthServicesRoutes = () => {
  return (
    <Routes>
      <Route index element={<HealthServices />} />
      <Route path=":slug" element={<ServiceDetail />} />
    </Routes>
  );
};

export default HealthServicesRoutes;
