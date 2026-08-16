import "./MenstrualLesson.css";

import { useNavigate } from "react-router-dom";

import LessonLayout from "../../components/LessonLayout/LessonLayout";

function MenstrualLesson() {

    const navigate = useNavigate();

    return (

        <LessonLayout

            title="Menstrual Health"

            backRoute="/menstrual-health"

        >

            <section className="lesson-section">

                <h3>1. What is Menstruation?</h3>

                <p>

                    Menstruation, also called a period, is the monthly shedding
                    of the lining of the uterus when pregnancy does not occur.
                    It is a normal part of reproductive health.

                </p>

            </section>

            <section className="lesson-section">

                <h3>2. The Menstrual Cycle</h3>

                <p>

                    A menstrual cycle usually lasts between 21 and 35 days.
                    Every person's cycle may be slightly different.

                </p>

            </section>

            <section className="lesson-section">

                <h3>3. Menstrual Hygiene</h3>

                <ul>

                    <li>Use clean sanitary pads, tampons or menstrual cups.</li>

                    <li>Change menstrual products regularly.</li>

                    <li>Wash your hands before and after changing products.</li>

                    <li>Keep the genital area clean using clean water.</li>

                </ul>

            </section>

            <section className="lesson-section">

                <h3>4. Common Symptoms</h3>

                <ul>

                    <li>Lower abdominal cramps</li>

                    <li>Back pain</li>

                    <li>Bloating</li>

                    <li>Headache</li>

                    <li>Mood changes</li>

                    <li>Breast tenderness</li>

                </ul>

            </section>

            <section className="lesson-section">

                <h3>5. Managing Menstrual Pain</h3>

                <ul>

                    <li>Drink enough water.</li>

                    <li>Exercise regularly.</li>

                    <li>Use a warm compress if needed.</li>

                    <li>Rest and eat balanced meals.</li>

                    <li>Take medication only as advised by a healthcare provider.</li>

                </ul>

            </section>

            <section className="lesson-section">

                <h3>6. Healthy Lifestyle</h3>

                <p>

                    Eating nutritious foods, staying active, sleeping well and
                    managing stress can support menstrual health.

                </p>

            </section>

            <section className="lesson-section warning-box">

                <h3>7. When to Seek Medical Care</h3>

                <ul>

                    <li>Very heavy bleeding.</li>

                    <li>Severe pain that affects daily activities.</li>

                    <li>Periods that stop unexpectedly.</li>

                    <li>Bleeding between periods.</li>

                    <li>Periods lasting longer than 7 days.</li>

                </ul>

            </section>

            <section className="lesson-section">

                <h3>Key Reminder</h3>

                <p>

                    Menstruation is a normal and healthy part of life.
                    If you notice unusual changes or have concerns, consult
                    a qualified healthcare provider.

                </p>

            </section>

            <button

                className="primary-button"

                onClick={() => navigate("/menstrual-tracker")}

            >

                Next: Menstrual Tracker

            </button>

        </LessonLayout>

    );

}

export default MenstrualLesson;