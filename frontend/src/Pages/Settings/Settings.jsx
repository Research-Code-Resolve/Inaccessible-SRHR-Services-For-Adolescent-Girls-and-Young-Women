import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaBell,
  FaGlobe,
  FaChevronRight,
  FaTriangleExclamation,
} from "react-icons/fa6";
import { useAuth } from "../../context/AuthContext";
import "./Settings.css";

const Settings = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Local-only toggle state for now — wire these up to your backend/user
  // preferences API so choices actually persist per account.
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [reminderEnabled, setReminderEnabled] = useState(true);

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <div className="settings-page">
      <div className="page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1>Settings</h1>
      </div>

      {/* Account */}
      <div className="settings-section">
        <h3>Account</h3>

        <Link to="/profile" className="settings-row">
          <span className="settings-row-icon">
            <FaUser />
          </span>
          <span className="settings-row-label">Edit Profile</span>
          <FaChevronRight className="settings-row-chevron" />
        </Link>

        <button className="settings-row" type="button">
          <span className="settings-row-icon">
            <FaLock />
          </span>
          <span className="settings-row-label">Change Password</span>
          <FaChevronRight className="settings-row-chevron" />
        </button>
      </div>

      {/* Notifications */}
      <div className="settings-section">
        <h3>Notifications</h3>

        <div className="settings-toggle-row">
          <div>
            <span className="settings-row-label">Push Notifications</span>
            <p>Get alerts directly on this device.</p>
          </div>
          <label className="settings-switch">
            <input
              type="checkbox"
              checked={pushEnabled}
              onChange={() => setPushEnabled((v) => !v)}
            />
            <span className="settings-slider" />
          </label>
        </div>

        <div className="settings-toggle-row">
          <div>
            <span className="settings-row-label">Email Notifications</span>
            <p>Receive updates and reminders by email.</p>
          </div>
          <label className="settings-switch">
            <input
              type="checkbox"
              checked={emailEnabled}
              onChange={() => setEmailEnabled((v) => !v)}
            />
            <span className="settings-slider" />
          </label>
        </div>

        <div className="settings-toggle-row">
          <div>
            <span className="settings-row-label">Cycle & Health Reminders</span>
            <p>Reminders for upcoming periods, appointments, and more.</p>
          </div>
          <label className="settings-switch">
            <input
              type="checkbox"
              checked={reminderEnabled}
              onChange={() => setReminderEnabled((v) => !v)}
            />
            <span className="settings-slider" />
          </label>
        </div>
      </div>

      {/* Preferences */}
      <div className="settings-section">
        <h3>Preferences</h3>

        <button className="settings-row" type="button">
          <span className="settings-row-icon">
            <FaGlobe />
          </span>
          <span className="settings-row-label">Language</span>
          <span className="settings-row-value">English</span>
          <FaChevronRight className="settings-row-chevron" />
        </button>

        <button className="settings-row" type="button">
          <span className="settings-row-icon">
            <FaBell />
          </span>
          <span className="settings-row-label">Notification Sound</span>
          <span className="settings-row-value">Default</span>
          <FaChevronRight className="settings-row-chevron" />
        </button>
      </div>

      {/* Danger zone */}
      <div className="settings-section danger">
        <h3>Danger Zone</h3>

        <button className="settings-danger-row" type="button">
          <FaTriangleExclamation />
          <span>Delete Account</span>
        </button>
      </div>

      <button className="settings-logout-btn" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default Settings;