import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // placeholder behaviour - in a real app you'd show a form
    // navigate to a confirmation or open a booking modal
  }, []);

  return (
    <div className="page container">
      <h1>Book Appointment</h1>
      <p>This is a simple placeholder for booking an appointment.</p>
    </div>
  );
};

export default BookAppointment;
