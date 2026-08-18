import "./FeatureCard.css";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="feature-card">

      <div className="feature-icon">

        <Icon />

      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </div>
  );
};

export default FeatureCard;