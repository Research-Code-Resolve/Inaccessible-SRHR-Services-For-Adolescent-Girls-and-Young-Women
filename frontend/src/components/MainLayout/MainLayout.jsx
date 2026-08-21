import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main-layout">

      {/* Sidebar */}
      <aside className="main-sidebar">
        <Sidebar />
      </aside>

      {/* Main application content */}
      <main className="main-content">
        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;