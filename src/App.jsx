// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedRole = localStorage.getItem("role");
    if (savedToken) {
      setToken(savedToken);
      setRole(savedRole);
    }
  }, []);

  // Funktion för att logga ut
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken(null);
    setRole(null);
  };

  return (
    <Router>
      <Routes>
        {!token ? (
          <Route path="/" element={<Login setToken={setToken} setRole={setRole} />} />
        ) : (
          <>
            <Route path="/" element={<Home token={token} handleLogout={handleLogout} />} />
            {role === "admin" && <Route path="/admin" element={<Admin token={token} handleLogout={handleLogout} />} />}
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
