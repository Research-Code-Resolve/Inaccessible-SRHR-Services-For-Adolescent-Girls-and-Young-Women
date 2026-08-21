import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaLocationDot, FaArrowLeft, FaCircleCheck } from "react-icons/fa6";
import "./Contact.css";

const getSupportStatus = () => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 6 = Sat
  const hour = now.getHours();
  const isWeekday = day >= 1 && day <= 5;
  const isOpenHours = hour >= 8 && hour < 18;
  return isWeekday && isOpenHours;
};

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [isOnline, setIsOnline] = useState(getSupportStatus());

  useEffect(() => {
    const interval = setInterval(() => setIsOnline(getSupportStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Replace with your real API call, e.g.:
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 600);
  };

  return (
    <main className="contact-page">
      <div className="container contact-inner">
        <button type="button" className="back-button" onClick={() => navigate("/dashboard")}>
          <FaArrowLeft />
          <span>Back to dashboard</span>
        </button>

        <div className="contact-layout">
          <aside className="contact-sidebar">
            <span className="contact-eyebrow">Get in touch</span>
            <h1>We're here to help</h1>
            <p>
              Questions about your care, an appointment, or how ValeCare
              works — send a message and our team will follow up directly.
            </p>

            <div className={`support-status ${isOnline ? "online" : "offline"}`}>
              <span className="status-dot" />
              <span>
                {isOnline
                  ? "Support is online now"
                  : "Support is offline — back at 8am"}
              </span>
            </div>

            <ul className="contact-details">
              <li>
                <span className="contact-icon"><FaEnvelope /></span>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">support@valecare.com</span>
                </div>
              </li>
              <li>
                <span className="contact-icon"><FaPhone /></span>
                <div>
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+234 800 000 0000</span>
                </div>
              </li>
              <li>
                <span className="contact-icon"><FaLocationDot /></span>
                <div>
                  <span className="contact-label">Office</span>
                  <span className="contact-value">Abuja, Nigeria</span>
                </div>
              </li>
            </ul>
          </aside>

          <div className="contact-form-card">
            {status === "sent" ? (
              <div className="contact-success">
                <FaCircleCheck className="success-icon" />
                <h2>Message sent</h2>
                <p>Thanks for reaching out — we'll reply within 1–2 business days.</p>
                <button
                  type="button"
                  className="contact-submit"
                  onClick={() => setStatus("idle")}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="form-title">Send a message</h2>

                <label className="contact-field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label className="contact-field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label className="contact-field">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="How can we help?"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;