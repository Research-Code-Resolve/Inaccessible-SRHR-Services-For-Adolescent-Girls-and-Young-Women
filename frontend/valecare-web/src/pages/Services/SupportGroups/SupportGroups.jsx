import { Link } from "react-router-dom";
import {
  FaUsers,
  FaPerson,
  FaBaby,
  FaHeart,
  FaPeopleGroup,
  FaVirus,
  FaBrain,
} from "react-icons/fa6";

import "./SupportGroups.css";

const SupportGroups = () => {
  const supportGroups = [
    {
      title: "Adolescents (15–19)",
      description:
        "Connect with peer support and safe community spaces for adolescents.",
      icon: <FaPerson />,
      path: "/services/support-groups/adolescents",
    },

    {
      title: "Young Women (20–24)",
      description:
        "Find peer support and community spaces for young women.",
      icon: <FaUsers />,
      path: "/services/support-groups/young-women",
    },

    {
      title: "Pregnancy Support",
      description:
        "Connect with others for support and information during pregnancy.",
      icon: <FaBaby />,
      path: "/services/support-groups/pregnancy",
    },

    {
      title: "New Mothers",
      description:
        "Find support and shared experiences for mothers after childbirth.",
      icon: <FaHeart />,
      path: "/services/support-groups/new-mothers",
    },

    {
      title: "Family Planning",
      description:
        "Access peer support and information about family planning.",
      icon: <FaPeopleGroup />,
      path: "/services/support-groups/family-planning",
    },

    {
      title: "Living with HIV",
      description:
        "Connect with supportive communities for people living with HIV.",
      icon: <FaVirus />,
      path: "/services/support-groups/living-with-hiv",
    },

    {
      title: "Mental Health Support",
      description:
        "Find supportive spaces for emotional wellbeing and mental health.",
      icon: <FaBrain />,
      path: "/services/support-groups/mental-health",
    },
  ];

  return (
    <div className="support-groups-page">

      {/* Header */}

      <div className="page-header">

        <Link
          to="/services"
          className="back-button"
        >
          ←
        </Link>

        <h1>Support Groups</h1>

      </div>

      {/* Introduction */}

      <div className="support-intro">

        <div className="support-icon">
          <FaUsers />
        </div>

        <h2>Find a Support Group</h2>

        <p>
          Choose a support group that matches your needs
          and find supportive community spaces.
        </p>

      </div>

      {/* Support Groups */}

      <div className="support-groups-list">

        {supportGroups.map((group) => (

          <Link
            key={group.title}
            to={group.path}
            className="support-card"
          >

            <div className="support-card-icon">
              {group.icon}
            </div>

            <div className="support-card-content">

              <h3>{group.title}</h3>

              <p>{group.description}</p>

            </div>

            <span className="support-arrow">
              →
            </span>

          </Link>

        ))}

      </div>

    </div>
  );
};

export default SupportGroups;