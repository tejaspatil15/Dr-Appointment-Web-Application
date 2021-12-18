import React from "react";
import Dashboard from "./dashboard";
import YourAppointments from "./yourAppointments";
import Profile from "./profile";
import Sidebar from "./sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function MainDashboard() {

  return (
    <div class="container-fluid3">
      <div class="row mt-4">
        <div class="col-sm-3">
          <Sidebar />
        </div>
        <div class="col-sm-9" >

          <Switch>
            <Route path="/profileD" exact component={Profile} />
            <Route path="/dashboardD" exact component={Dashboard} />
            <Route path="/yourAppointmentsD" exact component={YourAppointments} />

          </Switch>

        </div>
      </div>
    </div>
  );
}
