import React, { useState } from "react";
import Sidebar from "../components/SideBar/SideBar";
import Topbar from "../components/Topbar/Topbar";
import FloatingAI from "../components/FloatingAI/FloatingAI";
import Dashboard from "../pages/Dashboard/Dashboard";
import "./DashboardWrapper.css";
import { useAuth } from "../context/AuthContext";


const DashboardWrapper = () => {

  return (

    <div className="dashboard-wrapper">

      <aside className="dashboard-sidebar">

        <Sidebar />

      </aside>


      <main className="dashboard-main">

        <Dashboard />

      </main>

    </div>

  );

};


export default DashboardWrapper;
