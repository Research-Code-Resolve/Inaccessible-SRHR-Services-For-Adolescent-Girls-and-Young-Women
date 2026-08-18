import {
  FaBookMedical,
  FaCalendarAlt,
  FaComments,
  FaHeartbeat,
  FaShieldAlt,
} from "react-icons/fa";

export const welcomeData = {
  appName: "ValeCare",

  title: "Welcome to ValeCare",

  tagline:
    "Empowering adolescent girls and young women with trusted sexual and reproductive health information, digital health tools, and access to quality healthcare services.",

  heroDescription:
    "Learn from reliable health resources, track your menstrual cycle or pregnancy, connect with healthcare providers, find nearby health services, and receive confidential support—all in one secure place.",

  buttons: {
    createAccount: "Create Account",
    guest: "Continue as Guest",
    signIn: "Sign In",
    language: "English",
  },

  signInText: "Already have an account?",

  privacy: {
    title: "Your Privacy Matters",

    description:
      "Your personal health information is protected using secure encryption and modern security standards. ValeCare does not share your personal information without your permission. Your consultations, health records, and tracker information remain confidential.",
  },
};

export const featureCards = [
  {
    id: 1,
    icon: FaBookMedical,
    title: "Learn",
    description:
      "Access trusted information on sexual and reproductive health, nutrition, pregnancy, puberty, family planning, and mental wellbeing.",
  },
  {
    id: 2,
    icon: FaCalendarAlt,
    title: "Track",
    description:
      "Monitor your menstrual cycle, pregnancy journey, symptoms, appointments, and important health milestones.",
  },
  {
    id: 3,
    icon: FaComments,
    title: "Consult",
    description:
      "Connect with healthcare professionals and access reliable health services whenever you need support.",
  },
  {
    id: 4,
    icon: FaHeartbeat,
    title: "Stay Healthy",
    description:
      "Receive personalized health guidance, reminders, and wellness tips to support a healthier lifestyle.",
  },
];

export const privacyHighlights = [
  {
    id: 1,
    icon: FaShieldAlt,
    text: "Secure and encrypted data storage",
  },
  {
    id: 2,
    icon: FaShieldAlt,
    text: "Your information remains confidential",
  },
  {
    id: 3,
    icon: FaShieldAlt,
    text: "You control how your health information is shared",
  },
];