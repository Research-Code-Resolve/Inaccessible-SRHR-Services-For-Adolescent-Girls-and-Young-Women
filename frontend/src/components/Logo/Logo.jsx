import "./Logo.css";
import { Link } from "react-router-dom";
import logoImg from "../../assets/Screenshot (155)1.png";

const Logo = ({
  showTagline = true,
  size = "large",
}) => {
  return (
    <Link to="/" className={`logo ${size}`}>

      <img
        src={logoImg}
        alt="ValeCare Logo"
        className="logo-image"
      />

      <div className="logo-text">

        <h1>ValeCare</h1>

        {showTagline && (
          <p>
            Your Health. Your Future.
            Our Priority.
          </p>
        )}

      </div>

    </Link>
  );
};

export default Logo;