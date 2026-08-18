import { Link } from "react-router-dom";
import {
  FaUserDoctor,
  FaUsers,
  FaAmbulance,
} from "react-icons/fa6";

import "./Services.css";

const Services = () => {
  return (
    <div className="services-page">

      {/* Header */}

      <div className="page-header">

        <Link
          to="/dashboard"
          className="back-button"
        >
          ←
        </Link>

        <h1>Services</h1>

      </div>

      {/* Services */}

      <div className="services-list">

        {/* Consultation */}

        <Link
          to="/services/consultation"
          className="service-card"
        >

          <div className="service-icon">
            <FaUserDoctor />
          </div>

          <div className="service-content">

            <h2>Consultation</h2>

            <p>
              Connect with a healthcare professional
              for health advice and consultation.
            </p>

          </div>

          <span className="service-arrow">
            →
          </span>

        </Link>

        {/* Support Groups */}

        <Link
          to="/services/support-groups"
          className="service-card"
        >

          <div className="service-icon">
            <FaUsers />
          </div>

          <div className="service-content">

            <h2>Support Groups</h2>

            <p>
              Find support groups and community spaces
              where you can connect with others.
            </p>

          </div>

          <span className="service-arrow">
            →
          </span>

        </Link>

        {/* Emergency Response */}

        <Link
          to="/services/emergency-response"
          className="service-card emergency-service"
        >

          <div className="service-icon emergency-icon">
            <FaAmbulance />
          </div>

          <div className="service-content">

            <h2>Emergency Response</h2>

            <p>
              Find emergency assistance and important
              contacts when urgent help is needed.
            </p>

          </div>

          <span className="service-arrow">
            →
          </span>

        </Link>

      </div>

    </div>
  );
};

export default Services;