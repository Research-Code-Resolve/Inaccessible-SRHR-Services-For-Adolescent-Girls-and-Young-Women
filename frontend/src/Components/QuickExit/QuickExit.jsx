import "./QuickExit.css";
import { FaSignOutAlt } from "react-icons/fa";

const QuickExit = () => {

  const quickExit = () => {

    window.location.href = "https://www.google.com";

  };

  return (

    <button
      className="quick-exit"
      onClick={quickExit}
      title="Quick Exit"
    >

      <FaSignOutAlt />

      <span>Quick Exit</span>

    </button>

  );

};

export default QuickExit;