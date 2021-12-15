import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import Doclist from "./Doclist";
import Header from './Header';

// import Signup from './components/Signup/Signup';
// import LoginPage from './components/Loginpage/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

function App() {
    return (

        <div >
            <Header />
            <Router >
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path="/doclist" component={Doclist} />

                    {/* <Route exact path='/login' component={LoginPage} /> */}
                    {/* <Route exact path='/signup' component={Signup} /> */}
                    {/* <Route exact path='/RegisterP' component={RegisterP} />
                    <Route exact path='/RegisterD' component={RegisterD} /> */}
                </Switch>
            </Router>
        </div>
    )

}
export default App;