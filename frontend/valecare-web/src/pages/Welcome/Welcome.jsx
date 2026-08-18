import "./Welcome.css";
import { Link } from "react-router-dom";
import clinic1 from "../../assets/clinic-image1.jpg";
import { welcomeData } from "./welcomeData";
import LanguageSelect from "../../components/LanguageSelect/LanguageSelect";

const Welcome = () => {
  return (
    <main className="welcome-page">
<div className="welcome-top-bar">
  <LanguageSelect />
</div>
      {/* Hero Section */}
      <section className="welcome-hero">
        <div className="welcome-container welcome-hero-grid">

          {/* Left Content */}
          <div className="welcome-content">

            <span className="welcome-label">Your health. Your choice.</span>

            <h1 className="welcome-title">
              Welcome to <span>ValeCare</span>
            </h1>

            <p className="welcome-description">
              {welcomeData.heroDescription}
            </p>

            {/* Privacy */}
            <div className="privacy-message">
              <span className="privacy-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3.5 5 6.3v5.1c0 4.6 3 8.9 7 10.1 4-1.2 7-5.5 7-10.1V6.3L12 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m8.7 12.2 2.2 2.2 4.4-4.4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <div>
                <strong>Your data is safe and confidential</strong>
                <p>Your privacy and wellbeing are important to us.</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="welcome-actions">
              {/* Create account -> /register */}
              <Link to="/register" className="welcome-btn primary-btn">
                Create account
              </Link>

              {/* Continue as guest -> /dashboard */}
              <Link to="/dashboard" className="welcome-btn secondary-btn">
                Continue as guest
              </Link>
            </div>

            {/* Sign In */}
            <p className="signin-text">
              Already have an account?{" "}
              {/* Sign in -> /signin */}
              <Link to="/signin">Sign in</Link>
            </p>
          </div>

          {/* Right Image */}
          <div className="welcome-image-wrapper">
            <div className="welcome-image">
              <img src={clinic1} alt="Healthcare professional providing care" />
              <div className="welcome-image-badge">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3.5 5 6.3v5.1c0 4.6 3 8.9 7 10.1 4-1.2 7-5.5 7-10.1V6.3L12 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m8.7 12.2 2.2 2.2 4.4-4.4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Verified care</span>
              </div>
            </div>

            <div className="image-caption">
              <strong>Trusted health information</strong>
              <span>Learn, track and access support in one place.</span>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="welcome-features">
        <div className="welcome-container">

          <div className="features-heading">
            <span className="welcome-label">Explore ValeCare</span>
            <h2>Everything you need in one place</h2>
            <p>
              Get reliable information and connect with health services
              designed around your needs.
            </p>
          </div>

          <div className="features-grid">

            <div className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 19.5V5.8c0-.7.5-1.2 1.2-1.4C7.4 3.9 10 3.6 12 4.6c2-1 4.6-.7 6.8-.2.7.2 1.2.7 1.2 1.4v13.7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 19.5c2.2-.6 4.8-.9 6.8-.1M20 19.5c-2.2-.6-4.8-.9-6.8-.1M12 4.6v14.8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Learn</h3>
              <p>
                Access trusted information on sexual, reproductive and
                general health.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 20.2s-7.5-4.6-9.4-9.6C1.4 6.9 3.6 4 6.8 4c1.9 0 3.6 1 4.7 2.6C12.6 5 14.3 4 16.2 4c3.2 0 5.4 2.9 4.2 6.6-1.9 5-9.4 9.6-9.4 9.6Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Get support</h3>
              <p>
                Find health services, consultations and support when you
                need them.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 13.5 9 18l11-12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Track your health</h3>
              <p>
                Keep track of important health information using simple and
                accessible tools.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Statement */}
      <section className="welcome-bottom">
        <div className="welcome-container welcome-bottom-inner">
          <h2>Your health journey starts here.</h2>
          <p>
            ValeCare gives you access to information, tools and support
            whenever you need them.
          </p>
          {/* Create account -> /register */}
          <Link to="/register" className="welcome-btn primary-btn on-dark">
            Create account
          </Link>
        </div>
      </section>

    </main>
  );
};

export default Welcome;