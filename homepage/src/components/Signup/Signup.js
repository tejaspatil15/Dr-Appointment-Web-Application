
import { React, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  // onAuthStateChanged,
  // signOut,
} from "firebase/auth";
import { auth } from '../firebase-config';
import { Form, Card, Button } from "react-bootstrap";
import './Signup.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import LoginPage from '../Loginpage/LoginPage';
import RegisterP from '../Register/RegisterP';
import RegisterD from '../Register/RegisterD';


const Signup = () => {

  let history = useHistory();

  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("");
  // const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");



  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      var pas1 = document.getElementById('pass1');
      var pas2 = document.getElementById('pass2');
      var pas3 = document.getElementById('pass3');
      if ((pas1.value === "") || (pas2.value === "") || (pas3.value === "")) {
        alert("Please Fill all the details");

      } else {
        return history.push('/RegisterP');
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message)
    }
  };

  const register1 = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      var pas1 = document.getElementById('pass1');
      var pas2 = document.getElementById('pass2');
      var pas3 = document.getElementById('pass3');
      if ((pas1.value === "") || (pas2.value === "") || (pas3.value === "")) {
        alert("Please Fill all the details");

      } else {
        return history.push('/RegisterD');
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message)
    }
  };



  function check123() {
    var pas1 = document.getElementById('pass1');
    var pas2 = document.getElementById('pass2');
    if (pas1.value !== pas2.value) {
      alert("Password must match");
      return
    }
  };

  return (
    <>

      <Router>
        <Switch>
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/RegisterP' component={RegisterP} />
          <Route exact path='/RegisterD' component={RegisterD} />
          {/* <Route exact path='/Signup' component={Signup}/>  */}

        </Switch>
      </Router>


      <div className="halS">
        <div className='pqrs' >

          <h3 className='text-center'>Registration
          </h3>
        </div>
        <div className='abcd'>

          <Form  >
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" id="pass3" name="pas3" onChange={(event) => {
                setRegisterEmail(event.target.value);
              }} required />

            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id="pass1" name="pas1" type="password" placeholder="Password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={(event) => {
                setRegisterPassword(event.target.value);
              }} required />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id="pass2" name="pas2" type="password" placeholder="confirm Password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required onMouseLeave={check123} />
            </Form.Group>

            <div className="text-left mb-0">
              already user <a href="\login"><small className="reset">login</small></a>
            </div>

            {/* <Button onClick={()=>{ history.push('/RegisterP')}} className="text-left mt-3 but" variant="primary" type="submit" >Register as a Patient</Button> */}
            <Button onClick={register} className="text-left mt-3 but" variant="primary"  >Register as a Patient</Button>
            {/* <Button onClick={()=> {history.push('/RegisterD')}} className="text-left mt-3" variant="primary"  type="submit"  >Register as a Doctor</Button> */}
            <Button onClick={register1} className="text-left mt-3 " variant="primary" >Register as a Doctor</Button>
          </Form>


        </div>
      </div>



    </>
  );

};

export default Signup;