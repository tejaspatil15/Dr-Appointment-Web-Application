import React from 'react';
import { Footer } from './Footer';
import { Aboutus } from './Aboutus';
import { PrivacyPolicy } from './PrivacyPolicy';
import { Termsandconditions } from './Termsandconditions';
import { Route, BrowserRouter as Router, Switch, Routes, Link } from "react-router-dom";



export default function Mainfooter() {


    return (


        <Router>
            {/* <Switch> */}
            <Route path="/Aboutus" component={Aboutus} />
            <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
            <Route path="/Termsandconditions" component={Termsandconditions} />
            {/* </Switch> */}
        </Router>

    );
}