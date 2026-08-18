import "./FloatingAI.css";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaCommentDots,
} from "react-icons/fa";

const FloatingAI = () => {
  return (
    <Link
      to="/ai-assistant"
      className="floating-ai"
      aria-label="Open AI Health Assistant"
    >
      <div className="notification-dot"></div>

      <FaRobot className="robot-icon" />

      <div className="tooltip">

        <FaCommentDots />

        <span>Ask ValeCare AI</span>

      </div>

    </Link>
  );
};

export default FloatingAI;