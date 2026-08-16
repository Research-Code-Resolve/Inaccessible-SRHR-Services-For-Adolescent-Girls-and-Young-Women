import LessonLayout from "../../components/LessonLayout/LessonLayout";
import "./FAQs.css";

const faqs = [
  {
    question: "How do I change my language settings?",
    answer: "Open the sidebar and select Language to choose your preferred language."
  },
  {
    question: "Can I use the app without registering?",
    answer: "Some features are available without an account, but registration gives full access."
  },
  {
    question: "Is the health information medical advice?",
    answer: "No. ValeCare provides general information and is not a substitute for professional medical advice."
  },
  {
    question: "How do I track my pregnancy or menstrual health?",
    answer: "Use the trackers in the navigation menu or the relevant dashboard modules for pregnancy and menstrual tracking."
  },
  {
    question: "What should I do if I have an emergency?",
    answer: "Contact local emergency services or a healthcare professional immediately."
  }
];

function FAQs() {
  return (
    <LessonLayout title="FAQs" backRoute="/dashboard">
      <section className="faq-page">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <article key={index} className="faq-item">
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </LessonLayout>
  );
}

export default FAQs;
