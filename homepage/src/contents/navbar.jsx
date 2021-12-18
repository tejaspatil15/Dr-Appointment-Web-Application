import React from "react";
import { Route, BrowserRouter as Router, Switch, Routes, Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import './navbar.scss'
import { Card } from "react-bootstrap";
import { BookApt } from "./bookappt";

export function VerticalNavbar(){
    return <div>
        <nav>
            <ul className="list-group list-group-flush" id='nav'>
                <li><Link to='/profile' id="navigate">Profile</Link></li>
                <li><Link to='/dashboard' id="navigate">Dashboard</Link></li>
                <li><Link to='/previous-appointments' id="navigate">Previous Appointments</Link></li>
                <br />
                <Button class="btn btn-primary" id="bookapt" onClick={()=> window.open("/book-appointments", "Book Appointment")}>Book Appointments</Button>
            </ul>
        </nav>

        <Router>
            <Route path = '/' component = {Profile} />
            <Route path = '/dashboard' component = {Dashboard} />
            <Route path = '/previous-appointments' component = {PrevAppt} />
            <Route path = '/book-appointments' component = {BookApt} />
        </Router>
    </div>

}


function Profile(){
    return <div id='content'>
        <h1>Profile</h1>
        <table id = 'data'>
            <tr>
                <th>Name</th>
                <td></td>
                <td>Suyog Kapileshwar</td>
            </tr>
            <tr>
                <th>Email ID</th>
                <td> </td>
                <td>suyog_kapileshwar@persistent.com</td>
            </tr>
            <tr>
                <th>Contact No.</th>
                <td> </td>
                <td>+91 9421 71 9360</td>
            </tr>

            <tr>
                <th>Emergency Contact No.</th>
                <td> </td>
                <td>+91 9421 71 9360</td>
            </tr>
        </table>
        <div id='twinButtons'>
            <button class= 'btn btn-primary' id = 'btn1'>Edit Profile</button>
            <button class= 'btn btn-primary' id = 'btn2'>Change Password</button>
        </div>
    </div>
}

function Dashboard(){
    return <div id='content'>
    <h1>Dashboard</h1>
    <table id = 'data'>
        <tr>
            <th>Age:</th>
            <td>23</td>
        </tr>
        <tr>
            <th>Blood Group:</th>
            <td>O+ve</td>
        </tr>
        <tr>
            <th>Medical History:</th>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, saepe quia id, unde mollitia, pariatur repellat autem expedita quod dolor ut obcaecati illo et quae atque? Velit quia optio minus?</td>
        </tr>
    </table>
</div>
}

function PrevAppt(){
    return <div id='content'>
    <h1>Previous Appointments</h1>
    <Card id= "appt">
    <Card.Body>
        <Card.Title>Dr. Name Surname</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Date:</Card.Subtitle>
        <Card.Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium officia iure inventore veniam, commodi culpa doloribus debitis quasi nesciunt quas id, laborum aliquam! Voluptates fugit pariatur voluptate deleniti, mollitia error?
        </Card.Text>
    </Card.Body>
    </Card>
    <Card id= "appt">
    <Card.Body>
        <Card.Title>Dr. Name Surname</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Date:</Card.Subtitle>
        <Card.Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium officia iure inventore veniam, commodi culpa doloribus debitis quasi nesciunt quas id, laborum aliquam! Voluptates fugit pariatur voluptate deleniti, mollitia error?
        </Card.Text>
    </Card.Body>
    </Card>
</div>
}