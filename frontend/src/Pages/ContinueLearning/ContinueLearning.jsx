import { useNavigate } from "react-router-dom";

import LessonLayout from "../../components/LessonLayout/LessonLayout";
import ModuleCard from "../../components/ModuleCard/ModuleCard";

import "./ContinueLearning.css";

const currentModules = [
    {
        title: "Menstrual Health Basics",
        subtitle: "In progress • 60% complete",
        route: "/menstrual-health"
    },
    {
        title: "Pregnancy Nutrition",
        subtitle: "In progress • 40% complete",
        route: "/pregnancy"
    }
];

const completedModules = [
    {
        title: "Family Planning Essentials",
        subtitle: "Completed",
        route: "/family-planning"
    },
    {
        title: "Healthy Child Care",
        subtitle: "Completed",
        route: "/child-care"
    }
];

const suggestedModules = [
    {
        title: "Adolescence & Puberty",
        subtitle: "Start next",
        route: "/adolescence-puberty"
    },
    {
        title: "STI Care Overview",
        subtitle: "Recommended",
        route: "/sti-care"
    }
];

function ContinueLearning() {
    const navigate = useNavigate();

    return (
        <LessonLayout title="Continue Learning" backRoute="/dashboard">
            <section className="continue-learning-section">
                <h3>Current learning</h3>
                <div className="continue-learning-list">
                    {currentModules.map((module) => (
                        <ModuleCard
                            key={module.title}
                            title={module.title}
                            subtitle={module.subtitle}
                            onClick={() => navigate(module.route)}
                        />
                    ))}
                </div>
            </section>

            <section className="continue-learning-section">
                <h3>Completed modules</h3>
                <div className="continue-learning-list">
                    {completedModules.map((module) => (
                        <ModuleCard
                            key={module.title}
                            title={module.title}
                            subtitle={module.subtitle}
                            onClick={() => navigate(module.route)}
                        />
                    ))}
                </div>
            </section>

            <section className="continue-learning-section">
                <h3>Suggested next</h3>
                <div className="continue-learning-list">
                    {suggestedModules.map((module) => (
                        <ModuleCard
                            key={module.title}
                            title={module.title}
                            subtitle={module.subtitle}
                            onClick={() => navigate(module.route)}
                        />
                    ))}
                </div>
            </section>
        </LessonLayout>
    );
}

export default ContinueLearning;
