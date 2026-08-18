import "./Topbar.css";
import {
  FaBars,
  FaBell,
  FaUserCircle,
  FaGlobeAfrica,
  FaSignOutAlt,
} from "react-icons/fa";

const Topbar = ({
  title = "Dashboard",
  username = "Guest",
  onMenuClick,
  onNotificationClick,
  onLanguageClick,
  onProfileClick,
  onLogout,
}) => {
  return (
    <header className="topbar">

      <div className="topbar-left">

        <button
          className="menu-button"
          onClick={onMenuClick}
          aria-label="Open Menu"
        >
          <FaBars />
        </button>

        <h2>{title}</h2>

      </div>

      <div className="topbar-right">

        <button
          className="topbar-icon"
          onClick={onNotificationClick}
          aria-label="Notifications"
        >
          <FaBell />
        </button>

        <button
          className="topbar-icon"
          onClick={onLanguageClick}
          aria-label="Language"
        >
          <FaGlobeAfrica />
        </button>

        <button
          className="profile-button"
          onClick={onProfileClick}
        >
          <FaUserCircle />

          <span>{username}</span>

        </button>

        {onLogout && (
          <button
            className="topbar-icon logout"
            onClick={onLogout}
            aria-label="Logout"
            title="Logout"
          >
            <FaSignOutAlt />
          </button>
        )}

      </div>

    </header>
  );
};

export default Topbar;