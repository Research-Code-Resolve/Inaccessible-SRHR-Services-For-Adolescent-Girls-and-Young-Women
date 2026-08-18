import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Language.css";
import { languages } from "./languageData";

const Language = () => {

  const navigate = useNavigate();

  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleContinue = () => {

    // Save selected language

    localStorage.setItem(
      "language",
      selectedLanguage
    );

    // Go back to previous page

    navigate(-1);

  };

  return (

    <div className="language-page">

      <div className="language-card">

        <h1>
          🌍 Choose Your Language
        </h1>

        <p>

          Select the language you would like to use throughout ValeCare.

          You can always change it later from Settings.

        </p>

        <div className="language-list">

          {languages.map((language) => (

            <label
              key={language.id}
              className={`language-item ${
                selectedLanguage === language.name
                  ? "active"
                  : ""
              }`}
            >

              <input
                type="radio"
                value={language.name}
                checked={
                  selectedLanguage ===
                  language.name
                }
                onChange={(e) =>
                  setSelectedLanguage(
                    e.target.value
                  )
                }
              />

              <span className="flag">

                {language.flag}

              </span>

              <div>

                <h3>{language.name}</h3>

                <small>
                  {language.native}
                </small>

              </div>

            </label>

          ))}

        </div>

        <button
          className="continue-btn"
          onClick={handleContinue}
        >

          Continue

        </button>

      </div>

    </div>

  );
};

export default Language;