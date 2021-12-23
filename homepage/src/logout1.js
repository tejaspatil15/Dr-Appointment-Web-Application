import React,{useEffect} from "react";
import {useHistory} from 'react-router-dom';
import LoginPage from "./components/Loginpage/LoginPage";
import { Route, BrowserRouter as Router, Switch, Routes, Link } from "react-router-dom";



const Logout =()=>{
    const history = useHistory();

    useEffect(()=>{
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            history.push('./login');
            if(res.status!=200){
                const error=new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err)
        });
    });
    return(
        <>
        <Router>
          <Switch>
            
            <Route exact path='/login' component={LoginPage}/> 

          </Switch>
        </Router>

        </>
    )
}
export default Logout;