
import {React} from 'react';
// import {
//   createUserWithEmailAndPassword,
//   // signInWithEmailAndPassword,
//   // onAuthStateChanged,
//   // signOut,
// } from "firebase/auth";
// import { auth } from '../firebase-config';
import { Form,Card,Button } from "react-bootstrap";
import './Signup.css';
import {BrowserRouter as Router , Route,Switch,useHistory} from 'react-router-dom';
import LoginPage from '../Loginpage/LoginPage';
import RegisterP from '../Register/RegisterP';
import RegisterD from '../Register/RegisterD';


const Signup = () =>{

  let history = useHistory();

  // const [registerEmail, setRegisterEmail] = useState("")
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  
  
  
  const register = () => {
    
      return history.push('/RegisterP') ; 
      
  };

  const register1 =  () => {
    
      return history.push('/RegisterD') ; 
     
  };

 

//   function check123 (){
//     var pas1= document.getElementById('pass1');
//     var pas2= document.getElementById('pass2');
//     if (pas1.value !== pas2.value){
//        alert("Password must match");
//       return
//     }
//  };

    return(
      <>

      <Router>
          <Switch>
            <Route exact path='/login' component={LoginPage}/> 
            <Route exact path='/RegisterP' component={RegisterP}/> 
            <Route exact path='/RegisterD' component={RegisterD}/> 
            {/* <Route exact path='/Signup' component={Signup}/>  */}

          </Switch>
        </Router>

        
        <Card className="halS">
           <Card.Header >
  
    <h3 className='text-center'>Registration
    </h3>
  </Card.Header>
  <Card.Body>
 
  <Form >
  
  <div className="text-left mb-0">
  already user <a href="\login"><small className="reset">login</small></a> 
  </div>

  {/* <Button onClick={()=>{ history.push('/RegisterP')}} className="text-left mt-3 but" variant="primary" type="submit" >Register as a Patient</Button> */}
  <Button onClick={ register}  className="text-left mt-3 but" variant="primary"  >Register as a Patient</Button>
  {/* <Button onClick={()=> {history.push('/RegisterD')}} className="text-left mt-3" variant="primary"  type="submit"  >Register as a Doctor</Button> */}
  <Button  onClick={ register1}  className="text-left mt-3 " variant="primary" >Register as a Doctor</Button>
</Form>


  </Card.Body>
</Card>



</>    
    );

};

export default Signup;