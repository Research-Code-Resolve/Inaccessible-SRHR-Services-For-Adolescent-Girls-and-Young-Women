import React from "react";
import "./HealthServices.css";
import { Link } from "react-router-dom";

import SearchBar from "../../components/SearchBar/SearchBar";

import { categories } from "./healthServicesdata";

const HealthServices = () => {
  return (
    <div className="health-services-page">

      {/* Header */}

      <div className="page-header">

        <Link
          to="/dashboard"
          className="back-button"
        >
          ←
        </Link>

        <h1>Health Services</h1>

      </div>

      {/* Search */}

      <SearchBar
        placeholder="Search hospital, clinic, pharmacy or service..."
      />

      {/* Available Services */}

      <section className="services-section">

        <h2>Available Services</h2>

        <div className="services-grid">

          {categories.map((service) => {

            const Icon = service.icon;

            return (

              <Link
                key={service.id}
                to={service.path}
                className="service-card"
              >

                <div
                  className="service-icon"
                  style={{
                    background: service.background,
                    color: service.color,
                  }}
                >
                  <Icon />
                </div>

                <span>
                  {service.title}
                </span>

              </Link>

            );

          })}

        </div>

      </section>

    </div>
  );
};

export default HealthServices;