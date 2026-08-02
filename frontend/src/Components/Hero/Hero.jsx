import "./Hero.css";
import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

import PrivacyCard from "./PrivacyCard";

import heroImage from "../../assets/clinic-image2.jpg";

const Hero = () => {
  return (
    <section className="hero">

      <div className="container hero-container">

        {/* Left */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <div className="hero-badge">

            <FaCheckCircle />

            Safe • Confidential • Trusted

          </div>

          <h1>

            Your Journey to

            <span> Better Sexual &</span>

            Reproductive Health

          </h1>

          <p>

            Access trusted information, confidential consultations,
            verified clinics and supportive communities—all in one
            secure platform designed for adolescents and young women.

          </p>

          <div className="hero-buttons">

            <button className="primary-btn">

              Join Now

              <FaArrowRight />

            </button>

            <button className="secondary-btn">

              Continue as Guest

            </button>

          </div>

          <div className="community">

            <div className="avatars">

              <img
                src="https://i.pravatar.cc/40?img=11"
                alt=""
              />

              <img
                src="https://i.pravatar.cc/40?img=21"
                alt=""
              />

              <img
                src="https://i.pravatar.cc/40?img=31"
                alt=""
              />

              <img
                src="https://i.pravatar.cc/40?img=41"
                alt=""
              />

            </div>

            <div>

              <strong>12,000+</strong>

              <p>Young women joined this month</p>

            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          className="hero-image"
          initial={{ opacity:0, x:40 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:.9 }}
        >

          <img
            src={heroImage}
            alt="Healthcare consultation"
          />

          <PrivacyCard />

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;