import LessonLayout from "../../components/LessonLayout/LessonLayout";

function Pregnancy(){

    const topics = [
        {
            id: 1,
            title: "Overview",
            text: "Pregnancy lasts ~40 weeks from the last menstrual period and is divided into three trimesters. Aim for regular antenatal care."
        },
        {
            id: 2,
            title: "Signs & Symptoms",
            text: "Early: missed period, nausea, breast tenderness, fatigue. Seek care for heavy bleeding, severe pain, or fainting."
        },
        {
            id: 3,
            title: "Nutrition",
            text: "Eat a balanced diet with folate, iron, calcium, vitamin D and omega‑3; avoid alcohol, raw foods and high‑mercury fish."
        },
        {
            id: 4,
            title: "Physical Changes",
            text: "Expect breast changes, weight gain, backache, shortness of breath and increasing pelvic pressure across trimesters."
        },
        {
            id: 5,
            title: "Emotional & Psychological",
            text: "Mood swings and anxiety are common; seek social support and professional help for persistent low mood."
        },
        {
            id: 6,
            title: "Postpartum",
            text: "Recovery includes lochia, uterine involution, breastfeeding adjustments and emotional changes; watch for postpartum depression."
        }
    ];

    return(

        <LessonLayout

            title="Pregnancy"

            backRoute="/maternal-child-health"

        >

            <section className="lesson-grid">

                {topics.map(topic => (

                    <article key={topic.id} className="topic-card">

                        <h4>{topic.title}</h4>

                        <p>{topic.text}</p>

                    </article>

                ))}

            </section>

        </LessonLayout>

    );

}

export default Pregnancy;