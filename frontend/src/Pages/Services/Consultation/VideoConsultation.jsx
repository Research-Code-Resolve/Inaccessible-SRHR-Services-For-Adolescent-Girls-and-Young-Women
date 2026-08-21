import { Link } from "react-router-dom";
import { FaVideo, FaUserDoctor } from "react-icons/fa6";

import "./VideoConsultation.css";

const VideoConsultation = () => {
  return (
    <div className="video-consultation-page">

      {/* Header */}

      <div className="page-header">

        <Link
          to="/services/consultation"
          className="back-button"
        >
          ←
        </Link>

        <h1>Video Consultation</h1>

      </div>

      {/* Introduction */}

      <div className="video-intro">

        <div className="video-icon">
          <FaVideo />
        </div>

        <h2>Speak With a Healthcare Professional</h2>

        <p>
          Connect with a healthcare professional through
          a secure video consultation.
        </p>

      </div>

      {/* Consultation Information */}

      <div className="video-card">

        <div className="card-icon">
          <FaUserDoctor />
        </div>

        <div>

          <h3>Before Your Consultation</h3>

          <p>
            Make sure you have a stable internet connection,
            a quiet place and enough privacy for your
            consultation.
          </p>

        </div>

      </div>

      {/* Start Consultation */}

      <div className="video-action">

        <button className="start-consultation-button">
          Start Video Consultation
        </button>

        <p>
          You will be connected when a healthcare
          professional is available.
        </p>

      </div>

    </div>
  );
};

export default VideoConsultation;