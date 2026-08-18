import PregnancyMaternalCare from "./pages/PregnancyMaternalCare/PregnancyMaternalCare";
import PregnancyLearn from "./pages/PregnancyMaternalCare/Pregnancy/Learn/Learn";
import ChildCareLearn from "./pages/PregnancyMaternalCare/ChildCare/Learn/Learn";
import PregnancyTracker from "./pages/PregnancyMaternalCare/PregnancyTracker/PregnancyTracker";

const PregnancyMaternalCareRoutes = () => {
  return (
    <Routes>
<Route path="/pregnancy-maternal-care" element={<PregnancyMaternalCare />} />
<Route path="/pregnancy-maternal-care/pregnancy/learn" element={<PregnancyLearn />} />
<Route path="/pregnancy-maternal-care/child-care/learn" element={<ChildCareLearn />} />
<Route path="/pregnancy-maternal-care/tracker" element={<PregnancyTracker />} />
    </Routes>
  );
};

export default PregnancyMaternalCareRoutes;
