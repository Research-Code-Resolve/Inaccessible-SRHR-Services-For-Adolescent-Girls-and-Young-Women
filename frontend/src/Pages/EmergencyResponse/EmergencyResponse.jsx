import { ArrowLeft, Phone, Ambulance, Hospital, ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

import FloatingAI from "../../components/FloatingAI/FloatingAI";

import "./EmergencyResponse.css";

function EmergencyResponse() {

    const navigate = useNavigate();

    return (

        <div className="page">

            <header className="module-header">

                <button
                    className="back-button"
                    onClick={() => navigate("/dashboard")}
                >

                    <ArrowLeft size={20} />

                </button>

                <h2>Emergency Response</h2>

            </header>

            <section className="emergency-warning">

                <ShieldAlert size={40} />

                <h3>Need Immediate Help?</h3>

                <p>

                    If you are experiencing a medical emergency,
                    severe bleeding, sexual assault, severe pain,
                    loss of consciousness or any life-threatening
                    condition, seek emergency medical care immediately.

                </p>

            </section>

            <section className="emergency-grid">

                <button
                    className="emergency-card"
                    onClick={() => navigate("/find-health-centre")}
                >

                    <Hospital size={32} />

                    <h4>Nearest Health Centre</h4>

                    <p>Find emergency healthcare services near you.</p>

                </button>

                <button
                    className="emergency-card"
                    onClick={() => navigate("/emergency-numbers")}
                >

                    <Phone size={32} />

                    <h4>Emergency Numbers</h4>

                    <p>View important emergency contacts.</p>

                </button>

                <button
                    className="emergency-card"
                    onClick={() => navigate("/ambulance")}
                >

                    <Ambulance size={32} />

                    <h4>Request Ambulance</h4>

                    <p>Get emergency transport information.</p>

                </button>

            </section>

            <FloatingAI />

        </div>

    );

}

export default EmergencyResponse;