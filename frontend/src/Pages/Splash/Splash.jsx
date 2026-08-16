import { useNavigate } from "react-router-dom";
import "./Splash.css";

function Splash() {

    const navigate = useNavigate();

    return (

        <div className="page splash-page">

            <div className="splash-content">

                <img
                    src="/images/logo.png"
                    alt="ValeCare Logo"
                    className="splash-logo"
                />

                <h1>ValeCare</h1>

                <p>
                    Sexual & Reproductive
                    <br />
                    Health Companion
                </p>

            </div>

            <button
                onClick={() => navigate("/language")}
            >
                Continue
            </button>

        </div>

    );

}

export default Splash;