import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRobot, FaXmark, FaPaperPlane, FaExpand } from "react-icons/fa6";
import "./FloatingAssistant.css";

const initialMessages = [
  {
    id: 1,
    sender: "assistant",
    text: "Hi, I'm your ValeCare assistant. Ask me anything about the app or your health topics.",
  },
];

const FloatingAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { id: Date.now(), sender: "user", text: trimmed };

    // NOTE: this is a placeholder reply. To make this a real AI assistant,
    // replace this block with a call to your backend/AI API and set the
    // assistant message from that response instead.
    const placeholderReply = {
      id: Date.now() + 1,
      sender: "assistant",
      text: "Thanks for your message! I'm not connected to a live AI service yet — this is a placeholder response.",
    };

    setMessages((prev) => [...prev, userMessage, placeholderReply]);
    setInput("");
  };

  return (
    <div className="floating-assistant">
      {open && (
        <div className="assistant-panel">
          <div className="assistant-panel-header">
            <span>ValeCare Assistant</span>
            <div className="assistant-panel-header-actions">
              <Link
                to="/ai-assistant"
                className="assistant-expand-btn"
                aria-label="Open full chat"
                onClick={() => setOpen(false)}
              >
                <FaExpand />
              </Link>
              <button onClick={() => setOpen(false)} aria-label="Close assistant">
                <FaXmark />
              </button>
            </div>
          </div>

          <div className="assistant-panel-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`assistant-msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <form className="assistant-panel-input" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button type="submit" aria-label="Send message">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}

      <button
        className="assistant-toggle-btn"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open assistant"
      >
        {open ? <FaXmark /> : <FaRobot />}
      </button>
    </div>
  );
};

export default FloatingAssistant;