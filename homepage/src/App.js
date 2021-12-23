import React from 'react'
import './App.css';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// components of Tejas
import HomePage from './HomePage';
import Doclist from "./Doclist";
import Header from './Header';
import Contactus from './components/Contactus';
// Vaishali's componenets
import LoginPage from "./components/Loginpage/LoginPage";
import RegisterP from "./components/Register/RegisterP";
import RegisterD from "./components/Register/RegisterD";
import Signup from "./components/Signup/Signup";
// Sumit's componenets
import Mainfooter from './components/mainfooter';
import { Footer } from './components/Footer';
// Shubham's componenets
import Form from './chat/form';
import bot from '../src/bot.png'
// Shivam's components
import MainDashboard from './components/components2/maindashboard';
import ProfileD from './components/components2/profile';
import YourAppointments from './components/components2/yourAppointments';
import Dashboard from './components/components2/dashboard';
//Suyog's componenets
import MainDashboard2 from './components/components3/maindashboard2'
import ProfileP from './components/components3/profileP';
import YourAppointments2 from './components/components3/yourAppointments2';
// import Dashboard2 from './components/components3/dashboard2';

const App = (props) => {

  let [showChat, setShowChat] = useState(false);
  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }
  return (
    <>
      <div className='bot'>
        <div style={{ display: showChat ? "" : "none" }}>
          <Form />
        </div>
        <div>
          {!showChat
            ? <button class="btn2 rounded-pill " onClick={() => startChat()}><img src={bot} alt='' height={50} /></button>
            : <button class='btn2 rounded-pill' onClick={() => hideChat()}>click to hide...</button>
          }
        </div>
      </div>
      <div >
        <Header />
        <Router >
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path="/doclist" component={Doclist} />
            <Route exact path="/contactus" component={Contactus} />

            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/RegisterP' component={RegisterP} />
            <Route exact path='/RegisterD' component={RegisterD} />


            <Route path='/ddashboard' component={MainDashboard} />
            <Route path="/profileD" exact component={ProfileD} />
            <Route path="/yourAppointmentsD" exact component={YourAppointments} />
            <Route path='/dashboardD' component={Dashboard} />

            <Route path='/pdashboard' component={MainDashboard2} />
            <Route path="/profileP" exact component={ProfileP} />
            <Route path="/bookAppointmentsP" exact component={YourAppointments2} />
            {/* <Route path='/dashboardP' component={Dashboard2} /> */}
            

          </Switch>
        </Router>
   
        <Mainfooter />
        <Footer />

      </div>
    </>



  );

}

export default App;