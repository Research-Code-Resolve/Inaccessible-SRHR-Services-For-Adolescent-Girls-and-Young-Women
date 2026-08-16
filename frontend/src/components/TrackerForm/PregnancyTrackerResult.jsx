function TrackerResult({

    week,

    trimester,

    dueDate

}) {

    return (

        <section className="tracker-card">

            <h3>

                Pregnancy Summary

            </h3>

            <div className="result-row">

                <span>

                    Current Week

                </span>

                <strong>

                    {week !== "" ? `Week ${week}` : "--"}

                </strong>

            </div>

            <div className="result-row">

                <span>

                    Trimester

                </span>

                <strong>

                    {trimester || "--"}

                </strong>

            </div>

            <div className="result-row">

                <span>

                    Estimated Due Date

                </span>

                <strong>

                    {dueDate || "--"}

                </strong>

            </div>

        </section>

    );

}

export default TrackerResult;