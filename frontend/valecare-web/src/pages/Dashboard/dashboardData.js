import {
  FaHospital,
  FaComments,
  FaBaby,
  FaCalendarAlt,
  FaAppleAlt,
  FaTint,
  FaUserFriends,
  FaHandsHelping,
  FaClinicMedical,
  FaHeartbeat,
} from "react-icons/fa";

/* =========================
   QUICK ACTIONS
========================= */

export const quickActions = [
  {
    id: 1,
    title: "Find Health Facility",
    description: "Locate nearby hospitals and clinics.",
    icon: FaHospital,
    color: "#0B6E4F",
    path: "/health-services",
  },

  {
    id: 2,
    title: "Consultation",
    description: "Book an appointment or chat with a healthcare provider.",
    icon: FaComments,
    color: "#1976D2",
    path: "/consultation",
  },

  {
    id: 3,
    title: "Pregnancy Tracker",
    description: "Track pregnancy milestones and baby development.",
    icon: FaBaby,
    color: "#F57C00",
    path: "/pregnancy-tracker",
  },

  {
    id: 4,
    title: "Menstrual Tracker",
    description: "Monitor your menstrual cycle and symptoms.",
    icon: FaCalendarAlt,
    color: "#C2185B",
    path: "/menstrual-tracker",
  },
];

/* =========================
   LEARNING MODULES
========================= */

export const modules = [
  {
    id: 1,
    title: "Maternal & Child Health",
    description: "Pregnancy, childbirth and newborn care.",
    icon: FaBaby,
    color: "#0B6E4F",
    path: "/maternal-child-health",
  },

  {
    id: 2,
    title: "Menstrual Health",
    description: "Periods, hygiene and menstrual wellbeing.",
    icon: FaTint,
    color: "#E91E63",
    path: "/menstrual-health",
  },

  {
    id: 3,
    title: "Nutrition",
    description: "Healthy eating and balanced diets.",
    icon: FaAppleAlt,
    color: "#FB8C00",
    path: "/nutrition",
  },

  {
    id: 4,
    title: "Adolescence & Puberty",
    description: "Body changes, emotions and healthy growth.",
    icon: FaUserFriends,
    color: "#7B1FA2",
    path: "/puberty",
  },

  {
    id: 5,
    title: "Family Planning",
    description: "Contraception and reproductive choices.",
    icon: FaHandsHelping,
    color: "#1976D2",
    path: "/family-planning",
  },

  {
    id: 6,
    title: "STI Prevention & Care",
    description: "Testing, prevention and treatment information.",
    icon: FaClinicMedical,
    color: "#D32F2F",
    path: "/sti-prevention",
  },

  {
    id: 7,
    title: "Mental Health",
    description: "Emotional wellbeing and mental wellness support.",
    icon: FaHeartbeat,
    color: "#00897B",
    path: "/mental-health",
  },

  {
    id: 8,
    title: "Health Services",
    description: "Find hospitals, clinics and SRHR services.",
    icon: FaHospital,
    color: "#546E7A",
    path: "/health-services",
  },
];

/* =========================
   HEALTH TIP
========================= */

export const healthTip = {
  title: "Today's Health Tip",

  tip: "Drink enough clean water every day. Proper hydration helps maintain healthy body functions, improves concentration, supports digestion and keeps your body energized.",

  learnMoreLink: "/nutrition",
};

/* =========================
   RECENT ACTIVITIES
========================= */

export const recentActivities = [
  {
    id: 1,
    title: "Continue Nutrition During Adolescence",
    time: "Today",
    path: "/nutrition",
  },

  {
    id: 2,
    title: "Pregnancy Tracker Updated",
    time: "Yesterday",
    path: "/pregnancy-tracker",
  },

  {
    id: 3,
    title: "Consultation Scheduled",
    time: "Friday • 2:00 PM",
    path: "/consultation",
  },

  {
    id: 4,
    title: "Mental Health Lesson Completed",
    time: "2 days ago",
    path: "/mental-health",
  },
];