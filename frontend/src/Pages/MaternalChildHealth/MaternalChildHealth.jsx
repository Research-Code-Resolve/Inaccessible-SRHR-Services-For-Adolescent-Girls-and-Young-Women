import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import FloatingAI from "../../components/FloatingAI/FloatingAI";

import data from "./maternalChildHealth.js";

import "./MaternalChildHealth.css";

function MaternalChildHealth() {

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

                <h2>Maternal & Child Health</h2>

            </header>

            <section className="module-intro">

                <p>

                    Learn about pregnancy, caring for your child and
                    track your pregnancy journey.

                </p>

            </section>

            <section className="module-section">

                <h3>Choose a topic</h3>

                {data.map((item) => (

                    <button
                        key={item.id}
                        className="topic-card"
                        onClick={() => navigate(item.route)}
                    >

                        <h4>{item.title}</h4>

                        <p>{item.description}</p>

                    </button>

                ))}

            </section>

            <FloatingAI />

        </div>

    );

}

export default MaternalChildHealth;