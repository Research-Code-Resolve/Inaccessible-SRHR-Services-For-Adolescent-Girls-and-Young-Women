import React from "react";

function TrackerForm({ lmp, setLmp, onCalculate }) {

    return (

        <section className="tracker-card">

            <h3>Last Menstrual Period</h3>

            <input
                type="date"
                value={lmp}
                onChange={(e) => setLmp(e.target.value)}
            />

            <button
                className="primary-button"
                onClick={onCalculate}
            >
                Calculate
            </button>

        </section>

    );

}

export default TrackerForm;