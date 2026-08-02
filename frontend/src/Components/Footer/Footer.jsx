import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaShieldAlt
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          {/* Logo & Description */}

          <div className="footer-brand">

            <div className="footer-logo">

              <div className="footer-logo-icon">
                <FaShieldAlt />
              </div>

              <h2>ValeCare</h2>

            </div>

            <p>
              A confidential digital platform helping adolescent girls
              and young women access trusted sexual and reproductive
              health information, services and support.
            </p>

            <div className="socials">

              <a href="#"><FaFacebookF /></a>

              <a href="#"><FaInstagram /></a>

              <a href="#"><FaTwitter /></a>

              <a href="#"><FaLinkedinIn /></a>

            </div>

          </div>

          {/* Platform */}

          <div>

            <h4>Platform</h4>

            <ul>

              <li><a href="#">Resources</a></li>

              <li><a href="#">Clinics</a></li>

              <li><a href="#">Community</a></li>

              <li><a href="#">Privacy</a></li>

            </ul>

          </div>

          {/* Help */}

          <div>

            <h4>Support</h4>

            <ul>

              <li><a href="#">Help Centre</a></li>

              <li><a href="#">Contact</a></li>

              <li><a href="#">FAQs</a></li>

              <li><a href="#">Emergency Help</a></li>

            </ul>

          </div>

        </div>

        <div className="footer-bottom">

          <p>

            © 2026 ValeCare. All Rights Reserved.

          </p>

          <span>

            Safe • Secure • Confidential

          </span>

        </div>

      </div>

    </footer>
  );
};

export default Footer;