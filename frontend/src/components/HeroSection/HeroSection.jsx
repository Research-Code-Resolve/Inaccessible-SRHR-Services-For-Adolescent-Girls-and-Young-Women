import "./HeroSection.css";
import Logo from "../Logo/Logo";

const HeroSection = ({
  image,
  title,
  subtitle,
  children,
}) => {
  return (
    <section className="hero-section">

      <Logo />

      <div className="hero-image">

        <img
          src={image}
          alt="ValeCare"
        />

      </div>

      <div className="hero-content">

        <h2>{title}</h2>

        <p>{subtitle}</p>

        {children}

      </div>

    </section>
  );
};

export default HeroSection;