import React from "react";
import Dashboard2 from "./dashboard2";
import YourAppointments2 from "./yourAppointments2";
import ProfileP from "./profileP";
import Sidebar2 from "./sidebar2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function MainDashboard2() {

  return (
    <div class="container-fluid3">
      <div class="row mt-4">
        <div class="col-sm-3">
          <Sidebar2 />
        </div>
        <div class="col-sm-9" >

          <Switch>
            <Route path="/profileP" exact component={ProfileP} />
            <Route path="/dashboardP" exact component={Dashboard2} />
            <Route path="/bookAppointmentsP" exact component={YourAppointments2} />

          </Switch>

        </div>
      </div>
    </div>
  );
}
