import "./FamilyPlanning.css";

import LessonLayout from "../../components/LessonLayout/LessonLayout";

function FamilyPlanning() {

    return (

        <LessonLayout

            title="Family Planning"

            backRoute="/dashboard"

        >

            <section className="lesson-section">

                <h3>1. What is Family Planning?</h3>

                <p>

                    Family planning helps individuals and couples make informed
                    decisions about if and when to have children. It includes
                    information about pregnancy planning, birth spacing and
                    contraceptive methods.

                </p>

            </section>

            <section className="lesson-section">

                <h3>2. Benefits of Family Planning</h3>

                <ul>

                    <li>Supports healthy timing and spacing of pregnancies.</li>

                    <li>Helps improve maternal and child health.</li>

                    <li>Allows individuals to plan for education and career goals.</li>

                    <li>Reduces the risk of unintended pregnancy.</li>

                </ul>

            </section>

            <section className="lesson-section">

                <h3>3. Contraceptive Methods</h3>

                <ul>

                    <li>Male and female condoms.</li>

                    <li>Oral contraceptive pills.</li>

                    <li>Injectables.</li>

                    <li>Implants.</li>

                    <li>Intrauterine devices (IUDs).</li>

                    <li>Emergency contraception.</li>

                </ul>

            </section>

            <section className="lesson-section">

                <h3>4. Choosing a Method</h3>

                <p>

                    The most suitable method depends on your health,
                    preferences and future pregnancy plans. A qualified
                    healthcare provider can help you choose the right option.

                </p>

            </section>

            <section className="lesson-section">

                <h3>5. Condoms and STI Protection</h3>

                <p>

                    Condoms are the only contraceptive method that also helps
                    reduce the risk of many sexually transmitted infections
                    (STIs) when used correctly and consistently.

                </p>

            </section>

            <section className="lesson-section">

                <h3>6. Possible Side Effects</h3>

                <p>

                    Some contraceptive methods may cause temporary side effects
                    such as changes in menstrual bleeding, headaches or nausea.
                    Speak with a healthcare provider if you experience concerns.

                </p>

            </section>

            <section className="lesson-section">

                <h3>7. Myths and Facts</h3>

                <ul>

                    <li><strong>Myth:</strong> Family planning causes permanent infertility.</li>

                    <li><strong>Fact:</strong> Most methods are reversible after stopping them.</li>

                    <li><strong>Myth:</strong> Only married people can receive family planning information.</li>

                    <li><strong>Fact:</strong> Anyone can access accurate information to make informed health decisions.</li>

                </ul>

            </section>

            <section className="lesson-section">

                <h3>8. Healthy Communication</h3>

                <p>

                    Open and respectful communication with a trusted partner
                    and healthcare provider can help support informed decisions
                    about reproductive health.

                </p>

            </section>

            <section className="lesson-section warning-box">

                <h3>9. When to Seek Medical Advice</h3>

                <ul>

                    <li>Severe pain after starting a contraceptive method.</li>

                    <li>Heavy or prolonged bleeding.</li>

                    <li>Signs of pregnancy while using contraception.</li>

                    <li>Questions about changing or stopping a method.</li>

                </ul>

            </section>

        </LessonLayout>

    );

}

export default FamilyPlanning;