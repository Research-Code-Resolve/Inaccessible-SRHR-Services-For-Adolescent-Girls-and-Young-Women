import { Link, useNavigate } from "react-router-dom";
import "./STIPreventionCare.css";

const sections = [
  {
    id: "sti-learn",
    title: "STI Prevention and Care",
    description: "Learn about common STIs, prevention methods, and treatment basics.",
    path: "learn",
    icon: "🛡️",
  },
  {
    id: "sti-services",
    title: "Find STI Testing and Treatment Services",
    description: "Locate nearby testing, counseling, and treatment services.",
    path: "services",
    icon: "📍",
  },
];

const STIPreventionCare = () => {
  const navigate = useNavigate();

  return (
    <div className="spc-page">
      <div className="page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1>STI Prevention & Care</h1>
      </div>

      <p className="spc-intro">
        Learn how to protect yourself and others, and find services near you
        for testing and treatment.
      </p>

      <div className="spc-grid">
        {sections.map((section) => (
          <Link key={section.id} to={section.path} className="spc-card">
            <span className="spc-icon">{section.icon}</span>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default STIPreventionCare;