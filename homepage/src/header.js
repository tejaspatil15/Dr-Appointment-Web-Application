import react from 'react';
import './Header.css';
import homelogo2 from './Assets/homelogo2.png'
import Logout from './logout1';
import { Route, BrowserRouter as Router, Switch, Routes, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import BookData from "./dataset.json";

const Header = props => {
    return (
        <>
         <Router>
          <Switch>    
            <Route exact path='/logoutPage' component={Logout}/> 
          </Switch>
        </Router>
            <div class="container-fluid">
            <a class="home" href="./"> <img src={homelogo2} height={30} width={30}/></a>
            <a href="./">Medi+Appoint</a>
            <a href="./doclist">Find doctors</a>
            <a href="./Aboutus">About us</a>
            <a href="./contactus">Contact us</a>

            {/* <button id="button2" type="submit" name="button3">Logout</button> */}

            <a class="login" href="/logoutPage">Logout</a>
            {/* <a id="button2" href="/logoutPage">Logout</a> */}

            <a class="login" href="/login">Login / SignUp</a>
            
            {/* <button id="button2" type="submit" name="button2" >Q</button>         
            <input id="searchbar2" type="text" name="searchQueryInput" placeholder="Search doctor.." /> */}

        </div>
        </>

        
    );
};

export default Header;