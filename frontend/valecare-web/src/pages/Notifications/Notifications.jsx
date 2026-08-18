import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCalendarCheck,
  FaLightbulb,
  FaBell,
  FaTriangleExclamation,
  FaCheck,
} from "react-icons/fa6";
import "./Notifications.css";

// Placeholder data — replace with a real fetch from your backend/API
// once notifications are wired up server-side.
const initialNotifications = [
  {
    id: 1,
    type: "reminder",
    title: "Period expected in 3 days",
    message: "Based on your last cycle, your next period is expected soon.",
    time: "2h ago",
    read: false,
  },
  {
    id: 2,
    type: "tip",
    title: "New lesson: Nutrition Through Life Stages",
    message: "A new lesson was added to your Nutrition module.",
    time: "1d ago",
    read: false,
  },
  {
    id: 3,
    type: "appointment",
    title: "Upcoming consultation",
    message: "You have a consultation booked for tomorrow at 10:00 AM.",
    time: "1d ago",
    read: true,
  },
  {
    id: 4,
    type: "alert",
    title: "Complete your profile",
    message: "Add your details to get more personalized guidance.",
    time: "3d ago",
    read: true,
  },
];

const iconFor = (type) => {
  switch (type) {
    case "reminder":
      return <FaBell />;
    case "tip":
      return <FaLightbulb />;
    case "appointment":
      return <FaCalendarCheck />;
    case "alert":
      return <FaTriangleExclamation />;
    default:
      return <FaBell />;
  }
};

const Notifications = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="notif-page">
      <div className="page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1>Notifications</h1>
        {unreadCount > 0 && <span className="notif-badge">{unreadCount}</span>}
      </div>

      {notifications.length > 0 && (
        <button className="notif-mark-all" onClick={markAllAsRead}>
          <FaCheck /> Mark all as read
        </button>
      )}

      {notifications.length === 0 ? (
        <div className="notif-empty">
          <FaBell />
          <p>You're all caught up — no notifications right now.</p>
        </div>
      ) : (
        <div className="notif-list">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`notif-card ${n.read ? "" : "unread"}`}
              onClick={() => markAsRead(n.id)}
            >
              <span className={`notif-icon ${n.type}`}>{iconFor(n.type)}</span>

              <div className="notif-content">
                <h2>{n.title}</h2>
                <p>{n.message}</p>
                <span className="notif-time">{n.time}</span>
              </div>

              {!n.read && <span className="notif-dot" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;