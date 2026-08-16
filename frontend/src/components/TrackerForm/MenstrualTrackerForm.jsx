function MenstrualTrackerForm({

    startDate,

    setStartDate,

    cycleLength,

    setCycleLength,

    periodLength,

    setPeriodLength,

    onCalculate

}){

    return(

        <section className="tracker-card">

            <h3>

                Cycle Information

            </h3>

            <label>

                Last Period Started

            </label>

            <input

                type="date"

                value={startDate}

                onChange={(e)=>setStartDate(e.target.value)}

            />

            <label>

                Average Cycle Length

            </label>

            <input

                type="number"

                value={cycleLength}

                onChange={(e)=>setCycleLength(e.target.value)}

            />

            <label>

                Period Length

            </label>

            <input

                type="number"

                value={periodLength}

                onChange={(e)=>setPeriodLength(e.target.value)}

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

export default MenstrualTrackerForm;