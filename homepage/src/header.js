import react from 'react';
import './Header.css';
import homelogo2 from './Assets/homelogo2.png'
const Header = props => {
    return (
            <div class="container-fluid">
            <a class="home" href="./"> <img src={homelogo2} height={30} width={30}/></a>
            <a href="./">Medi+Appoint</a>
            <a href="./doclist">Find doctors</a>
            <a href="./Aboutus">About us</a>
            <a href="./contactus">Contact us</a>
            <a class="login" href="./login">Login / SignUp</a>
            <button id="button2" type="submit" name="button2">Q</button>
            <input id="searchbar2" type="text" name="searchQueryInput" placeholder="Search doctor.." />
         

         
        </div>

        
    );
};

export default Header;