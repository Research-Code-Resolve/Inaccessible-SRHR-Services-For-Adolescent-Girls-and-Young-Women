import React from "react";
import { Link } from "react-router-dom";

const Menstrual = () => (
  <div className="page container">
    <h1>Menstrual Tracker</h1>
    <p>This is a simple menstrual tracker starter. You can log period start dates and see cycle length here.</p>

    <p className="muted">(This is a beginner-friendly placeholder.)</p>

    <p style={{ marginTop: 20 }}>
      <Link to="/trackers">Back to trackers</Link>
    </p>
  </div>
);

export default Menstrual;
