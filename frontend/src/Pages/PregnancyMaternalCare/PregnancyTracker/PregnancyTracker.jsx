import { Link, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import "./PregnancyTracker.css";

const formatDate = (date) => {
  if (!date) return "Not available";
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const PregnancyTracker = () => {
  const navigate = useNavigate();
  const [lastPeriod, setLastPeriod] = useState("");

  // Estimated due date: 280 days (40 weeks) from the last menstrual period
  const dueDate = useMemo(() => {
    if (!lastPeriod) return "";

    const date = new Date(lastPeriod);
    date.setDate(date.getDate() + 280);

    return date;
  }, [lastPeriod]);

  // Current gestational age in weeks and days
  const gestationalAge = useMemo(() => {
    if (!lastPeriod) return null;

    const start = new Date(lastPeriod);
    const today = new Date();
    const diffTime = today - start;

    if (diffTime < 0) return null;

    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;

    return { weeks, days, totalDays };
  }, [lastPeriod]);

  const trimester = useMemo(() => {
    if (!gestationalAge) return "";

    const { weeks } = gestationalAge;

    if (weeks < 13) return "First Trimester";
    if (weeks < 28) return "Second Trimester";
    if (weeks <= 40) return "Third Trimester";
    return "Past estimated due date";
  }, [gestationalAge]);

  const weeksRemaining = useMemo(() => {
    if (!gestationalAge) return "";

    const remainingDays = 280 - gestationalAge.totalDays;

    if (remainingDays <= 0) return "Due date has passed";

    const weeks = Math.floor(remainingDays / 7);
    const days = remainingDays % 7;

    return `${weeks}w ${days}d remaining`;
  }, [gestationalAge]);

  return (
    <div className="tracker-page">
      {/* Header */}
      <div className="page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1>Pregnancy Tracker</h1>
      </div>

      {/* Intro */}
      <div className="tracker-card">
        <h2>Track Your Pregnancy</h2>
        <p>
          Enter the first day of your last menstrual period to estimate your
          due date and track your progress week by week.
        </p>
      </div>

      {/* Last Period Input */}
      <div className="tracker-card">
        <h2>Last Menstrual Period</h2>
        <label htmlFor="lastPeriod">First day of your last period</label>
        <input
          id="lastPeriod"
          type="date"
          value={lastPeriod}
          onChange={(e) => setLastPeriod(e.target.value)}
        />
      </div>

      {/* Summary */}
      <div className="tracker-card">
        <h2>Pregnancy Summary</h2>

        <div className="summary-item">
          <span>Estimated Due Date</span>
          <strong>{dueDate ? formatDate(dueDate) : "Enter last period"}</strong>
        </div>

        <div className="summary-item">
          <span>Current Gestational Age</span>
          <strong>
            {gestationalAge
              ? `${gestationalAge.weeks}w ${gestationalAge.days}d`
              : "Enter last period"}
          </strong>
        </div>

        <div className="summary-item">
          <span>Trimester</span>
          <strong>{trimester || "Enter last period"}</strong>
        </div>

        <div className="summary-item">
          <span>Time Remaining</span>
          <strong>{weeksRemaining || "Enter last period"}</strong>
        </div>
      </div>

      {/* Link to learn more */}
      <Link to="../pregnancy/learn" className="tracker-link">
        Learn more about your current trimester →
      </Link>
    </div>
  );
};

export default PregnancyTracker;