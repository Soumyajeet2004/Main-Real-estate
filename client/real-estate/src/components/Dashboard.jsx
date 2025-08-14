import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    // Get the user object stored during login/register
    const storedUser = localStorage.getItem('user');
    if (storedUser && storedUser !== "undefined") {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Invalid user data in localStorage", e);
      }
    }
  }, []);

  if (!user) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        No user details found. Please log in.
      </h2>
    );
  }

  return <>
  <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.3s ease",
        background: darkMode
          ? "linear-gradient(135deg, #0f1117, #1a1f2b)"
          : "linear-gradient(135deg, #f5f7fa, #e4ebf7)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          background: darkMode ? "#161b25" : "#fff",
          color: darkMode ? "#e4e6eb" : "#333",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: darkMode
            ? "0 0 25px rgba(0, 180, 255, 0.15)"
            : "0 8px 30px rgba(0,0,0,0.08)",
          maxWidth: "480px",
          width: "100%",
          textAlign: "center",
          transition: "all 0.3s ease",
        }}
      >
        {/* Profile Avatar */}
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #1e90ff, #00c2ff)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            fontWeight: "bold",
            margin: "0 auto 20px",
            boxShadow: "0 4px 15px rgba(0, 180, 255, 0.4)", // subtle glow
          }}
        >
          {user.name?.charAt(0).toUpperCase()}
        </div>

        {/* Welcome */}
        <h1
          style={{
            fontSize: "1.7rem",
            marginBottom: "10px",
            fontWeight: 600,
            color: darkMode ? "#eaf4ff" : "#222",
          }}
        >
          Welcome, {user.name} 👋
        </h1>
        <p style={{ marginBottom: "30px", color: darkMode ? "#9aa3b2" : "#666" }}>
          We’re glad to have you here at <strong>HomeConnect</strong>.
        </p>

        {/* User Info Card */}
        <div
          style={{
            textAlign: "left",
            background: darkMode ? "#1f2533" : "#f0f2f5",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: darkMode
              ? "inset 0 1px 3px rgba(255,255,255,0.05)"
              : "inset 0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <p style={{ margin: "8px 0" }}>
            <strong>Name:</strong> {user.name}
          </p>
          <p style={{ margin: "8px 0" }}>
            <strong>Email:</strong> {user.email}
          </p>
          {user.role && (
            <p style={{ margin: "8px 0" }}>
              <strong>Role:</strong> {user.role}
            </p>
          )}
        </div>

        {/* Home Page Button */}
        <Link to="/home">
          <button
            style={{
              background: "linear-gradient(135deg, #1e90ff, #00c2ff)",
              color: "#fff",
              marginTop: "30px",
              padding: "12px 28px",
              fontSize: "16px",
              fontWeight: "600",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              boxShadow:
                "0 4px 15px rgba(0, 180, 255, 0.4), 0 0 10px rgba(0, 180, 255, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow =
                "0 6px 20px rgba(0, 180, 255, 0.5), 0 0 15px rgba(0, 180, 255, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow =
                "0 4px 15px rgba(0, 180, 255, 0.4), 0 0 10px rgba(0, 180, 255, 0.3)";
            }}
          >
            Home Page
          </button>
        </Link>

        {/* Dark Mode Toggle */}
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: darkMode ? "#00b4ff" : "#e8ebf2",
              color: darkMode ? "#fff" : "#222",
              padding: "10px 20px",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s ease",
              boxShadow: darkMode
                ? "0 0 12px rgba(0, 180, 255, 0.5)"
                : "0 0 6px rgba(0,0,0,0.1)",
            }}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  </>
};

export default Dashboard;
