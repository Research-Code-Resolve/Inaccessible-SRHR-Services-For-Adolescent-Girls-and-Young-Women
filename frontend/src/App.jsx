import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import RequireAuth from "./components/common/RequireAuth";

import Welcome from "./pages/Welcome/Welcome";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";

import Dashboard from "./pages/Dashboard/Dashboard";

import Learn from "./pages/Learn/Learn";

import HealthServicesRoutes from "./pages/HealthServices/HealthServicesRoutes";
import MenstrualHealthRoutes from "./pages/MenstrualHealth/MenstrualHealthRoutes";

import Consultation from "./pages/Consultation/Consultation";
import BookAppointment from "./pages/Consultation/BookAppointment";


import PregnancyMaternalCare from "./pages/PregnancyMaternalCare/PregnancyMaternalCare";
import PregnancyLearn from "./pages/PregnancyMaternalCare/Pregnancy/Learn/Learn";
import ChildCareLearn from "./pages/PregnancyMaternalCare/ChildCare/Learn/Learn";
import PregnancyTracker from "./pages/PregnancyMaternalCare/PregnancyTracker/PregnancyTracker";
import FamilyPlanningLearn from "./pages/FamilyPlanning/Learn/Learn";
import Notifications from "./pages/Notifications/Notifications";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";

import Logout from "./pages/Logout/Logout";
import STIPreventionCare from "./pages/STIPreventionCare/STIPreventionCare";
import STILearn from "./pages/STIPreventionCare/Learn/Learn";
import STIServices from "./pages/STIPreventionCare/Services/Services";

import MentalHealth from "./pages/MentalHealth/MentalHealth";
import MentalHealthLearn from "./pages/MentalHealth/Learn/Learn";
import MentalHealthSupport from "./pages/MentalHealth/Support/Support";
import NutritionLearn from "./pages/Nutrition/Learn/Learn";
import AdolescenceLearn from "./pages/AdolescencePuberty/Learn/Learn";
import Contact from "./pages/Contact/Contact";
import Faq from "./pages/Faq/Faq";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <main style={{ minHeight: "calc(100vh - 160px)" }}>
          <Routes>
            {/* =========================
                PUBLIC PAGES
            ========================= */}

            <Route path="/" element={<Welcome />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />

            {/* =========================
                DASHBOARD
                Guests can access this
            ========================= */}

            <Route path="/dashboard" element={<Dashboard />} />

            <Route
              path="/menstrual-health/*"
              element={<MenstrualHealthRoutes />}
            />

            {/* =========================
                LEARN
            ========================= */}

            <Route path="/learn" element={<Learn />} />

            {/* =========================
                HEALTH SERVICES
            ========================= */}

            <Route
              path="/health-services/*"
              element={<HealthServicesRoutes />}
            />

            {/* =========================
                PREGNANCY & MATERNAL CARE
            ========================= */}

<Route path="/pregnancy-maternal-care" element={<PregnancyMaternalCare />} />
<Route path="/pregnancy-maternal-care/pregnancy/learn" element={<PregnancyLearn />} />
<Route path="/pregnancy-maternal-care/child-care/learn" element={<ChildCareLearn />} />
<Route path="/pregnancy-maternal-care/tracker" element={<PregnancyTracker />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/faq" element={<Faq />} />
   <Route
  path="/family-planning/learn"
  element={<FamilyPlanningLearn />}
/>
<Route path="/sti-prevention-care" element={<STIPreventionCare />} />
<Route path="/sti-prevention-care/learn" element={<STILearn />} />
<Route path="/sti-prevention-care/services" element={<STIServices />} />
<Route path="/mental-health" element={<MentalHealth />} />
<Route path="/mental-health/learn" element={<MentalHealthLearn />} />
<Route path="/mental-health/support" element={<MentalHealthSupport />} />
<Route path="/nutrition/learn" element={<NutritionLearn />} />
<Route path="/adolescence-puberty/learn" element={<AdolescenceLearn />} />
            {/* =========================
                CONSULTATION
            ========================= */}

            <Route path="/consultation" element={<Consultation />} />
            <Route path="/consultation/book" element={<BookAppointment />} />

            {/* =========================
                TRACKERS
                Login required
            ========================= */}

            <Route
              path="/trackers/pregnancy"
              element={
                <RequireAuth>
                  <PregnancyTracker />
                </RequireAuth>
              }
            />

            {/* =========================
                NOTIFICATIONS
                Login required
            ========================= */}

            <Route
              path="/notifications"
              element={
                <RequireAuth>
                  <Notifications />
                </RequireAuth>
              }
            />

            {/* =========================
                PROFILE
                Login required
            ========================= */}

            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />

            {/* =========================
                SETTINGS
                Login required
            ========================= */}

            <Route
              path="/settings"
              element={
                <RequireAuth>
                  <Settings />
                </RequireAuth>
              }
            />

            {/* =========================
                LOGOUT
            ========================= */}

            <Route path="/logout" element={<Logout />} />

            {/* =========================
                UNKNOWN PAGE
            ========================= */}

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;