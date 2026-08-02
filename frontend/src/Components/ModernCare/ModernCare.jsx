import "./ModernCare.css";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaUserMd,
  FaHeart
} from "react-icons/fa";

import clinicImage from "../../assets/clinic-image1.jpg";

const ModernCare = () => {
  return (
    <section className="modern-care">

      <div className="container modern-container">

        {/* Left Image */}

        <motion.div
          className="modern-image"
          initial={{ opacity:0, x:-60 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:.8 }}
          viewport={{ once:true }}
        >

          <img src={clinicImage} alt="Healthcare Professional" />

          <div className="verified-card">

            <FaShieldAlt />

            <div>
              <h4>Clinically Verified</h4>
              <p>Trusted by licensed healthcare professionals</p>
            </div>

          </div>

        </motion.div>

        {/* Right Content */}

        <motion.div
          className="modern-content"
          initial={{ opacity:0, x:60 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:.8 }}
          viewport={{ once:true }}
        >

          <span className="section-tag">
            Why ValeCare?
          </span>

          <h2>

            Modern Care

            <span> for Every Individual</span>

          </h2>

          <p>

            We combine digital healthcare, verified professionals,
            educational resources and community support into one
            confidential platform built specifically for adolescents
            and young women.

          </p>

          <div className="care-list">

            <div className="care-item">
              <FaCheckCircle />
              Inclusive Language
            </div>

            <div className="care-item">
              <FaCheckCircle />
              Trauma-informed Support
            </div>

            <div className="care-item">
              <FaCheckCircle />
              Anonymous Access
            </div>

            <div className="care-item">
              <FaCheckCircle />
              End-to-End Encryption
            </div>

          </div>

          <div className="stats">

            <div className="stat-card">

              <FaUserMd />

              <h3>150+</h3>

              <span>Health Experts</span>

            </div>

            <div className="stat-card">

              <FaHeart />

              <h3>12K+</h3>

              <span>Young Women Supported</span>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default ModernCare;