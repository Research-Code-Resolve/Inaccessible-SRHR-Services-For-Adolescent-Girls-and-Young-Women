import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import FloatingAI from "../../components/FloatingAI/FloatingAI";

import healthCentreData from "./healthCentreData";

import "./FindHealthCentre.css";

function FindHealthCentre(){

    const navigate = useNavigate();

    return(

        <div className="page">

            <header className="module-header">

                <button

                    className="back-button"

                    onClick={()=>navigate("/dashboard")}

                >

                    <ArrowLeft size={20}/>

                </button>

                <h2>

                    Find Health Centre

                </h2>

            </header>

            <section className="module-intro">

                <p>

                    Select the service you need.
                    ValeCare will help you locate nearby healthcare facilities
                    offering that service.

                </p>

            </section>

            <section className="services-grid">

                {

                    healthCentreData.map((service)=>(

                        <button

                            key={service.id}

                            className="service-card"

                            onClick={()=>navigate(service.route)}

                        >

                            <span className="service-icon">

                                {service.icon}

                            </span>

                            <h4>

                                {service.title}

                            </h4>

                        </button>

                    ))

                }

            </section>

            <FloatingAI/>

        </div>

    );

}

export default FindHealthCentre;