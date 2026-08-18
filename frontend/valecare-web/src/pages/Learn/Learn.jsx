import { Link, useNavigate } from "react-router-dom";
import {
  FaDroplet,
  FaPersonPregnant,
  FaUsers,
  FaShieldVirus,
  FaBrain,
  FaAppleWhole,
  FaChild,
} from "react-icons/fa6";
import "./Learn.css";

const topics = [
  {
    title: "Menstrual Health",
    description: "Understand your cycle, symptoms, and hygiene basics.",
    icon: <FaDroplet />,
    path: "/menstrual-health/learn",
  },
  {
    title: "Pregnancy",
    description: "Trimesters, prenatal care, and what to expect.",
    icon: <FaPersonPregnant />,
    path: "/pregnancy-maternal-care/pregnancy/learn",
  },
  {
    title: "Child Care",
    description: "Newborn care, feeding, milestones, and safety.",
    icon: <FaPersonPregnant />,
    path: "/pregnancy-maternal-care/child-care/learn",
  },
  {
    title: "Family Planning",
    description: "Contraception options, effectiveness, and choosing a method.",
    icon: <FaUsers />,
    path: "/family-planning/learn",
  },
  {
    title: "STI Prevention and Care",
    description: "Common STIs, prevention, testing, and treatment.",
    icon: <FaShieldVirus />,
    path: "/sti-prevention-care/learn",
  },
  {
    title: "Mental Health",
    description: "Coping strategies, stigma, and emotional wellbeing.",
    icon: <FaBrain />,
    path: "/mental-health/learn",
  },
  {
    title: "Nutrition",
    description: "Balanced eating, macronutrients, and healthy habits.",
    icon: <FaAppleWhole />,
    path: "/nutrition/learn",
  },
  {
    title: "Adolescence & Puberty",
    description: "Physical changes, emotions, and healthy relationships.",
    icon: <FaChild />,
    path: "/adolescence-puberty/learn",
  },
];

const Learn = () => {
  const navigate = useNavigate();

  return (
    <div className="learn-hub-page">
      <div className="page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1>Learn</h1>
      </div>

      <p className="learn-hub-intro">
        Explore trusted, easy-to-understand lessons across every health
        topic.
      </p>

      <div className="learn-hub-grid">
        {topics.map((topic) => (
          <Link key={topic.path} to={topic.path} className="learn-hub-card">
            <span className="learn-hub-icon">{topic.icon}</span>
            <div className="learn-hub-content">
              <h2>{topic.title}</h2>
              <p>{topic.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Learn;