import "./QuickActionCard.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const QuickActionCard = ({
  title,
  description,
  icon: Icon,
  path,
  color = "#0B6E4F",
}) => {
  return (
    <Link
      to={path}
      className="quick-action-card"
    >
      <div
        className="quick-action-icon"
        style={{
          backgroundColor: `${color}15`,
          color,
        }}
      >
        <Icon />
      </div>

      <div className="quick-action-content">

        <h3>{title}</h3>

        <p>{description}</p>

      </div>

      <FaArrowRight className="quick-action-arrow" />
    </Link>
  );
};

export default QuickActionCard;