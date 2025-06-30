import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import DashboardContent from "./components/DashboardContent.jsx";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app-container" style={{ display: "flex", height: "100vh" }}>
      <Sidebar isOpen={sidebarOpen} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <DashboardContent />
      </div>
    </div>
  );
}
