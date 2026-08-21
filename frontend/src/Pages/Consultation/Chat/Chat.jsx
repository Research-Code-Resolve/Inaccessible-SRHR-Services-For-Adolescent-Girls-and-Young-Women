import { useState } from "react";
import { Link } from "react-router-dom";

import "./Chat.css";

const Chat = () => {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        text: message,
      },
    ]);

    setMessage("");
  };

  return (
    <div className="chat-page">

      {/* Header */}

      <div className="page-header">

        <Link
          to="/consultation"
          className="back-button"
        >
          ←
        </Link>

        <h1>Chat with Health Provider</h1>

      </div>

      {/* Information */}

      <div className="chat-info">

        <h2>🩺 Health Provider</h2>

        <p>
          Welcome to ValeCare.
        </p>

        <p>
          Ask general health questions here.
        </p>

        <p className="emergency-text">
          This chat is not intended for medical emergencies.
          If you require urgent medical care, please visit the
          nearest hospital or contact your local emergency
          services immediately.
        </p>

      </div>

      {/* Messages */}

      <div className="chat-box">

        {messages.length === 0 ? (

          <div className="empty-chat">

            <h3>No messages yet</h3>

            <p>
              Start a conversation by typing your
              health question below.
            </p>

          </div>

        ) : (

          messages.map((msg) => (

            <div
              key={msg.id}
              className={`message ${msg.sender}`}
            >
              {msg.text}
            </div>

          ))

        )}

      </div>

      {/* Input */}

      <div className="message-input">

        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button onClick={sendMessage}>
          Send
        </button>

      </div>

    </div>
  );
};

export default Chat;