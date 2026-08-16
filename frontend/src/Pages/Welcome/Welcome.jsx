import { Link, useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {

    const navigate = useNavigate();

    return (

        <div className="page welcome-page">

            <div className="welcome-content">

                <img
                    src="/images/logo.png"
                    alt="ValeCare Logo"
                    className="welcome-logo"
                />

                <h1>ValeCare</h1>

                <p className="welcome-description">
                    Your trusted companion for sexual and reproductive
                    health education, support and services.
                </p>

                <div className="card privacy-card">

                    <h3>🔒 Your Privacy Matters</h3>

                    <p>
                        We understand that sexual and reproductive health is
                        personal. ValeCare is designed to help protect your
                        privacy by handling your information with care.
                    </p>

                    <p>
                        You decide what information you share, and you may
                        continue as a guest if you prefer not to create an
                        account.
                    </p>

                    <div className="trust-items">

                        <span>✓ Confidential</span>

                        <span>✓ Secure</span>

                        <span>✓ Your Choice</span>

                    </div>

                    <Link
                        className="learn-more"
                        to="/privacy-policy"
                    >
                        Learn More →
                    </Link>

                </div>

            </div>

            <div className="welcome-actions">

                <button
                    onClick={() => navigate("/register")}
                >
                    Create Account
                </button>

                <button
                    className="secondary-btn"
                    onClick={() => navigate("/dashboard")}
                >
                    Continue as Guest
                </button>

                <p className="login-text">

                    Already have an account?

                    <span
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </span>

                </p>

            </div>

            <div className="welcome-footer">

                <Link to="/language">

                    Language

                </Link>

                <span>|</span>

                <Link to="/privacy-policy">

                    Privacy Policy

                </Link>

            </div>

        </div>

    );

}

export default Welcome;