function MenstrualNotes({

    notes,

    setNotes,

    onSave

}){

    return(

        <section className="tracker-card">

            <h3>

                Personal Notes

            </h3>

            <textarea

                rows="6"

                value={notes}

                placeholder="Write your notes here..."

                onChange={(e)=>setNotes(e.target.value)}

            />

            <button

                className="primary-button"

                onClick={onSave}

            >

                Save Notes

            </button>

        </section>

    );

}

export default MenstrualNotes;