import { React, useState } from 'react';
// import {
//   // createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut
// } from "firebase/auth";
import './Login.css'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import image1 from '../../images/image1.svg';
import Signup from '../Signup/Signup';
// import ProfileD from '../components2/profile';
// import ProfileP from '../components3/profileP';
import MainDashboard from '../components2/maindashboard';
// nimport { auth } from '../firebase-config';
import MainDashboard2 from '../components3/maindashboard2';


const LoginPage = () => {

  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [user, setUser] = useState({});

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");

    } else {
      window.alert("Login successful");
      history.push('/pdashboard');
    }
  }

  const loginUser1 = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin1', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");

    } else {
      window.alert("Login successful");
      history.push('/ddashboard');
    }
  }



  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path='/login' component={LoginPage}/>  */}
          {/* <Route exact path='/RegisterP' component={RegisterP}/>  */}
          {/* <Route exact path='/RegisterD' component={RegisterD}/>  */}
          {/* <Route exact path='/ddashboard' component={MainDashboard} />
          <Route exact path='/pdashboard' component={MainDashboard2} /> */}

          <Route exact path='/Signup' component={Signup} />
          {/* <Route path="/profileD" exact component={ProfileD} />
            <Route path="/profileP" exact component={ProfileP} /> */}
          {/* <Route path="/dashboardD" exact component={Dashboard} /> */}
          {/* <Route path="/yourAppointmentsD" exact component={YourAppointments} /> */}




        </Switch>
      </Router>


      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sn={12} className="p-3 mt-4 hal">
            <h3 className="user">User Login </h3>
            <Form method="POST">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
              </Form.Group>


              <div className=" gap-1">
                <Button id='but1' onClick={loginUser} variant="primary" type="submit">Login as a patient</Button>
                <Button onClick={loginUser1} variant="primary " type="submit">Login as a doctor</Button>
              </div>




              <div className="text-left mt-3">
                {/* <a href="#"><small className="reset">Forgot Password</small></a> ||  */}
                New user<a href="/Signup"><small className="reset ml-2"></small> Register</a>
              </div>
            </Form>
          </Col>

          <Col lg={8} md={6} sn={12}> <img className="w-100" src={image1} alt="" /></Col>
        </Row>



      </Container>

    </>
  );
};

export default LoginPage;