import { useState } from "react";
import { useNavigate } from "react-router-dom";
import languages from "./Language.js";
import "./Language.css";

function Language() {

    const navigate = useNavigate();

    const [selectedLanguage, setSelectedLanguage] = useState("English");

    const handleContinue = () => {

        localStorage.setItem("language", selectedLanguage);

        navigate("/welcome");

    };

    return (

        <div className="language-page">

            <div className="language-header">

                <h1>Select Language</h1>

                <p>
                    Choose your preferred language.
                    You can change it later in Settings.
                </p>

            </div>

            <div className="language-list">

                {languages.map((language) => (

                    <button
                        key={language}
                        type="button"
                        className={
                            selectedLanguage === language
                                ? "language-btn active"
                                : "language-btn"
                        }
                        onClick={() => setSelectedLanguage(language)}
                    >
                        {language}
                    </button>

                ))}

            </div>

            <div className="language-footer">

                <button onClick={handleContinue}>
                    Continue
                </button>

            </div>

        </div>

    );

}

export default Language;