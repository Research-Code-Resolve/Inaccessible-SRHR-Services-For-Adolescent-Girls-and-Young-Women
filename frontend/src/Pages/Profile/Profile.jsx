import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPen, FaChevronRight } from "react-icons/fa6";
import { useAuth } from "../../context/AuthContext";
import "./Profile.css";

// Assumes AuthContext exposes { user } with at least { name, email }.
// Adjust field names below if your user object is shaped differently.

const quickLinks = [
  { label: "Trackers", path: "/trackers" },
  { label: "Consultation", path: "/consultation" },
  { label: "Notifications", path: "/notifications" },
  { label: "Settings", path: "/settings" },
];

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const displayName = user?.name || "Your Name";
  const displayEmail = user?.email || "you@example.com";
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <div className="profile-page">
      <div className="page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1>Profile</h1>
      </div>

      {/* Profile summary card */}
      <div className="profile-card">
        <div className="profile-avatar">
          {initial || <FaUser />}
        </div>

        <div className="profile-info">
          <h2>{displayName}</h2>
          <span className="profile-email">
            <FaEnvelope /> {displayEmail}
          </span>
        </div>

        <button className="profile-edit-btn" aria-label="Edit profile">
          <FaPen />
        </button>
      </div>

      {/* Personal details */}
      <div className="profile-section">
        <h3>Personal Details</h3>

        <div className="profile-detail-row">
          <span>Full Name</span>
          <strong>{displayName}</strong>
        </div>

        <div className="profile-detail-row">
          <span>Email</span>
          <strong>{displayEmail}</strong>
        </div>
      </div>

      {/* Quick links */}
      <div className="profile-section">
        <h3>Quick Access</h3>

        {quickLinks.map((link) => (
          <Link key={link.path} to={link.path} className="profile-link-row">
            <span>{link.label}</span>
            <FaChevronRight />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Profile;