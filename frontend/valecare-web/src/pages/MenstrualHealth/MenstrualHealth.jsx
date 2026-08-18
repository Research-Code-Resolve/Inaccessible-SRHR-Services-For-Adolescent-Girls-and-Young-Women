import { Link } from "react-router-dom";
import { FaBookOpen, FaCalendarDays } from "react-icons/fa6";

import "./MenstrualHealth.css";

const sections = [
  {
    title: "Learn",
    description:
      "Understand periods, menstrual hygiene, common symptoms and self-care.",
    icon: <FaBookOpen />,
    path: "/menstrual-health/learn",
  },
  {
    title: "Cycle Tracker",
    description:
      "Log your last period and cycle length to predict your next one.",
    icon: <FaCalendarDays />,
    path: "/menstrual-health/tracker",
  },
];

const MenstrualHealth = () => {
  return (
    <div className="menstrual-hub-page">

      {/* Header */}
      <div className="hub-header">
        <Link to="/dashboard" className="back-button">
          ←
        </Link>

        <div>
          <h1>Menstrual Health</h1>
          <p>
            Everything you need to understand your cycle and take care of
            yourself.
          </p>
        </div>
      </div>

      {/* Section cards */}
      <div className="hub-grid">
        {sections.map((section) => (
          <Link
            key={section.title}
            to={section.path}
            className="hub-card"
          >
            <div className="hub-card-icon">{section.icon}</div>

            <div className="hub-card-content">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>

            <span className="hub-card-arrow">→</span>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default MenstrualHealth;
