import { ArrowLeft, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

import FloatingAI from "../../components/FloatingAI/FloatingAI";
import consultationData from "./consultationData";

import "./Consultation.css";

function Consultation() {

    const navigate = useNavigate();

    return (

        <div className="page">

            <header className="page-header">

                <button
                    className="back-button"
                    onClick={() => navigate("/dashboard")}
                >
                    <ArrowLeft size={20} />
                </button>

                <h2>Consultation</h2>

            </header>

            <section className="consultation-intro">

                <CalendarDays
                    size={50}
                    className="consultation-icon"
                />

                <h3>Talk to a Healthcare Professional</h3>

                <p>

                    Choose the type of consultation you need.
                    Our goal is to connect you with the most
                    appropriate healthcare support.

                </p>

            </section>

            <section className="consultation-list">

                {

                    consultationData.map((item) => (

                        <button

                            key={item.id}

                            className="consultation-card"

                            onClick={() => navigate(item.route)}

                        >

                            <h4>{item.title}</h4>

                            <p>{item.description}</p>

                        </button>

                    ))

                }

            </section>

            <button

                className="primary-button"

                onClick={() => navigate("/book-appointment")}

            >

                Book Consultation

            </button>

            <FloatingAI />

        </div>

    );

}

export default Consultation;