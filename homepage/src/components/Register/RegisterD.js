import { React, useState } from "react";
// import {
//   // createUserWithEmailAndPassword,
//   // signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
// import { auth } from '../firebase-config';
import { Form, Col, Row, Button } from "react-bootstrap";
import './Register.css'
import LoginPage from "../Loginpage/LoginPage";

const RegisterD = () => {

  let history = useHistory();
  
  const [user, setUser] = useState({
    name:"",email:"",phone:"",age:"",address:"",qualification:"",specilization:"",password:"",cpassword:""
  });
   
  let name,value;

  const handleInputs = (e) =>{
      console.log(e);
      name=e.target.name;
      value=e.target.value;

      setUser({...user, [name]:value});

  }

  const PostData = async(e)=>{
      e.preventDefault();
      const{name,email,phone,age,address,qualification,specilization,password,cpassword}=user;

      const res=await fetch("/register1",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email,phone,age,address,qualification,specilization,password,cpassword
        })
      });
      const data = await res.json();
      if(res.status===422||!data){
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      }else{
        window.alert(" Registration Successful");
        console.log(" Registration Successful");
        history.push("/login");
      }
  }

  return (
    <>


      <Router>
        <Switch>
          <Route exact path='/login' component={LoginPage} />
          {/* <Route exact path='/RegisterP' component={RegisterP}/>  */}
          {/* <Route exact path='/RegisterD' component={RegisterD}/>  */}
          {/* <Route exact path='/Signup' component={Signup}/>  */}

        </Switch>
      </Router>



      <div className="hal2 bottom" >



        <Form method="POST" className="p-2 mt-3 ">
          <div className="label p-2"><h3>Enter Your Details:</h3></div>
          <Form.Group as={Row} className="mb-4 " >
            <Form.Label column sm={3} className="label">
              Name:
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="text" placeholder="Enter name" name="name" id="name"
                value={user.name}
                onChange={handleInputs} required />
            </Col>
          </Form.Group>

          {/* <Form.Group className="mb-3" >
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" id="pass3" name="pas3" />

</Form.Group> */}

          <Form.Group as={Row} className="mb-4" >
            <Form.Label column sm={3} className="label">
              Email address:
            </Form.Label>
            <Col sm={6}>
              <Form.Control title="Enter valid number" autoComplete="off" type="email" name="email" id="email"
                value={user.email}
                onChange={handleInputs}
                placeholder="Enter email" required />
            </Col>
          </Form.Group>


          <Form.Group as={Row} className="mb-4" >
            <Form.Label column sm={3} className="label">
              Contact No:
            </Form.Label>
            <Col sm={6}>
              <Form.Control pattern="[0-9].{9,10}" title="Enter valid number" name="phone" id="phone" type="tel" autoComplete="off"
                value={user.phone}
                onChange={handleInputs}
                placeholder="Enter contact number" required />
            </Col>
          </Form.Group>



          <Form.Group as={Row} className="mb-4" >
            <Form.Label column sm={3} className="label">
              Age:
            </Form.Label>
            <Col sm={6}>
              <Form.Control pattern="[0-9].{0,1}" title="Enter valid Age" name="age" id="age" type="text" autoComplete="off"
                value={user.age}
                onChange={handleInputs}
                placeholder="Enter your age" required />
            </Col>
          </Form.Group>

     


          <Form.Group as={Row} className="mb-4" >
            <Form.Label column sm={3} className="label">
              Address:
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="address" placeholder="Enter address" name="address" id="address" autoComplete="off"
                value={user.address}
                onChange={handleInputs}
                required />
            </Col>
          </Form.Group>

   

          <Form.Group as={Row} className="mb-4" >
            <Form.Label column sm={3} className="label">
              Specilization:
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="text" placeholder="Enter Specilization" name="specilization" id="specilization" autoComplete="off"
                value={user.specilization}
                onChange={handleInputs}
                required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4" >
            <Form.Label column sm={3} className="label">
              Educational Qualification:
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="text" placeholder="Enter Educational Qualification" name="qualification" id="qualification" autoComplete="off"
                value={user.qualification}
                onChange={handleInputs}
                required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-4" >
            <Form.Label column sm={3} className="label">
              Password:
            </Form.Label>
            <Col sm={6}>
              <Form.Control pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" type="password" placeholder="Enter password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" name="password" id="password" autoComplete="off" value={user.password}
                onChange={handleInputs}
                required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-4" >
            <Form.Label column sm={3} className="label">
              Confirm Password:
            </Form.Label>
            <Col sm={6}>
              <Form.Control pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" type="password" placeholder="Confirm password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" name="cpassword" id="cpassword" autoComplete="off"
                value={user.cpassword}
                onChange={handleInputs}
                required />
            </Col>
          </Form.Group>


          <Form.Group as={Row} className="mb-4" >
            <Form.Label column sm={3} className="label"></Form.Label>
            <Col sm={6}>
              <Button onClick={PostData} variant="primary" type="submit">Register</Button>
            </Col>
          </Form.Group>

        </Form>
      </div>

    </>

  );


};

export default RegisterD;