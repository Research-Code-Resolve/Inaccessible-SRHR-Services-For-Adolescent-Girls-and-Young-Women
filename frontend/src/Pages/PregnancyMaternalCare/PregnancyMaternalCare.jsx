import { Link, useNavigate } from "react-router-dom";
import "./PregnancyMaternalCare.css";

const sections = [
  {
    id: "pregnancy",
    title: "Pregnancy",
    description: "Learn about each stage of pregnancy, symptoms, and prenatal care.",
    path: "pregnancy/learn",
    icon: "🤰",
  },
  {
    id: "child-care",
    title: "Child Care",
    description: "Guidance on newborn care, feeding, milestones, and safety.",
    path: "child-care/learn",
    icon: "👶",
  },
  {
    id: "pregnancy-tracker",
    title: "Pregnancy Tracker",
    description: "Track your due date, current week, and trimester progress.",
    path: "tracker",
    icon: "📅",
  },
];

const PregnancyMaternalCare = () => {
  const navigate = useNavigate();

  return (
    <div className="pmc-page">
      <div className="page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1>Pregnancy & Maternal Care</h1>
      </div>

      <p className="pmc-intro">
        Everything you need to support a healthy pregnancy and your baby's
        early care, in one place.
      </p>

      <div className="pmc-grid">
        {sections.map((section) => (
          <Link key={section.id} to={section.path} className="pmc-card">
            <span className="pmc-icon">{section.icon}</span>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PregnancyMaternalCare;