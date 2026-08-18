import { Routes, Route } from "react-router-dom";

import MenstrualHealth from "./MenstrualHealth";
import Learn from "./Learn/Learn";
import MenstrualTracker from "./MenstrualTracker";

// Mounted at /menstrual-health/* in App.jsx
const MenstrualHealthRoutes = () => {
  return (
    <Routes>
      <Route index element={<MenstrualHealth />} />
      <Route path="learn/*" element={<Learn />} />
      <Route path="tracker" element={<MenstrualTracker />} />
    </Routes>
  );
};

export default MenstrualHealthRoutes;