import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPersonPregnant,
  FaDroplet,
  FaUsers,
  FaVirus,
  FaBrain,
  FaAppleWhole,
  FaPerson,
  FaHandHoldingHeart,
  FaBars,
  FaMagnifyingGlass,
  FaShieldHeart,
} from "react-icons/fa6";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

import "./Dashboard.css";
import FloatingAssistant from "../../components/FloatingAssistant/FloatingAssistant";
const modules = [
  {
    title: "Menstrual Health",
    description: "Learn about menstrual health and track your cycle.",
    icon: <FaDroplet />,
    path: "/menstrual-health",
  },
  {
    title: "Pregnancy & Maternal Care",
    description:
      "Learn about pregnancy, maternal care and pregnancy tracking.",
    icon: <FaPersonPregnant />,
     path: "/pregnancy-maternal-care",
  },
  {
    title: "Family Planning",
    description: "Learn about contraception, fertility and family planning.",
    icon: <FaUsers />,
   path: "/family-planning/learn",
  },
  {
    title: "STI Prevention & Care",
    description: "Learn about STI prevention, testing and treatment.",
    icon: <FaVirus />,
     path: "/sti-prevention-care",
  },
  {
    title: "Mental Health",
    description: "Learn about emotional wellbeing and mental health.",
    icon: <FaBrain />,
     path: "/mental-health",
  },
  {
    title: "Nutrition",
    description: "Learn about healthy eating and nutrition.",
    icon: <FaAppleWhole />,
   path: "/nutrition/learn",
  },
  {
    title: "Adolescence & Puberty",
    description: "Learn about puberty, relationships and personal wellbeing.",
    icon: <FaPerson />,
    path: "/adolescence-puberty/learn",  
  },
  {
    title: "Services",
    description: "Access consultation, support groups and emergency response.",
    icon: <FaHandHoldingHeart />,
    path: "/health-services",
  },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-page">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-body">
        <Header />

        {/* Mobile-only bar to open the Sidebar drawer (Header's own menu
            button opens its top-nav drawer instead — separate concerns) */}
        <div className="dashboard-mobile-bar">
          <button
            type="button"
            className="dashboard-menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open dashboard menu"
          >
            <FaBars />
          </button>
          <span>Dashboard</span>
        </div>

        <main className="dashboard-main">
          {/* Welcome */}
          <section className="dashboard-welcome">
            <div className="dashboard-welcome-text">
              <span className="dashboard-eyebrow">Welcome to ValeCare</span>
            
              <p>
                Access trusted sexual and reproductive health information
                and services, all in one place.
              </p>
            </div>

            <div className="dashboard-welcome-badge">
              <FaShieldHeart />
              <span>Confidential &amp; secure</span>
            </div>
          </section>

          {/* Search */}
          <div className="dashboard-search">
            <FaMagnifyingGlass className="dashboard-search-icon" />
            <input
              type="text"
              placeholder="Find the nearest health center"
              aria-label="Find the nearest health center"
            />
          </div>

          {/* Modules */}
          <section className="dashboard-modules">
            <div className="dashboard-modules-heading">
              <h2>Browse by topic</h2>
              <p>Choose an area to learn more or get support.</p>
            </div>
<FloatingAssistant />
            <div className="dashboard-modules-grid">
              {modules.map((module) => (
                <Link
                  key={module.title}
                  to={module.path}
                  className="dashboard-module-card"
                >
                  <div className="dashboard-module-icon">{module.icon}</div>

                  <div className="dashboard-module-content">
                    <h3>{module.title}</h3>
                    <p>{module.description}</p>
                  </div>

                  <span className="dashboard-module-arrow">→</span>
                </Link>
              ))}
            </div>
          </section>
          
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;

