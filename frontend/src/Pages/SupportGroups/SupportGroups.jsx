import { ArrowLeft, Users } from "lucide-react";

import { useNavigate } from "react-router-dom";

import FloatingAI from "../../components/FloatingAI/FloatingAI";

import supportGroups from "./supportGroupData";

import "./SupportGroups.css";

function SupportGroups(){

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

                    Support Groups

                </h2>

            </header>

            <section className="module-intro">

                <p>

                    Connect with moderated support groups where you can
                    learn from shared experiences, receive encouragement
                    and access reliable reproductive health information.
                    Please avoid sharing sensitive personal information.

                </p>

            </section>

            <section className="module-section">

                <h3>

                    Available Groups

                </h3>

                {

                    supportGroups.map((group)=>(

                        <button

                            key={group.id}

                            className="topic-card"

                            onClick={()=>navigate(group.route)}

                        >

                            <div className="group-icon">

                                <Users size={22}/>

                            </div>

                            <div className="group-content">

                                <h4>

                                    {group.title}

                                </h4>

                                <p>

                                    {group.description}

                                </p>

                            </div>

                        </button>

                    ))

                }

            </section>

            <section className="community-guidelines">

                <h3>

                    Community Guidelines

                </h3>

                <ul>

                    <li>Respect every member.</li>

                    <li>Do not bully or harass others.</li>

                    <li>Keep personal information private.</li>

                    <li>Share accurate information.</li>

                    <li>Seek emergency care for urgent medical problems.</li>

                </ul>

            </section>

            <FloatingAI/>

        </div>

    );

}

export default SupportGroups;