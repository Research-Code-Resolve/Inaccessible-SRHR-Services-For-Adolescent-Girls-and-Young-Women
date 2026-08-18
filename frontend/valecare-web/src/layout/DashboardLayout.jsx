import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>Welcome to ValeCare</h1>

        <p>
          Your trusted space for sexual and reproductive
          health information and services.
        </p>
      </div>

      <div className="health-search">
        <button
          onClick={() => navigate("/find-health-centre")}
        >
          Find the nearest health center
        </button>
      </div>

      <section className="health-modules">

        {/* Maternal & Child Health */}
        <button
          className="module-card"
          onClick={() =>
            navigate("/maternal-child-health")
          }
        >
          <h2>Maternal & Child Health</h2>

          <p>
            Pregnancy, child care, and pregnancy tracking.
          </p>

          <span>→</span>
        </button>

        {/* Menstrual Health */}
        <button
          className="module-card"
          onClick={() =>
            navigate("/menstrual-health")
          }
        >
          <h2>Menstrual Health</h2>

          <p>
            Learn about menstrual health and track your cycle.
          </p>

          <span>→</span>
        </button>

        {/* Nutrition */}
        <button
          className="module-card"
          onClick={() => navigate("/nutrition")}
        >
          <h2>Nutrition</h2>

          <p>
            Learn about healthy eating and good nutrition.
          </p>

          <span>→</span>
        </button>

        {/* Adolescence & Puberty */}
        <button
          className="module-card"
          onClick={() =>
            navigate("/adolescence-puberty")
          }
        >
          <h2>Adolescence & Puberty</h2>

          <p>
            Learn about puberty, physical changes,
            relationships, and personal wellbeing.
          </p>

          <span>→</span>
        </button>

        {/* Family Planning */}
        <button
          className="module-card"
          onClick={() =>
            navigate("/family-planning")
          }
        >
          <h2>Family Planning</h2>

          <p>
            Learn about family planning methods and
            available services.
          </p>

          <span>→</span>
        </button>

        {/* STI Prevention & Care */}
        <button
          className="module-card"
          onClick={() =>
            navigate("/sti-care")
          }
        >
          <h2>STI Prevention & Care</h2>

          <p>
            Learn about STI prevention, testing,
            treatment, and care.
          </p>

          <span>→</span>
        </button>

        {/* Mental Health */}
        <button
          className="module-card"
          onClick={() =>
            navigate("/mental-health")
          }
        >
          <h2>Mental Health</h2>

          <p>
            Learn about emotional wellbeing, stress,
            coping, and healthy relationships.
          </p>

          <span>→</span>
        </button>

        {/* Consultation */}
        <button
          className="module-card"
          onClick={() =>
            navigate("/consultation")
          }
        >
          <h2>Consultation</h2>

          <p>
            Find health services and access consultation
            support.
          </p>

          <span>→</span>
        </button>

      </section>

    </div>
  );
}

export default Dashboard;