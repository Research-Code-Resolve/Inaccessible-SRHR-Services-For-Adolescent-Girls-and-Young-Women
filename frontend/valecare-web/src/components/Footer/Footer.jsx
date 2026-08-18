import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">

          <div className="footer-brand">
            <h2>ValeCare</h2>

            <p>
              Empowering adolescent girls and young women with trusted
              sexual and reproductive healthcare, education, and digital
              support.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>

            <Link to="/">Home</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/help">Help &amp; Support</Link>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>

            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#" aria-label="X">
                <FaXTwitter />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© {year} ValeCare. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;