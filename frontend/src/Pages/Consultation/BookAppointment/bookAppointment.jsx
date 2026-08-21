import { Link } from "react-router-dom";
import { useState } from "react";
import "./BookAppointment.css";

const BookAppointment = () => {

  const [appointment, setAppointment] = useState({
    type: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend integration will be added later
    alert("Appointment booked successfully!");
  };

  return (
    <div className="appointment-page">

      {/* Header */}

      <div className="page-header">

        <Link
          to="/consultation"
          className="back-button"
        >
          ←
        </Link>

        <h1>Book Appointment</h1>

      </div>

      <p className="page-description">
        Book a consultation with a healthcare provider.
      </p>

      <form
        className="appointment-form"
        onSubmit={handleSubmit}
      >

        {/* Consultation Type */}

        <div className="form-group">

          <label>
            Consultation Type
          </label>

          <select
            name="type"
            value={appointment.type}
            onChange={handleChange}
            required
          >
            <option value="">
              Select Consultation Type
            </option>

            <option>
              General Consultation
            </option>

            <option>
              SRHR Consultation
            </option>

            <option>
              Mental Health
            </option>

            <option>
              Nutrition
            </option>

            <option>
              Maternal Health
            </option>

            <option>
              Child Health
            </option>

          </select>

        </div>

        {/* Date */}

        <div className="form-group">

          <label>
            Preferred Date
          </label>

          <input
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
            required
          />

        </div>

        {/* Time */}

        <div className="form-group">

          <label>
            Preferred Time
          </label>

          <input
            type="time"
            name="time"
            value={appointment.time}
            onChange={handleChange}
            required
          />

        </div>

        {/* Reason */}

        <div className="form-group">

          <label>
            Reason for Consultation (Optional)
          </label>

          <textarea
            rows="5"
            name="reason"
            placeholder="Briefly describe your concern..."
            value={appointment.reason}
            onChange={handleChange}
          />

        </div>

        {/* Buttons */}

        <div className="button-group">

          <Link
            to="/consultation"
            className="cancel-button"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="book-button"
          >
            Book Appointment
          </button>

        </div>

      </form>

    </div>
  );
};

export default BookAppointment;