import React from "react";
import { Link } from "react-router-dom";

const Pregnancy = () => (
  <div className="page container">
    <h1>Pregnancy Tracker</h1>
    <p>This page can hold pregnancy week-by-week info, appointment reminders, and notes.</p>

    <p className="muted">(Beginner-friendly placeholder.)</p>

    <p style={{ marginTop: 20 }}>
      <Link to="/trackers">Back to trackers</Link>
    </p>
  </div>
);

export default Pregnancy;
