import React from "react";
import Sidebar from "./sidebar";

function YourAppointments() {
  return (
    <div class="mt-4 mb-4">
      <div style={{ backgroundColor: " #e5f4f9 ", borderRadius: "10px" }}>
        <div style={{ padding: "5px"}}>
          <h1>Today's Appointments</h1>
          <div class="card bg-light text-dark ml-3 mb-4 p-2">
            <div>Mr. Name Surname</div>
            <p>
              {" "}
              Reason (Upto 100 characters only){" "}
            </p>
          </div>
          <div class="card bg-light text-dark ml-3 mb-4 p-2">
            <div>Mr. Name Surname</div>
            <p> Reason (Upto 100 characters only)</p>
          </div>
          <div class="card bg-light text-dark ml-3 mb-4 p-2">
            <div>Mr. Name Surname</div>
            <p>
              {" "}
              Reason (Upto 100 characters only)
            </p>
          </div>
          <div class="card bg-light text-dark ml-3 mb-4 p-2">
            <div>Mr. Name Surname</div>
            <p> Reason (Upto 100 characters only)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourAppointments;
