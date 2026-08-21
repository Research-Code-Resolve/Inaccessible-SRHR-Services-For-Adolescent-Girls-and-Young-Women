import {
  FaHome,
  FaBookMedical,
  FaHospital,
  FaComments,
  FaCalendarAlt,
  FaBell,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: FaHome,
  },
  {
    id: 2,
    title: "Learn",
    path: "/learn",
    icon: FaBookMedical,
  },
  {
    id: 3,
    title: "Health Services",
    path: "/health-services",
    icon: FaHospital,
  },
  {
    id: 4,
    title: "Consultation",
    path: "/consultation",
    icon: FaComments,
  },
  {
    id: 6,
    title: "Notifications",
    path: "/notifications",
    icon: FaBell,
    authOnly: true,
  },
  {
    id: 7,
    title: "Profile",
    path: "/profile",
    icon: FaUserCircle,
    authOnly: true,
  },
  {
    id: 8,
    title: "Settings",
    path: "/settings",
    icon: FaCog,
    authOnly: true,
  },
  {
    id: 9,
    title: "Logout",
    path: "/logout",
    icon: FaSignOutAlt,
    authOnly: true,
  },
];