import { useState, useRef, useEffect } from "react";
import { FaGlobe, FaChevronDown } from "react-icons/fa6";
import "./LanguageSelect.css";

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "am", label: "Amharic" },
  { code: "sw", label: "Kiswahili" },
  { code: "ha", label: "Hausa" },
  { code: "yo", label: "Yorùbá" },
  { code: "ny", label: "Chichewa" },
  { code: "so", label: "Somali" },
  { code: "tn", label: "Sestwana" },
  { code: "xh", label: "Xhosa" },
  { code: "ln", label: "Lingala" },
  { code: "tw", label: "Twi" },
  { code: "ee", label: "Ewe" },
  { code: "ts", label: "Xitsonga" },
  { code: "ig", label: "Igbo" },
];

const LanguageSelect = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const wrapperRef = useRef(null);

  // Close dropdown when clicking outside it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);

    // NOTE: this only tracks the selected language visually for now.
    // To actually translate the app, wire this into an i18n library
    // (e.g. react-i18next) and call its language-change function here.
  };

  return (
    <div className="lang-select" ref={wrapperRef}>
      <button
        type="button"
        className="lang-select-btn"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <FaGlobe />
        <span>{selected.label}</span>
        <FaChevronDown className={`lang-chevron ${open ? "open" : ""}`} />
      </button>

      {open && (
        <ul className="lang-dropdown" role="listbox">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                className={
                  "lang-option" + (lang.code === selected.code ? " active" : "")
                }
                onClick={() => handleSelect(lang)}
                role="option"
                aria-selected={lang.code === selected.code}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelect;