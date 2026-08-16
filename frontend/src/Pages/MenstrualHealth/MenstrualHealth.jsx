import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import FloatingAI from "../../components/FloatingAI/FloatingAI";

import menstrualHealthData from "./menstrualHealth.js";

import "./MenstrualHealth.css";

function MenstrualHealth() {

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

                <h2>Menstrual Health</h2>

            </header>

            <section className="module-intro">

                <p>

                    Learn about menstruation, menstrual hygiene and
                    monitor your menstrual cycle using the tracker.

                </p>

            </section>

            <section className="module-section">

                <h3>Choose a topic</h3>

                {menstrualHealthData.map((item) => (

                    <button
                        key={item.id}
                        className="topic-card"
                        onClick={() => navigate(item.route)}
                    >

                        <h4>

                            {item.title}

                        </h4>

                        <p>

                            {item.description}

                        </p>

                    </button>

                ))}

            </section>

            <FloatingAI />

        </div>

    );

}

export default MenstrualHealth;