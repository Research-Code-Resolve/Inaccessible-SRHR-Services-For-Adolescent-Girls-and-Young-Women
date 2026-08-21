import { useState } from "react";
import "../../pages/Dashboard/Dashboard.css"; // shared shell stylesheet — see file for sidebar/header/footer/dashboard styles
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import Logo from "../Logo/Logo";
import { menuItems } from "./sidebarData";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  // Only show items that either don't require auth, or the user is
  // logged in for. Guests never see Notifications/Profile/Settings/Logout.
  const visibleItems = menuItems.filter(
    (item) => !item.authOnly || isAuthenticated
  );

  // Tracks which expandable sections are open, keyed by item.id.
  // A section auto-opens if the current route matches one of its children.
  const [openSections, setOpenSections] = useState(() => {
    const initial = {};
    visibleItems.forEach((item) => {
      if (item.children) {
        initial[item.id] = item.children.some(
          (child) => child.path === location.pathname
        );
      }
    });
    return initial;
  });

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Logo size="small" showTagline={false} />
        </div>

        <nav className="sidebar-nav">
          {visibleItems.map((item) => {
            const Icon = item.icon;

            // Item with sub-items (e.g. "Tracker" -> Menstrual / Pregnancy)
            if (item.children && item.children.length > 0) {
              const isSectionOpen = openSections[item.id];
              const hasActiveChild = item.children.some(
                (child) => child.path === location.pathname
              );

              return (
                <div className="sidebar-group" key={item.id}>
                  <button
                    type="button"
                    className={`sidebar-link sidebar-group-toggle ${
                      hasActiveChild ? "active" : ""
                    }`}
                    onClick={() => toggleSection(item.id)}
                    aria-expanded={isSectionOpen}
                  >
                    <Icon />
                    <span>{item.title}</span>
                    <FaChevronDown
                      className={`sidebar-chevron ${
                        isSectionOpen ? "is-open" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`sidebar-submenu ${
                      isSectionOpen ? "is-open" : ""
                    }`}
                  >
                    {item.children.map((child) => (
                      <NavLink
                        key={child.id}
                        to={child.path}
                        className={({ isActive }) =>
                          isActive
                            ? "sidebar-sublink active"
                            : "sidebar-sublink"
                        }
                        onClick={onClose}
                      >
                        <span className="sidebar-sublink-dot" />
                        <span className="sidebar-sublink-label">{child.title}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }

            // Regular flat item
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "sidebar-link active" : "sidebar-link"
                }
                onClick={onClose}
              >
                <Icon />
                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;