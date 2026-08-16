import { Routes, Route, Navigate } from "react-router-dom";

// Authentication

import Splash from "../Pages/Splash/Splash.jsx";
import Language from "../Pages/Language/Language.jsx";
import Welcome from "../Pages/Welcome/Welcome.jsx";
import Register from "../Pages/Register/Register.jsx";
import Login from "../Pages/Login/Login.jsx";

// Dashboard

import Dashboard from "../Pages/Dashboard/Dashboard.jsx";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy.jsx";

import PregnancyTracker from "../Pages/PregnancyTracker/PregnancyTracker.jsx";
import MaternalChildHealth from "../Pages/MaternalChildHealth/MaternalChildHealth.jsx";
import Pregnancy from "../Pages/Pregnancy/Pregnancy.jsx";
import ChildCare from "../Pages/ChildCare/ChildCare.jsx";
import MenstrualHealth from "../Pages/MenstrualHealth/MenstrualHealth.jsx";
import MenstrualLesson from "../Pages/MenstrualLesson/MenstrualLesson.jsx";
import MenstrualTracker from "../Pages/MenstrualTracker/MenstrualTracker.jsx";
import Nutrition from "../Pages/Nutrition/Nutrition.jsx";
import AdolescencePuberty from "../Pages/AdolescencePuberty/AdolescencePuberty.jsx";
import FamilyPlanning from "../Pages/FamilyPlanning/FamilyPlanning.jsx";
import STICare from "../Pages/STICare/STICare.jsx";
import STILesson from "../Pages/STILesson/STILesson.jsx";
import FindHealthCentre from "../Pages/FindHealthCentre/FindHealthCentre.jsx";
import Consultation from "../Pages/Consultation/Consultation.jsx";
import BookConsultation from "../Pages/BookConsultation/BookConsultation.jsx";
import FAQs from "../Pages/FAQs/FAQs.jsx";
import AI from "../Pages/AI/AI.jsx";
import ContinueLearning from "../Pages/ContinueLearning/ContinueLearning.jsx";

function Routing() {

    return (

            <Routes>

                {/* Authentication */}

                <Route path="/" element={<Splash />} />

                <Route path="/language" element={<Language />} />

                <Route path="/welcome" element={<Welcome />} />

                <Route path="/register" element={<Register />} />

                <Route path="/login" element={<Login />} />

                {/* Dashboard */}

                <Route path="/dashboard" element={<Dashboard />} />

<Route
    path="/privacy-policy"
    element={<PrivacyPolicy />}
/>
<Route
    path="/maternal-child-health"
    element={<MaternalChildHealth />}
/>

<Route
    path="/pregnancy"
    element={<Pregnancy />}
/>

<Route
    path="/child-care"
    element={<ChildCare />}
/>

<Route
    path="/pregnancy-tracker"
    element={<PregnancyTracker />}
/>
<Route
    path="/menstrual-health"
    element={<MenstrualHealth />}
/>

<Route
    path="/menstrual-health/lesson"
    element={<MenstrualLesson />}
/>

<Route
    path="/menstrual-tracker"
    element={<MenstrualTracker />}
/>
<Route

    path="/nutrition"

    element={<Nutrition/>}

/>
<Route

    path="/adolescence-puberty"

    element={<AdolescencePuberty />}

/>
<Route

    path="/family-planning"

    element={<FamilyPlanning />}

/>
<Route

    path="/sti-care"

    element={<STICare />}

/>

<Route

    path="/sti-lesson"

    element={<STILesson />}

/>
<Route

    path="/consultation"

    element={<Consultation />}

/>

<Route

    path="/find-health-centre"

    element={<FindHealthCentre/>}

/>
<Route

    path="/book-appointment"

    element={<BookConsultation />}

/>

                <Route
                    path="/ai-assistant"
                    element={<AI />}
                />
                <Route
                    path="/continue-learning"
                    element={<ContinueLearning />}
                />
                <Route
                    path="/faqs"
                    element={<FAQs />}
                />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

    );

}

export default Routing;