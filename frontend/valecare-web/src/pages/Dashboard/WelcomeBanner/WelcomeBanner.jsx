import "./WelcomeBanner.css";
import { FaSun } from "react-icons/fa";
import LanguageSelect from "../../components/LanguageSelect/LanguageSelect";
const WelcomeBanner = ({
  username = "Guest",
}) => {

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <section className="welcome-banner">

      <div className="welcome-text">

        <div className="welcome-title">

          <FaSun />

          <h1>
            {greeting}, {username}
          </h1>

        </div>

        <p>
          Welcome to ValeCare. Continue learning,
          tracking your health, and accessing
          trusted healthcare services.
        </p>

      </div>
<div className="welcome-top-bar">
  <LanguageSelect />
</div>
    </section>
  );
};

export default WelcomeBanner;