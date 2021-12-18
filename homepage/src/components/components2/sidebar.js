import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";


function Sidebar() {
  return (
    <div>
      <div style={{ backgroundColor: "#e5f4f9 ", borderRadius: "20px" }}>
      <nav class="navbar">
        <ul class="navbar-nav">

          <Link to="/profileD">

            <li class="nav-item link-active">
              <a class="nav-link" href="#">
                <h4>Profile</h4>
              </a>
            </li>
          </Link>
          <Link to="/dashboardD">

            <li class="nav-item link-active">
              <a class="nav-link" href="#">
                <h4>Dashboard</h4>
              </a>
            </li>
          </Link>

          <Link to="/yourAppointmentsD">
            <li class="nav-item link-active">
              <a class="nav-link" href="#">
                <h4>Your Appointments</h4>
              </a>
            </li>
          </Link>
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
