import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";


function Sidebar() {
  return (
    <div>
      <div style={{ backgroundColor: "#e5f4f9 ", borderRadius: "20px",marginBottom: "15ch" , marginTop: "20px" }}>
      <nav class="navbar">
        <ul class="navbar-nav">

          <a href="/profileD">

            <li class="nav-item link-active">
              <a class="nav-link" href="/profileD">
                <h4>Profile</h4>
              </a>
            </li>
          </a>
          <a  href="/dashboardD">

            <li class="nav-item link-active">
              <a class="nav-link" href="/dashboardD">
                <h4>Dashboard</h4>
              </a>
            </li>
          </a>

          <a  href="/yourAppointmentsD">
            <li class="nav-item link-active">
              <a class="nav-link" href="/yourAppointmentsD">
                <h4>Your Appointments</h4>
              </a>
            </li>
          </a>
          <li class="nav-item link-active">
            <a class="nav-link" href="#">
              {/* <button type="button" class="btn btn-primary">
                Book Appointment
              </button> */}
            </a>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  );
}

export default Sidebar;
