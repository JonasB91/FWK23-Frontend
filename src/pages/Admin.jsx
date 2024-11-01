import React from "react";
import AdminDashboard from "../components/AdminDashboard";

const Admin = ({ token }) => {
  return (
    <div>
      <h1>Admin-panel</h1>
      <AdminDashboard token={token} />
    </div>
  );
};

export default Admin; // Viktigt: default export
