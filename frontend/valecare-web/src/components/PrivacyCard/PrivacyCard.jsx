import "./PrivacyCard.css";
import { FaShieldAlt, FaLock } from "react-icons/fa";

const PrivacyCard = ({
  title = "Your Privacy Matters",
  description,
  highlights = [],
}) => {
  return (
    <div className="privacy-card">

      <div className="privacy-header">

        <div className="privacy-icon">
          <FaShieldAlt />
        </div>

        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

      </div>

      {highlights.length > 0 && (
        <div className="privacy-list">

          {highlights.map((item, index) => (

            <div
              className="privacy-item"
              key={index}
            >
              <FaLock className="lock-icon" />

              <span>{item}</span>

            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default PrivacyCard;