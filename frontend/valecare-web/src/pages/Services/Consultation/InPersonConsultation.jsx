import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaLocationDot,
  FaMagnifyingGlass,
} from "react-icons/fa6";

import "./InPersonConsultation.css";

const InPersonConsultation = () => {
  return (
    <div className="in-person-page">

      {/* Header */}

      <div className="page-header">

        <Link
          to="/services/consultation"
          className="back-button"
        >
          ←
        </Link>

        <h1>In-Person Consultation</h1>

      </div>

      {/* Introduction */}

      <div className="in-person-intro">

        <div className="in-person-icon">
          <FaBuilding />
        </div>

        <h2>Find In-Person Care</h2>

        <p>
          Find a health facility where you can receive
          an in-person consultation.
        </p>

      </div>

      {/* Search */}

      <div className="facility-search">

        <FaMagnifyingGlass />

        <input
          type="text"
          placeholder="Search by hospital, clinic or location..."
        />

      </div>

      {/* Location */}

      <button className="location-button">

        <FaLocationDot />

        <span>Use My Location</span>

      </button>

    </div>
  );
};

export default InPersonConsultation;vsss