import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "../../pages/Dashboard/Dashboard.css"; // shared shell stylesheet — see file for sidebar/header/footer/dashboard styles
import { FaBars, FaXmark, FaChevronDown, FaCircleUser } from "react-icons/fa6";
import { useAuth } from "../../context/AuthContext"; // adjust path to match your project

const navItems = [
  { label: "Home", path: "/dashboard" },
  { label: "Contact", path: "/contact" },
  { label: "FAQ", path: "/faq" },
];

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const initials = user?.username
    ? user.username.slice(0, 2).toUpperCase()
    : "";

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the account dropdown on outside click or Escape
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    setOpen(false);
  };

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
          {isAuthenticated ? (
            <div className="account-menu" ref={menuRef}>
              <button
                type="button"
                className="account-trigger"
                onClick={() => setMenuOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={menuOpen}
              >
                {initials ? (
                  <span className="account-avatar account-avatar-initials">
                    {initials}
                  </span>
                ) : (
                  <FaCircleUser className="account-avatar-icon" />
                )}
                <FaChevronDown
                  className={`account-caret ${menuOpen ? "open" : ""}`}
                />
              </button>

              {menuOpen && (
                <div className="account-dropdown" role="menu">
                  <div className="account-dropdown-name">{user.username}</div>
                  <NavLink
                    to="/profile"
                    className="account-dropdown-item"
                    onClick={() => setMenuOpen(false)}
                  >
                    Profile
                  </NavLink>
                  <button
                    type="button"
                    className="account-dropdown-item account-dropdown-logout"
                    onClick={handleLogout}
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to="/signin" className="header-login-link">
                Sign in
              </NavLink>
              <NavLink to="/register" className="header-cta">
                Create Account
              </NavLink>
            </>
          )}

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

            {isAuthenticated && (
              <div className="mobile-account">
                {initials ? (
                  <span className="account-avatar account-avatar-initials">
                    {initials}
                  </span>
                ) : (
                  <FaCircleUser className="account-avatar-icon" />
                )}
                <span className="mobile-account-name">{user.username}</span>
              </div>
            )}

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
              {isAuthenticated && (
                <NavLink to="/profile" onClick={closeMenu} className="mobile-nav-link">
                  Profile
                </NavLink>
              )}
            </nav>

            <div className="mobile-menu-footer">
              {isAuthenticated ? (
                <button type="button" className="header-cta" onClick={handleLogout}>
                  Log out
                </button>
              ) : (
                <>
                  <NavLink
                    to="/signin"
                    onClick={closeMenu}
                    className="header-login-link on-mobile"
                  >
                    Sign in
                  </NavLink>
                  <NavLink
                    to="/register"
                    onClick={closeMenu}
                    className="header-cta"
                  >
                    Create Account
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;