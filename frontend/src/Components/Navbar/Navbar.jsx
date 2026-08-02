import "./Navbar.css";
import { useState } from "react";
import {
  FaGlobe,
  FaBars,
  FaTimes,
  FaShieldAlt,
} from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="container nav-container">

        {/* Logo */}

        <div className="logo">

          <div className="logo-icon">

            <FaShieldAlt />

          </div>

          <span>ValeCare</span>

        </div>

        {/* Navigation */}

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <a href="#">Resources</a>

          <a href="#">Clinics</a>

          <a href="#">Community</a>

          <a href="#">About</a>

        </nav>

        {/* Right Side */}

        <div className="nav-actions">

          <button className="language">

            <FaGlobe />

            EN

          </button>

          <button className="signin">

            Sign In

          </button>

          <button className="join-btn">

            Join Now

          </button>

        </div>

        {/* Mobile */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

    </header>
  );
};

export default Navbar;