import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout/MainLayout";

// Public pages
import Splash from "./pages/Splash/Splash";
import Language from "./pages/Language/Language";
import Welcome from "./pages/Welcome/Welcome";
import Register from "./pages/Register/Register";

import SignIn from "./pages/SignIn/SignIn";
// Main pages
import Dashboard from "./pages/Dashboard/Dashboard";
import MenstrualHealth from "./pages/MenstrualHealth/MenstrualHealth";
import FamilyPlanningLearn from "./pages/FamilyPlanning/Learn/Learn";
import Services from "./pages/Services/Services";

// Services
import Consultation from "./pages/Services/Consultation/Consultation";
import VideoConsultation from "./pages/Services/Consultation/VideoConsultation";
import InPersonConsultation from "./pages/Services/Consultation/InPersonConsultation";
import Footer from "./components/Footer/Footer";
import SupportGroups from "./pages/Services/SupportGroups/SupportGroups";

const Routing = () => {
  return (
    <Routes>

      {/* ======================================
          PUBLIC / ONBOARDING SCREENS
      ====================================== */}

      <Route path="/" element={<Splash />} />

      <Route
        path="/language"
        element={<Language />}
      />

      <Route
        path="/welcome"
        element={<Welcome />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

    <Route path="/signin" element={<SignIn />} />


      {/* ======================================
          MAIN APPLICATION
          Sidebar appears automatically
      ====================================== */}

      <Route element={<MainLayout />}>

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
   
        {/* Menstrual Health */}

        <Route
          path="/menstrual-health"
          element={<MenstrualHealth />}
        />

        {/* Pregnancy & Maternal Care */}

       <Route
  path="/family-planning/learn"
  element={<FamilyPlanningLearn />}
/>

        {/* Services */}

        <Route
          path="/services"
          element={<Services />}
        />

        {/* Consultation */}

        <Route
          path="/services/consultation"
          element={<Consultation />}
        />

        <Route
          path="/services/consultation/video"
          element={<VideoConsultation />}
        />

        <Route
          path="/services/consultation/in-person"
          element={<InPersonConsultation />}
        />

        {/* Support Groups */}

        <Route
          path="/services/support-groups"
          element={<SupportGroups />}
        />

      </Route>

    </Routes>
  );
};

export default Routing;
