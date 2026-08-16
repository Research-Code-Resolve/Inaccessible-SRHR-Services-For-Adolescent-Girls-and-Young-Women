import React, { useEffect, useRef, useState } from "react";
import LessonLayout from "../../components/LessonLayout/LessonLayout";
import { Send } from "lucide-react";
import "./AI.css";

function AI() {


  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text:
        "Hello — I can provide general information. I am not a substitute for a healthcare professional."
    }
  ]);

  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { id: Date.now(), sender: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    // simulated assistant reply (placeholder)
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        sender: "bot",
        text:
          "I can help with general information, but this does NOT replace advice from a qualified health professional."
      };
      setMessages((m) => [...m, reply]);
    }, 600);
  }

  function onKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <LessonLayout title="AI Assistant" backRoute="/dashboard">

      <div className="ai-container">

        <div className="ai-disclaimer">
          This assistant provides general information and does not replace a
          consultation with a qualified health professional.
        </div>

        <div className="chat-window">

          <div className="messages">
            {messages.map((m) => (
              <div
                key={m.id}
                className={"message " + (m.sender === "user" ? "user" : "bot")}
              >
                <div className="message-text">{m.text}</div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="input-row">
            <textarea
              className="chat-input"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
            />

            <button
              type="button"
              className="send-button"
              aria-label="Send message"
              onClick={sendMessage}
            >
              <Send size={18} />
            </button>
          </div>

        </div>

        

      </div>

    </LessonLayout>
  );
}

export default AI;
