import { Link, useNavigate } from "react-router-dom";
import "./Support.css";

const supportOptions = [
  {
    id: "counseling",
    title: "One-on-One Counseling",
    description:
      "Speak confidentially with a licensed counselor about what you're going through.",
    icon: "🗣️",
  },
  {
    id: "peer-support",
    title: "Peer Support Groups",
    description:
      "Connect with others navigating similar experiences in a supportive setting.",
    icon: "👥",
  },
  {
    id: "self-care",
    title: "Self-Care Resources",
    description:
      "Guided tools and exercises for stress, sleep, and everyday emotional wellbeing.",
    icon: "🌿",
  },
];

const Support = () => {
  const navigate = useNavigate();

  return (
    <div className="support-page">
      <div className="page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1>Support & Community</h1>
      </div>

      <p className="support-intro">
        You don't have to navigate this alone. Explore ways to connect with
        support, at your own pace.
      </p>

      <div className="support-list">
        {supportOptions.map((option) => (
          <div key={option.id} className="support-card">
            <span className="support-icon">{option.icon}</span>
            <div className="support-content">
              <h2>{option.title}</h2>
              <p>{option.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="support-actions">
        <Link to="/consultation/book" className="support-action-btn primary">
          Book a Counseling Session
        </Link>

        <Link to="/health-services" className="support-action-btn secondary">
          Find Support Services Near You
        </Link>
      </div>

      <div className="support-crisis-note">
        <strong>If you're in crisis or need immediate help,</strong> please
        reach out to a local emergency service or crisis helpline right away
        — you deserve support, and it's available.
      </div>
    </div>
  );
};

export default Support;