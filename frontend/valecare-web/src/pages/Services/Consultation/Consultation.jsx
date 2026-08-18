import { Link } from "react-router-dom";
import { FaUserDoctor, FaVideo, FaBuilding } from "react-icons/fa6";

import "./Consultation.css";

const Consultation = () => {
  return (
    <div className="consultation-page">

      {/* Header */}

      <div className="page-header">

        <Link
          to="/services"
          className="back-button"
        >
          ←
        </Link>

        <h1>Consultation</h1>

      </div>

      {/* Introduction */}

      <div className="consultation-intro">

        <div className="consultation-icon">
          <FaUserDoctor />
        </div>

        <h2>Healthcare Consultation</h2>

        <p>
          Choose how you would like to access a healthcare
          consultation.
        </p>

      </div>

      {/* Consultation Options */}

      <div className="consultation-options">

        {/* Video Consultation */}

        <Link
          to="/services/consultation/video"
          className="consultation-card"
        >

          <div className="option-icon">
            <FaVideo />
          </div>

          <div className="option-content">

            <h3>Video Consultation</h3>

            <p>
              Speak with a healthcare professional through
              a video consultation.
            </p>

          </div>

          <span className="option-arrow">
            →
          </span>

        </Link>

        {/* In-Person Consultation */}

        <Link
          to="/services/consultation/in-person"
          className="consultation-card"
        >

          <div className="option-icon">
            <FaBuilding />
          </div>

          <div className="option-content">

            <h3>In-Person Consultation</h3>

            <p>
              Find a suitable health facility for an
              in-person consultation.
            </p>

          </div>

          <span className="option-arrow">
            →
          </span>

        </Link>

      </div>

    </div>
  );
};

export default Consultation;ss