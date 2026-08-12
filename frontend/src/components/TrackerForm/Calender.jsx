function Calendar({

    nextPeriod

}){

    return(

        <section className="tracker-card">

            <h3>

                Cycle Calendar

            </h3>

            <p className="tracker-description">

                Your predicted next period:

            </p>

            <div className="calendar-box">

                {nextPeriod || "Calculate your cycle to view upcoming dates."}

            </div>

        </section>

    );

}

export default Calendar;