import "./ModuleCard.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ModuleCard = ({
  title,
  description,
  icon: Icon,
  to,
  color = "#0B6E4F",
}) => {
  return (
    <Link
      to={to}
      className="module-card"
    >
      <div
        className="module-icon"
        style={{
          backgroundColor: `${color}15`,
          color,
        }}
      >
        <Icon />
      </div>

      <div className="module-content">

        <h3>{title}</h3>

        <p>{description}</p>

      </div>

      <FaArrowRight className="module-arrow" />
    </Link>
  );
};

export default ModuleCard;