import "./Nutrition.css";
import LessonLayout from "../../components/LessonLayout/LessonLayout";

function Nutrition() {

    return (

        <LessonLayout
            title="Nutrition"
            backRoute="/dashboard"
        >

            <section className="lesson-section">

                <h3>1. Healthy Eating</h3>

                <p>
                    Eat a balanced diet containing carbohydrates,
                    proteins, healthy fats, fruits and vegetables.
                    Eating a variety of foods helps your body stay healthy.
                </p>

            </section>

            <section className="lesson-section">

                <h3>2. Food Groups</h3>

                <ul>

                    <li>Carbohydrates provide energy.</li>
                    <li>Proteins help growth and repair.</li>
                    <li>Healthy fats support body functions.</li>
                    <li>Fruits and vegetables provide vitamins and fibre.</li>

                </ul>

            </section>

            <section className="lesson-section">

                <h3>3. Vitamins & Minerals</h3>

                <p>
                    Iron, calcium, vitamin A, vitamin C and folate
                    are important for growth, immunity and overall health.
                </p>

            </section>

            <section className="lesson-section">

                <h3>4. Hydration</h3>

                <p>
                    Drink enough clean water every day.
                    Staying hydrated helps your body function properly.
                </p>

            </section>

            <section className="lesson-section">

                <h3>5. Healthy Weight</h3>

                <p>
                    Eat balanced meals and stay physically active
                    to maintain a healthy weight.
                </p>

            </section>

            <section className="lesson-section">

                <h3>6. Nutrition During Adolescence</h3>

                <p>
                    Adolescents need extra nutrients to support
                    rapid growth and development.
                </p>

            </section>

            <section className="lesson-section">

                <h3>7. Nutrition During Pregnancy</h3>

                <p>
                    Pregnant women should eat foods rich in iron,
                    folic acid, protein and calcium and attend
                    regular antenatal visits.
                </p>

            </section>

            <section className="lesson-section">

                <h3>8. Breastfeeding Nutrition</h3>

                <p>
                    Breastfeeding mothers should eat healthy meals,
                    drink plenty of water and continue taking
                    supplements if prescribed.
                </p>

            </section>

            <section className="lesson-section">

                <h3>9. Foods to Limit</h3>

                <ul>

                    <li>Sugary drinks</li>
                    <li>Highly processed foods</li>
                    <li>Excess salt</li>
                    <li>Excess sugar</li>

                </ul>

            </section>

            <section className="lesson-section warning-box">

                <h3>10. When to Seek Professional Advice</h3>

                <ul>

                    <li>Rapid weight loss.</li>
                    <li>Poor appetite.</li>
                    <li>Persistent weakness.</li>
                    <li>Difficulty eating.</li>

                </ul>

            </section>

        </LessonLayout>

    );

}

export default Nutrition;