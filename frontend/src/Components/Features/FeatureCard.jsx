import "./Features.css";

const FeatureCard = ({ icon, title, description, button }) => {
  return (
    <div className="feature-card">

      <div className="feature-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button>{button}</button>

    </div>
  );
};

export default FeatureCard;