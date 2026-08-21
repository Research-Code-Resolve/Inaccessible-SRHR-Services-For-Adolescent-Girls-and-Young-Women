import React from "react";
import "./Consultation.css";
import { Link } from "react-router-dom";

import {
  consultationOptions,
} from "./consultationData";

const Consultation = () => {
  return (
    <div className="consultation-page">

      {/* Header */}

      <div className="page-header">

        <Link
          to="/dashboard"
          className="back-button"
        >
          ←
        </Link>

        <h1>Consultation</h1>

      </div>

      {/* Intro */}

      <div className="consultation-intro">

        <h2>
          Need medical assistance?
        </h2>

        <p>
          Choose a consultation service
          below to connect with a healthcare
          provider.
        </p>

      </div>

      {/* Services */}

      <section className="consultation-section">

        <h3>Consultation Services</h3>

        <div className="consultation-grid">

          {consultationOptions.map((item) => {

            const Icon = item.icon;

            return (

              <Link
                key={item.id}
                to={item.disabled ? "#" : item.path}
                className={`consultation-card ${
                  item.disabled ? "disabled" : ""
                }`}
              >

                <div
                  className="consultation-icon"
                  style={{
                    background: item.background,
                    color: item.color,
                  }}
                >
                  <Icon />
                </div>

                <div>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                  {item.disabled && (
                    <span className="coming-soon">
                      Coming Soon
                    </span>
                  )}

                </div>

              </Link>

            );

          })}

        </div>

      </section>

      {/* Upcoming Appointment */}

      <section className="appointment-section">

        <h3>
          Upcoming Appointment
        </h3>

        <div className="empty-card">

          <p>
            You don't have any upcoming appointments.
          </p>

          <Link
            to="/consultation/book"
            className="book-now"
          >
            Book Appointment
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Consultation;