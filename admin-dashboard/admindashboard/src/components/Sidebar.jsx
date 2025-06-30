import React from "react";

export default function Sidebar({ isOpen }) {
  return (
    <div
      style={{
        width: isOpen ? 250 : 60,
        backgroundColor: "#2d3748",
        color: "white",
        transition: "width 0.3s",
        padding: "1rem",
      }}
    >
      <h2 style={{ fontSize: "1.5rem" }}>
        {isOpen ? "Admin Dashboard" : "AD"}
      </h2>
      {isOpen && (
        <nav style={{ marginTop: "2rem" }}>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li style={{ marginBottom: "1rem" }}>Dashboard</li>
            <li style={{ marginBottom: "1rem" }}>Users</li>
            <li style={{ marginBottom: "1rem" }}>Settings</li>
          </ul>
        </nav>
      )}
    </div>
  );
}
