import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ModuleCard from "../../components/ModuleCard/ModuleCard";
import FloatingAI from "../../components/FloatingAI/FloatingAI";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";

import dashboardData from "./dashboardData";

import "./Dashboard.css";

function Dashboard() {

    const navigate = useNavigate();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);

    const username = localStorage.getItem("currentUser") || "Guest";

    function handleLogoutConfirm() {
        setConfirmOpen(true);
    }

    function handleLogout() {
        localStorage.removeItem("currentUser");
        setConfirmOpen(false);
        setSidebarOpen(false);
        navigate("/login");
    }

    return (

        <div className="dashboard-page">

            <Header
                onMenuClick={() => setSidebarOpen(true)}
                onNotificationClick={() => console.log("Notifications")}
                onProfileClick={() => navigate("/settings")}
            />

            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                onLogout={handleLogoutConfirm}
            />

            <ConfirmModal
                open={confirmOpen}
                title="Confirm Logout"
                message="Are you sure you want to log out?"
                confirmText="Log Out"
                cancelText="Stay Logged In"
                danger={true}
                onConfirm={handleLogout}
                onCancel={() => setConfirmOpen(false)}
            />

            <main className="dashboard-content">

                <section className="dashboard-welcome">

                    <h2>

                        Welcome 👋

                    </h2>

                    <p>

                        {username}

                    </p>

                </section>

                <SearchBar
                    onClick={() => navigate("/health-services")}
                />

                {dashboardData.map((section) => (

                    <section
                        key={section.section}
                        className="dashboard-section"
                    >

                        <h3 className="section-title">

                            {section.section}

                        </h3>

                        <div className="module-list">
                            {section.items.map((item) => (
                                <ModuleCard
                                    key={item.title}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    onClick={() => navigate(item.route)}
                                />
                            ))}
                        </div>

                    </section>

                ))}

            </main>
            <FloatingAI />
        </div>
    );
}
export default Dashboard;