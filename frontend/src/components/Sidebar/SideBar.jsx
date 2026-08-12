import "./Sidebar.css";

import { useNavigate } from "react-router-dom";

import {
    X,
    Settings,
    BookOpen,
    Bot,
    CircleHelp,
    Shield,
    Languages,
    LogOut,
    Trash2
} from "lucide-react";

function Sidebar({ isOpen, onClose }) {

    const navigate = useNavigate();

    if (!isOpen) return null;

    return (

        <div className="sidebar-overlay">

            <aside className="sidebar">

                <div className="sidebar-header">

                    <h2>ValeCare</h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        <X size={22} />
                    </button>

                </div>

                <button
                    className="sidebar-item"
                    onClick={() => navigate("/settings")}
                >
                    <Settings size={20} />

                    <span>Account Settings</span>

                </button>

                <button
                    className="sidebar-item"
                    onClick={() => navigate("/continue-learning")}
                >
                    <BookOpen size={20} />

                    <span>Continue Learning</span>

                </button>

                <button
                    className="sidebar-item"
                    onClick={() => navigate("/ai-assistant")}
                >
                    <Bot size={20} />

                    <span>AI Assistant</span>

                </button>

                <button
                    className="sidebar-item"
                    onClick={() => navigate("/faqs")}
                >
                    <CircleHelp size={20} />

                    <span>FAQs</span>

                </button>

                <button
                    className="sidebar-item"
                    onClick={() => navigate("/privacy-policy")}
                >
                    <Shield size={20} />

                    <span>Privacy Policy</span>

                </button>

                <button
                    className="sidebar-item"
                    onClick={() => navigate("/language")}
                >
                    <Languages size={20} />

                    <span>Language</span>

                </button>

                <button
                    className="sidebar-item"
                    onClick={onLogout}
                >
                    <LogOut size={20} />

                    <span>Log Out</span>

                </button>

                <button
                    className="sidebar-item delete-item"
                    onClick={() => navigate("/delete-account")}
                >
                    <Trash2 size={20} />

                    <span>Delete Account</span>

                </button>

                <div className="sidebar-footer">

                    Version 1.0

                </div>

            </aside>

        </div>

    );

}

export default Sidebar;