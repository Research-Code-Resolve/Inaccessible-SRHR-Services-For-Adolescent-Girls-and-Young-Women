function MenstrualTrackerResult({

    nextPeriod,

    daysRemaining,

    cycleDay,

    cycleLength,

    periodLength

}){

    return(

        <section className="tracker-card">

            <h3>

                Cycle Summary

            </h3>

            <div className="result-row">

                <span>Current Cycle Day</span>

                <strong>

                    {cycleDay ? `Day ${cycleDay}` : "--"}

                </strong>

            </div>

            <div className="result-row">

                <span>Next Period</span>

                <strong>

                    {nextPeriod || "--"}

                </strong>

            </div>

            <div className="result-row">

                <span>Days Remaining</span>

                <strong>

                    {daysRemaining !== "" ? `${daysRemaining} Days` : "--"}

                </strong>

            </div>

            <div className="result-row">

                <span>Cycle Length</span>

                <strong>

                    {cycleLength} Days

                </strong>

            </div>

            <div className="result-row">

                <span>Period Length</span>

                <strong>

                    {periodLength} Days

                </strong>

            </div>

        </section>

    );

}

export default MenstrualTrackerResult;