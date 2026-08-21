import { Link, useNavigate } from "react-router-dom";
import "./Services.css";

const serviceTypes = [
  {
    id: "testing",
    title: "STI Testing",
    description:
      "Confidential testing for chlamydia, gonorrhea, HIV, syphilis, and other common STIs.",
    icon: "🧪",
  },
  {
    id: "treatment",
    title: "Treatment",
    description:
      "Access medication and follow-up care for diagnosed STIs, guided by a healthcare provider.",
    icon: "💊",
  },
  {
    id: "counseling",
    title: "Counseling & Support",
    description:
      "Speak with a provider about symptoms, risk, prevention, or partner notification.",
    icon: "💬",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      <div className="page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1>Find Testing & Treatment</h1>
      </div>

      <p className="services-intro">
        Choose the type of support you're looking for. All services are
        confidential.
      </p>

      <div className="services-list">
        {serviceTypes.map((service) => (
          <div key={service.id} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="services-actions">
        <Link to="/health-services" className="services-action-btn primary">
          Find a Health Center Near You
        </Link>

        <Link to="/consultation/book" className="services-action-btn secondary">
          Book a Consultation
        </Link>
      </div>
    </div>
  );
};

export default Services;