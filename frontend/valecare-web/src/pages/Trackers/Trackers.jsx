import React from "react";
import { Link } from "react-router-dom";

const Trackers = () => (
  <div className="page container">
    <h1>Trackers</h1>
    <p>Choose a tracker to get started:</p>

    <ul>
      <li>
        <Link to="/trackers/menstrual">Menstrual Tracker</Link>
      </li>
      <li>
        <Link to="/trackers/pregnancy">Pregnancy Tracker</Link>
      </li>
    </ul>

    <p style={{ marginTop: 20 }}>
      <Link to="/dashboard">Back to dashboard</Link>
    </p>
  </div>
);

export default Trackers;
