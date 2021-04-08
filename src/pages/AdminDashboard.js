import AdminNav from "../components/nav/AdminNav.js";
import React from "react";
const AdminDashboard = ({ token, history }) => {
  if (!token) history.push("/");
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminNav />
          </div>
          <div className="col-md-10">AdminDashboard</div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
