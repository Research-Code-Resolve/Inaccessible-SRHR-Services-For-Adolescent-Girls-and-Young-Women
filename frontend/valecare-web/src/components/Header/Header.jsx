import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Header.css";
import { FaBars, FaXmark } from "react-icons/fa6";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Learn", path: "/learn" },
  { label: "Health Services", path: "/health-services" },
  { label: "Consultation", path: "/consultation" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo size="small" />

        <nav className="main-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "main-nav-link active" : "main-nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <NavLink to="/login" className="header-login-link">
            Login
          </NavLink>
          <NavLink to="/register" className="header-cta">
            Create Account
          </NavLink>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true">
          <div className="mobile-menu-scrim" onClick={closeMenu} />

          <div className="mobile-menu-panel">
            <div className="mobile-menu-header">
              <Logo size="small" />

              <button
                type="button"
                className="mobile-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <FaXmark />
              </button>
            </div>

            <nav className="mobile-nav">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "mobile-nav-link active" : "mobile-nav-link"
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mobile-menu-footer">
              <NavLink
                to="/login"
                onClick={closeMenu}
                className="header-login-link on-mobile"
              >
                Login
              </NavLink>
              <NavLink to="/register" onClick={closeMenu} className="header-cta">
                Create Account
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;