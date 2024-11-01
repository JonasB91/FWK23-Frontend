// src/components/Login.jsx
import React, { useState } from "react";
import { login, register } from "../services/api"; // Lägg till register-funktionen om du har den
import styles from "./Login.module.css";

const Login = ({ setToken, setRole }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false); // För att växla mellan registrering och inloggning

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ username, password });
      setToken(data.token);
      setRole(data.role);
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
    } catch (err) {
      setError("Inloggningen misslyckades");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await register({ username, password });
      setIsRegister(false); // Växla till inloggning efter registrering
      alert("Registreringen lyckades! Logga in med ditt nya konto.");
    } catch (err) {
      setError("Registreringen misslyckades");
    }
  };

  return (
    <form onSubmit={isRegister ? handleRegister : handleLogin} className={styles.form}>
      <input
        type="text"
        placeholder="Användarnamn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Lösenord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        {isRegister ? "Registrera" : "Logga in"}
      </button>
      {error && <p className={styles.error}>{error}</p>}
      <p onClick={() => setIsRegister(!isRegister)} className={styles.toggle}>
        {isRegister ? "Har du redan ett konto? Logga in" : "Inget konto? Registrera dig"}
      </p>
    </form>
  );
};

export default Login;
