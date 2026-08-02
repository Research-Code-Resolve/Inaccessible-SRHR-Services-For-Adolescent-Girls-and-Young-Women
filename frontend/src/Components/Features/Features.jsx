import "./Features.css";

import {
  FaComments,
  FaBookMedical,
  FaUsers
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="features">

      <div className="container">

        <span className="section-tag">
          Our Features
        </span>

        <h2>
          Designed for <span>Your Well-being</span>
        </h2>

        <p className="section-description">
          Every feature is carefully designed to provide confidential,
          culturally sensitive, and medically accurate sexual and
          reproductive health support whenever you need it.
        </p>

        <div className="feature-grid">

          <FeatureCard
            icon={<FaComments />}
            title="Secure Consultations"
            description="Connect with qualified healthcare professionals through encrypted messaging and confidential appointments."
            button="Learn More"
          />

          <FeatureCard
            icon={<FaBookMedical />}
            title="Resource Library"
            description="Explore clinically verified articles, videos and guides written in simple language for young women."
            button="Browse Resources"
          />

          <FeatureCard
            icon={<FaUsers />}
            title="Community Support"
            description="Join moderated discussion groups where you can learn, ask questions and receive peer support safely."
            button="Join Community"
          />

        </div>

      </div>

    </section>
  );
};

export default Features;