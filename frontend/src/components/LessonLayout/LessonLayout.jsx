import "./LessonLayout.css";

import { ArrowLeft } from "lucide-react";

import { useNavigate } from "react-router-dom";

import FloatingAI from "../FloatingAI/FloatingAI";

function LessonLayout({

    title,

    backRoute,

    children

}){

    const navigate = useNavigate();

    return(

        <div className="lesson-page">

            <header className="lesson-header">

                <button
                    className="back-button"
                    onClick={() => navigate(backRoute)}
                >

                    <ArrowLeft size={20}/>

                </button>

                <h2>

                    {title}

                </h2>

            </header>

            <main className="lesson-content">

                {children}

            </main>

            <FloatingAI/>

        </div>

    );

}

export default LessonLayout;