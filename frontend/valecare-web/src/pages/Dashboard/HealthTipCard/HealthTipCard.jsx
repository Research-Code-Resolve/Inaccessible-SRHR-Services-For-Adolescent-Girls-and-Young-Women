import "./HealthTipCard.css";
import { Link } from "react-router-dom";
import { FaLightbulb, FaArrowRight } from "react-icons/fa";

const HealthTipCard = ({
  title = "Today's Health Tip",
  tip,
  learnMoreLink = "/learn",
}) => {
  return (
    <div className="health-tip-card">

      <div className="health-tip-header">

        <div className="tip-icon">
          <FaLightbulb />
        </div>

        <h3>{title}</h3>

      </div>

      <p className="health-tip-text">
        {tip}
      </p>

      <Link
        to={learnMoreLink}
        className="learn-more-link"
      >
        Learn More

        <FaArrowRight />
      </Link>

    </div>
  );
};

export default HealthTipCard;