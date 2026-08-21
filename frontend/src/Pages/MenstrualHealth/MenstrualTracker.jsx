import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import "./MenstrualTracker.css";

const formatDate = (date) => {
  if (!date) return "Not available";
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const MenstrualTracker = () => {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28);

  const nextPeriodDate = useMemo(() => {
    if (!lastPeriod) return "";

    const date = new Date(lastPeriod);
    date.setDate(date.getDate() + Number(cycleLength));

    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }, [lastPeriod, cycleLength]);

  const ovulationDate = useMemo(() => {
    if (!lastPeriod) return "";

    const date = new Date(lastPeriod);
    date.setDate(date.getDate() + Number(cycleLength) - 14);

    return date;
  }, [lastPeriod, cycleLength]);

  const fertileStart = useMemo(() => {
    if (!ovulationDate) return "";

    const date = new Date(ovulationDate);
    date.setDate(date.getDate() - 5);

    return date;
  }, [ovulationDate]);

  const fertileEnd = useMemo(() => {
    if (!ovulationDate) return "";

    return new Date(ovulationDate);
  }, [ovulationDate]);

  return (
    <div className="tracker-page">
      {/* Header */}
      <div className="page-header">
        <Link to="/menstrual-health" className="back-button">
          ←
        </Link>
        <h1>Menstrual Health Tracker</h1>
      </div>

      {/* Intro */}
      <div className="tracker-card">
        <h2>Track Your Menstrual Cycle</h2>
        <p>
          Record your menstrual cycle to help predict your next
          period and better understand your reproductive health.
        </p>
      </div>

      {/* Last Period */}
      <div className="tracker-card">
        <h2>Last Period</h2>
        <label htmlFor="lastPeriod">
          First day of your last period
        </label>
        <input
          id="lastPeriod"
          type="date"
          value={lastPeriod}
          onChange={(e) => setLastPeriod(e.target.value)}
        />
      </div>

      {/* Cycle Length */}
      <div className="tracker-card">
        <h2>Cycle Length</h2>
        <label htmlFor="cycleLength">
          Average cycle length (days)
        </label>
        <input
          id="cycleLength"
          type="number"
          min="21"
          max="35"
          value={cycleLength}
          onChange={(e) => setCycleLength(e.target.value)}
        />
      </div>

      {/* Cycle Summary */}
      <div className="tracker-card">
        <h2>Cycle Summary</h2>

        <div className="summary-item">
          <span>Last Period</span>
          <strong>{lastPeriod || "Not recorded"}</strong>
        </div>

        <div className="summary-item">
          <span>Cycle Length</span>
          <strong>{cycleLength} days</strong>
        </div>

        <div className="summary-item">
          <span>Estimated Next Period</span>
          <strong>{nextPeriodDate || "Enter your last period"}</strong>
        </div>

        <div className="summary-item">
          <span>Estimated Ovulation</span>
          <strong>{formatDate(ovulationDate) || "Enter your last period"}</strong>
        </div>

        <div className="summary-item">
          <span>Fertile Window</span>
          <strong>
            {fertileStart && fertileEnd
              ? `${formatDate(fertileStart)} - ${formatDate(fertileEnd)}`
              : "Enter your last period"}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default MenstrualTracker;