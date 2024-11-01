import React from "react";
import Header from "../components/Header";

const Home = ({ token, handleLogout }) => {
  return (
    <div>
      <Header handleLogout={handleLogout} />
      <h1>Välkommen till din startsida!</h1>
      {/* Resten av din Home-komponent */}
    </div>
  );
};

export default Home;
