import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaArrowLeft, FaEnvelope } from "react-icons/fa6";
import "./Faq.css";

const categories = ["All", "Getting started", "Account & privacy", "Billing"];

const faqItems = [
  {
    category: "Getting started",
    question: "How do I book a consultation?",
    answer:
      "Sign in or create an account, then head to the Consultation page to choose a provider and an available time slot.",
  },
  {
    category: "Getting started",
    question: "Can I use ValeCare without creating an account?",
    answer:
      "You can browse general health information as a guest, but booking consultations and saving your history requires an account.",
  },
  {
    category: "Account & privacy",
    question: "Is my health information kept private?",
    answer:
      "Yes. Your records and messages are encrypted and only accessible to you and the care team you've consented to share them with.",
  },
  {
    category: "Account & privacy",
    question: "How do I reset my password?",
    answer:
      "Go to the sign-in page and select 'Forgot password'. We'll send a reset link to the email on your account.",
  },
  {
    category: "Billing",
    question: "Who do I contact for billing questions?",
    answer:
      "Reach out through the Contact page and select 'Billing' — our support team typically responds within one business day.",
  },
  {
    category: "Billing",
    question: "Do you offer refunds for cancelled consultations?",
    answer:
      "Consultations cancelled more than 24 hours in advance are refunded in full to your original payment method within 5–7 days.",
  },
];

const Faq = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const visibleItems =
    activeCategory === "All"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  return (
    <main className="faq-page">
      <div className="container faq-inner">
        <button type="button" className="back-button" onClick={() => navigate("/dashboard")}>
          <FaArrowLeft />
          <span>Back to dashboard</span>
        </button>

        <div className="faq-header">
          <span className="faq-eyebrow">Support</span>
          <h1>Frequently asked questions</h1>
          <p className="faq-subtitle">
            Answers to the most common questions about accounts, privacy, and
            billing. Can't find what you need? Reach out on the Contact page.
          </p>
        </div>

        <div className="faq-body">
          <div className="faq-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`faq-category ${activeCategory === cat ? "active" : ""}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="faq-list">
            {visibleItems.map((item) => {
              const globalIndex = faqItems.indexOf(item);
              const isOpen = openIndex === globalIndex;
              return (
                <div
                  key={item.question}
                  className={`faq-item ${isOpen ? "open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggle(globalIndex)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <FaChevronDown className="faq-caret" />
                  </button>

                  {isOpen && <p className="faq-answer">{item.answer}</p>}
                </div>
              );
            })}

            <div className="faq-cta">
              <FaEnvelope />
              <div>
                <strong>Still have questions?</strong>
                <span>Our support team is happy to help.</span>
              </div>
              <button type="button" onClick={() => navigate("/contact")}>
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Faq;