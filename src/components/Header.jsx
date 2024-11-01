import React from "react";

const Header = ({ handleLogout }) => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid #ddd" }}>
      <h1>Min Applikation</h1>
      <button onClick={handleLogout} style={{ padding: "8px 12px", cursor: "pointer" }}>Logga ut</button>
    </header>
  );
};

export default Header;
