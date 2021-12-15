import {React,useState} from "react";
import {
  // createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from '../firebase-config';
import {BrowserRouter as Router , Route,Switch,useHistory} from 'react-router-dom';
import { Form,Col,Row,Button } from "react-bootstrap";
import './Register.css'
import LoginPage from "../Loginpage/LoginPage";

const RegisterP = () =>{

  let history = useHistory();

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
    return history.push('/login') ;
  };
     return(
       <>

          <Router>
          <Switch>
            <Route exact path='/login' component={LoginPage}/> 
            {/* <Route exact path='/RegisterP' component={RegisterP}/>  */}
            {/* <Route exact path='/RegisterD' component={RegisterD}/>  */}
            {/* <Route exact path='/Signup' component={Signup}/>  */}

          </Switch>
        </Router>
            
       <div >
        <div className="Signout"> 
        {user?.email}<Button onClick={logout} variant="primary"  type="submit">Signout</Button>
      </div>  
        <div className="hal2 bottom" >

               
            
             <Form className="p-2 mt-3 ">
             <div className="label p-2"><h3>Enter Your Details:</h3></div>
  <Form.Group as={Row} className="mb-4 " controlId="formHorizontaltext">
    <Form.Label column sm={3} className="label">
      Name:
    </Form.Label>
    <Col sm={6}>
      <Form.Control type="text" placeholder="Enter name" required />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-4" controlId="formHorizontaltel">
    <Form.Label column sm={3} className="label">
      Contact No:
    </Form.Label>
    <Col sm={6}>
      <Form.Control pattern="[0-9].{9,}" title="Enter valid number" type="tel" placeholder="Enter contact number" required />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-4" controlId="formHorizontaltel">
    <Form.Label column sm={3} className="label">
    Emergency Contact No:
    </Form.Label>
    <Col sm={6}>
      <Form.Control pattern="[0-9].{9,}" title="Enter valid number" type="tel" placeholder="Enter emergency contact number" required />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-4" controlId="formHorizontaltext">
    <Form.Label column sm={3} className="label">
      Age:
    </Form.Label>
    <Col sm={6}>
      <Form.Control pattern="[0-9].{0,2}" title="Enter valid Age" type="text"  placeholder="Enter your age" required />
    </Col>
  </Form.Group>


  <Form.Group as={Row} className="mb-4 " controlId="formHorizontaltext">
    <Form.Label column sm={3} className="label">
      Blood Group:
    </Form.Label>
    <Col sm={6}>
      <Form.Control type="text" placeholder="Enter blood group" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-4" controlId="formHorizontaladdress">
    <Form.Label column sm={3} className="label">
      Address:
    </Form.Label>
    <Col sm={6}>
      <Form.Control type="address" placeholder="Enter address" required />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-4 " controlId="exampleForm.ControlTextarea1">
    <Form.Label column sm={3} className="label">
      Medical History:
    </Form.Label>
    <Col sm={6} className="space">
    
    <Form.Control as="textarea" rows={3} placeholder="Enter medical history" />
  
    </Col>
  </Form.Group>



  <Form.Group as={Row} className="mb-4" controlId="formHorizontaladdress">
  <Form.Label column sm={3} className="label"></Form.Label>
    <Col sm={6}>
    <Button variant="primary"  type="submit">Submit</Button>
    </Col>
  </Form.Group>

  </Form>
  </div> 
  </div>   
  </>
     );

};
export default RegisterP;