import "./Section.css";
import FeatureCard from "../FeatureCard/FeatureCard";

const Section = ({
    title,
    icon,
    data,
    guest = false
}) => {

    return (

        <section className="dashboardSection">

            <div className="sectionHeader">

                <span className="sectionIcon">

                    {icon}

                </span>

                <h2>{title}</h2>

            </div>

            {data.map((item) => (

                <FeatureCard

                    key={item.title}

                    title={item.title}

                    description={item.description}

                    icon={item.icon}

                    path={item.path}

                    guest={guest}

                    requiresAccount={item.requiresAccount}

                />

            ))}

        </section>

    );

};

export default Section;