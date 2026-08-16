import "./STILesson.css";

import LessonLayout from "../../components/LessonLayout/LessonLayout";

function STILesson() {

    return (

        <LessonLayout

            title="STI Prevention & Care"

            backRoute="/sti-care"

        >

            <section className="lesson-section">

                <h3>1. What are STIs?</h3>

                <p>

                    Sexually transmitted infections (STIs) are infections that
                    can spread through sexual contact. Some STIs can also be
                    transmitted during pregnancy, childbirth or through blood.

                </p>

            </section>

            <section className="lesson-section">

                <h3>2. Common STIs</h3>

                <ul>

                    <li>Chlamydia</li>

                    <li>Gonorrhoea</li>

                    <li>Syphilis</li>

                    <li>Human Papillomavirus (HPV)</li>

                    <li>Genital Herpes</li>

                    <li>HIV</li>

                </ul>

            </section>

            <section className="lesson-section">

                <h3>3. Symptoms</h3>

                <ul>

                    <li>Unusual vaginal discharge.</li>

                    <li>Pain during urination.</li>

                    <li>Genital sores or ulcers.</li>

                    <li>Lower abdominal pain.</li>

                    <li>Some STIs may have no symptoms.</li>

                </ul>

            </section>

            <section className="lesson-section">

                <h3>4. Prevention</h3>

                <ul>

                    <li>Use condoms correctly and consistently.</li>

                    <li>Get tested regularly if recommended.</li>

                    <li>Limit exposure to risk factors.</li>

                    <li>Receive recommended vaccinations, such as HPV vaccination where available.</li>

                </ul>

            </section>

            <section className="lesson-section">

                <h3>5. Testing & Treatment</h3>

                <p>

                    Many STIs can be treated, and some can be cured.
                    Early testing and treatment help reduce complications
                    and prevent transmission.

                </p>

            </section>

            <section className="lesson-section">

                <h3>6. Myths & Facts</h3>

                <ul>

                    <li><strong>Myth:</strong> You always know if you have an STI.</li>

                    <li><strong>Fact:</strong> Many STIs cause no symptoms.</li>

                    <li><strong>Myth:</strong> STIs always go away on their own.</li>

                    <li><strong>Fact:</strong> Many require medical evaluation and treatment.</li>

                </ul>

            </section>

            <section className="lesson-section warning-box">

                <h3>7. When to Seek Medical Care</h3>

                <ul>

                    <li>Unusual discharge.</li>

                    <li>Genital sores or ulcers.</li>

                    <li>Pain during urination.</li>

                    <li>After possible exposure to an STI.</li>

                </ul>

            </section>

        </LessonLayout>

    );

}

export default STILesson;