import './App.css';
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
import { useState } from 'react';
import Form from './chat/form';
import bot from '../src/bot.png'
// Shivam's components
import MainDashboard from './components/components2/maindashboard';
// import YourAppointments from './components/components2/yourAppointments';
// import Dashboard from './components/components2/dashboard';
// import Profile from './components/components2/profile'
// import Sidebar from './components/components2/sidebar';
//Suyog's componenets
import { VerticalNavbar } from './contents/navbar';


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

            {/* < VerticalNavbar /> */}
            <Route path='/vnavbar' component={VerticalNavbar} />


            <Route path='/maindd' component={MainDashboard} />
            {/* <MainDashboard /> */}

          </Switch>
        </Router>

        <Mainfooter />
        <Footer />

      </div>
    </>


  );

}

export default App;