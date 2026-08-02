import { FaLock, FaShieldAlt, FaUserShield } from "react-icons/fa";

const PrivacyCard = () => {
  return (
    <div className="privacy-card">

      <div className="privacy-header">

        <div className="privacy-icon">
          <FaShieldAlt />
        </div>

        <div>
          <h4>Privacy First</h4>
          <p>Your information stays protected.</p>
        </div>

      </div>

      <div className="privacy-features">

        <div className="privacy-item">
          <FaLock />
          <span>End-to-End Encryption</span>
        </div>

        <div className="privacy-item">
          <FaUserShield />
          <span>Anonymous Access</span>
        </div>

      </div>

    </div>
  );
};

export default PrivacyCard;