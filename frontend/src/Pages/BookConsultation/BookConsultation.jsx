import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./BookConsultation.css";

function BookConsultation() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        service: "",

        date: "",

        time: "",

        consultationType: "",

        notes: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        alert("Your consultation request has been submitted.");

        navigate("/dashboard");

    };

    return (

        <div className="page">

            <header className="page-header">

                <button

                    className="back-button"

                    onClick={() => navigate("/consultation")}

                >

                    <ArrowLeft size={20} />

                </button>

                <h2>Book Consultation</h2>

            </header>

            <form
                className="consultation-form"
                onSubmit={handleSubmit}
            >

                <label>

                    Consultation Service

                </label>

                <select

                    name="service"

                    value={formData.service}

                    onChange={handleChange}

                    required

                >

                    <option value="">

                        Select Service

                    </option>

                    <option>

                        General SRHR Consultation

                    </option>

                    <option>

                        Maternal Health

                    </option>

                    <option>

                        Family Planning

                    </option>

                    <option>

                        STI & HIV

                    </option>

                    <option>

                        Adolescent Health

                    </option>

                </select>

                <label>

                    Preferred Date

                </label>

                <input

                    type="date"

                    name="date"

                    value={formData.date}

                    onChange={handleChange}

                    required

                />

                <label>

                    Preferred Time

                </label>

                <input

                    type="time"

                    name="time"

                    value={formData.time}

                    onChange={handleChange}

                    required

                />

                <label>

                    Consultation Type

                </label>

                <select

                    name="consultationType"

                    value={formData.consultationType}

                    onChange={handleChange}

                    required

                >

                    <option value="">

                        Select Type

                    </option>

                    <option>

                        Physical Visit

                    </option>

                    <option>

                        Virtual Consultation

                    </option>

                </select>

                <label>

                    Additional Notes (Optional)

                </label>

                <textarea

                    rows="5"

                    name="notes"

                    placeholder="Briefly describe your concern..."

                    value={formData.notes}

                    onChange={handleChange}

                />

                <button

                    type="submit"

                    className="primary-button"

                >

                    Book Consultation

                </button>

            </form>

        </div>

    );

}

export default BookConsultation;