import React from "react";
import { useParams, Link } from "react-router-dom";
import { categories } from "./healthServicesdata";
import "./HealthServices.css";

const ServiceDetail = () => {
  const { slug } = useParams();

  const item = categories.find((c) => c.path.endsWith(slug));

  if (!item) {
    return (
      <div className="service-detail">
        <p>Service not found.</p>
        <Link to="/health-services">Back to services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail">
      <div className="page-header">
        <Link to="/health-services" className="back-button">←</Link>
        <h1>{item.title}</h1>
      </div>

      <div style={{ marginTop: 20 }}>
        <p>
          This is a simple beginner-friendly description for <strong>{item.title}</strong>.
          You can list nearby providers, contact info, and how to access the service.
        </p>

        <div style={{ marginTop: 12 }}>
          <Link to="/health-services" className="button">Back to services</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
