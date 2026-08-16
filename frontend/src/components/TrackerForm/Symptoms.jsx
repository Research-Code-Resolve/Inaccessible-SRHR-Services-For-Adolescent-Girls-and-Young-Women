function Symptoms({

    symptoms,

    setSymptoms

}){

    const symptomList=[

        "Cramps",

        "Headache",

        "Back Pain",

        "Fatigue",

        "Mood Changes",

        "Bloating",

        "Acne"

    ];

    function toggleSymptom(symptom){

        if(symptoms.includes(symptom)){

            setSymptoms(

                symptoms.filter(item=>item!==symptom)

            );

        }

        else{

            setSymptoms(

                [...symptoms,symptom]

            );

        }

    }

    return(

        <section className="tracker-card">

            <h3>

                Symptoms

            </h3>

            {

                symptomList.map((symptom)=>(

                    <label

                        className="checkbox-item"

                        key={symptom}

                    >

                        <input

                            type="checkbox"

                            checked={symptoms.includes(symptom)}

                            onChange={()=>toggleSymptom(symptom)}

                        />

                        {symptom}

                    </label>

                ))

            }

        </section>

    );

}

export default Symptoms;