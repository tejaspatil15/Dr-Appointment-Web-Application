import {React,useState} from 'react';
import {
  // createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import './Login.css' 
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'
import image1 from '../../images/image1.svg';
import Signup from '../Signup/Signup';
import { auth } from '../firebase-config';


const LoginPage = () => {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };

  const login1 = async () =>{
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }

  };

    return (
        <>
        <Router>
          <Switch>
            {/* <Route exact path='/login' component={LoginPage}/>  */}
            {/* <Route exact path='/RegisterP' component={RegisterP}/>  */}
            {/* <Route exact path='/RegisterD' component={RegisterD}/>  */}
            <Route exact path='/Signup' component={Signup}/> 

          </Switch>
        </Router>


        <Container className="mt-5">
          <Row>
            <Col lg={4} md={6} sn={12} className="p-3 mt-4 hal">
              <h3 className="user">User Login </h3>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={(event) => {
            setLoginEmail(event.target.value);
          } } type="email" placeholder="Enter email" required />
      </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Password"title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={(event) => {
            setLoginPassword(event.target.value);
          } } required/>
  </Form.Group>


 <div className="d-grid gap-2">
  <Button onClick={login1} id="btn1" variant="primary btn-block"  type="reset">Login</Button>
</div>


<div className="text-left mt-3">
 {/* <a href="#"><small className="reset">Forgot Password</small></a> ||  */}
 New user<a href="/Signup"><small className="reset ml-2"></small> Register</a>
</div>
</Form>
</Col>

<Col lg={8} md={6} sn={12}> <img className="w-100" src={image1} alt=""/></Col>
</Row>

<h4> User Logged In: </h4>{user?.email}

      <button onClick={logout}> Sign Out </button>

 </Container>

        </>
    );
};

export default LoginPage;