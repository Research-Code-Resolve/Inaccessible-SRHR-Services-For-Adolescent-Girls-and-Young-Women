import { ArrowLeft, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./PrivacyPolicy.css";

function PrivacyPolicy() {

    const navigate = useNavigate();

    return (

        <div className="page">

            <header className="page-header">

                <button
                    className="back-button"
                    onClick={() => navigate("/welcome")}
                >
                    <ArrowLeft size={20} />
                </button>

                <h2>Privacy Policy</h2>

            </header>

            <section className="privacy-hero">

                <ShieldCheck
                    size={60}
                    className="privacy-icon"
                />

                <h3>Your Privacy Matters</h3>

                <p>

                    At <strong>ValeCare</strong>, your privacy comes first.

                    <br /><br />

                    We understand that sexual and reproductive health
                    information is personal. That's why ValeCare is
                    designed to provide a safe, secure and confidential
                    space where you can learn, track your health and
                    access trusted services with confidence.

                    <br /><br />

                    <strong>

                        Your data is safe.
                        <br />
                        Your information is confidential.
                        <br />
                        Your health matters.

                    </strong>

                </p>

            </section>

            <button

                className="primary-button"

                onClick={() => navigate("/welcome")}

            >

                Back to Welcome

            </button>

        </div>

    );

}

export default PrivacyPolicy;