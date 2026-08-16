import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import FloatingAI from "../../components/FloatingAI/FloatingAI";

import stiData from "./stiData";

import "./STICare.css";

function STICare() {

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

                <h2>STI Prevention & Care</h2>

            </header>

            <section className="module-intro">

                <p>

                    Learn how to prevent sexually transmitted infections,
                    recognise symptoms, and find confidential testing and
                    treatment services.

                </p>

            </section>

            <section className="module-section">

                <h3>Choose a topic</h3>

                {stiData.map((item) => (

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

export default STICare;