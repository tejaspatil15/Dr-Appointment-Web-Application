import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";


function Sidebar2() {
  return (
    <div>
      <div style={{ backgroundColor: "#e5f4f9 ", borderRadius: "20px" ,marginBottom: "20ch" , marginTop: "20px"}}>
      <nav class="navbar">
        <ul class="navbar-nav">

          <a href="/profileP">

            <li class="nav-item link-active">
              <a class="nav-link" href="/profileP">
                <h4>Profile</h4>
              </a>
            </li>
          </a>
          {/* <a  href="/dashboardP">

            <li class="nav-item link-active">
              <a class="nav-link" href="/dashboardP">
                <h4>Dashboard</h4>
              </a>
            </li>
          </a> */}

          <a  href="/bookAppointmentsP">
            <li class="nav-item link-active">
              <a class="nav-link" href="/bookAppointmentsP">
                <h4>Book Appointment</h4>
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

export default Sidebar2;
