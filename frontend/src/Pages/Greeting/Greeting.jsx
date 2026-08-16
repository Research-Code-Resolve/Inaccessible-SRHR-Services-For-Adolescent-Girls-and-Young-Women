import "./Greeting.css";
import { motion } from "framer-motion";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Greeting = ({
  username = "Guest",
  guest = false
}) => {

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  }

  return (
    <motion.section
      className="greeting"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      <div className="greetingText">

        <span className="greetingTitle">
          {guest ? "Welcome" : greeting},
        </span>

        <h1>
          {guest ? "Guest" : username}
          <span className="wave"> 👋</span>
        </h1>

        <p>
          {guest
            ? "Explore ValeCare. Create an account anytime to save your progress."
            : "What would you like to do today?"}
        </p>

      </div>

      <div className="profileAvatar">

        <HiOutlineUserCircle />

      </div>

    </motion.section>
  );
};

export default Greeting;