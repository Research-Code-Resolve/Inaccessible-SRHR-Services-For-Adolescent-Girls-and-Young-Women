import "./HealthTip.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiLightBulb } from "react-icons/hi";

import healthTips from "./healthTips";

const HealthTip = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) =>
        prev === healthTips.length - 1 ? 0 : prev + 1
      );

    }, 7000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="healthTip">

      <div className="healthHeader">

        <HiLightBulb />

        <h3>Daily Health Tip</h3>

      </div>

      <AnimatePresence mode="wait">

        <motion.div

          key={healthTips[index].id}

          initial={{ opacity: 0, x: 40 }}

          animate={{ opacity: 1, x: 0 }}

          exit={{ opacity: 0, x: -40 }}

          transition={{ duration: .4 }}

          className="tipCard"

        >

          <span className="category">

            {healthTips[index].category}

          </span>

          <h4>

            {healthTips[index].title}

          </h4>

          <p>

            {healthTips[index].description}

          </p>

        </motion.div>

      </AnimatePresence>

      <div className="dots">

        {healthTips.map((tip, i) => (

          <button

            key={tip.id}

            className={i === index ? "dot active" : "dot"}

            onClick={() => setIndex(i)}

          />

        ))}

      </div>

    </section>

  );

};

export default HealthTip;