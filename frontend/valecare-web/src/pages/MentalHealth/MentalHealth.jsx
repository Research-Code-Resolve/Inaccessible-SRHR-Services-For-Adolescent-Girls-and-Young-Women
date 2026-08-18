import { Link, useNavigate } from "react-router-dom";
import "./MentalHealth.css";

const sections = [
  {
    id: "mh-learn",
    title: "Learning Module",
    description: "Understand common mental health topics, coping strategies, and self-care.",
    path: "learn",
    icon: "🧠",
  },
  {
    id: "mh-support",
    title: "Support & Community",
    description: "Connect with counseling, peer support, and community resources.",
    path: "support",
    icon: "🤝",
  },
];

const MentalHealth = () => {
  const navigate = useNavigate();

  return (
    <div className="mh-page">
      <div className="page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1>Mental Health</h1>
      </div>

      <p className="mh-intro">
        Your emotional wellbeing matters. Learn about mental health, or find
        support and community when you need it.
      </p>

      <div className="mh-grid">
        {sections.map((section) => (
          <Link key={section.id} to={section.path} className="mh-card">
            <span className="mh-icon">{section.icon}</span>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MentalHealth;