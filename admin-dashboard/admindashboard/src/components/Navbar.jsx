import React from "react";

export default function Navbar({ toggleSidebar }) {
  return (
    <header
      style={{
        backgroundColor: "#4a5568",
        color: "white",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <button
        onClick={toggleSidebar}
        style={{
          fontSize: "1.2rem",
          marginRight: "1rem",
          cursor: "pointer",
          background: "none",
          border: "none",
          color: "white",
        }}
      >
        &#9776;
      </button>
      <h1>Dashboard</h1>
    </header>
  );
}
