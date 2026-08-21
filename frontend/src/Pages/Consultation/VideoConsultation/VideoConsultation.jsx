import { Link } from "react-router-dom";
import { FaVideo, FaCheckCircle } from "react-icons/fa";
import "./VideoConsultation.css";

const VideoConsultation = () => {
  return (
    <div className="video-page">

      <div className="page-header">

        <Link
          to="/consultation"
          className="back-button"
        >
          ←
        </Link>

        <h1>Video Consultation</h1>

      </div>

      <div className="video-card">

        <div className="video-icon">
          <FaVideo />
        </div>

        <h2>Video Consultation</h2>

        <p>
          Connect with a healthcare provider through a secure
          video consultation.
        </p>

        <div className="coming-soon">

          <h3>Currently Unavailable</h3>

          <p>
            This feature is under development and will be
            available in a future update.
          </p>

        </div>

        <div className="feature-list">

          <div className="feature-item">
            <FaCheckCircle />
            <span>Secure video consultations</span>
          </div>

          <div className="feature-item">
            <FaCheckCircle />
            <span>Licensed healthcare providers</span>
          </div>

          <div className="feature-item">
            <FaCheckCircle />
            <span>Private healthcare discussions</span>
          </div>

          <div className="feature-item">
            <FaCheckCircle />
            <span>Follow-up consultations</span>
          </div>

        </div>

        <div className="status">

          <span className="status-dot"></span>

          <span>Coming Soon</span>

        </div>

        <Link
          to="/consultation"
          className="back-consultation"
        >
          Back to Consultation
        </Link>

      </div>

    </div>
  );
};

export default VideoConsultation;