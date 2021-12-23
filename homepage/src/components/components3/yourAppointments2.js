import { React, useState } from "react";
import Sidebar2 from "./sidebar2";
import './bookapt.scss'
import { Button } from "react-bootstrap";

//Book Appointment Page of Patient

const  YourAppointments2 = () => {

    const [user, setUser] = useState({
        name: "", date: "", time: "", reason: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });

    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, date, time, reason } = user;

        const res = await fetch("/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, date, time, reason
            })
        });
        const data = await res.json();
        if (res.status===422 ||!data) {
            window.alert("Invalid Booking");
            console.log("Invalid Booking");
        } else {
            window.alert(" Booking Successful");
            console.log("Booking Successful");
        }
    }

    return (

        <>
            <div class="row mt-4">
                <div class="col-sm-3">
                    <Sidebar2 />
                </div>

                <div class="col-sm-9" >
                    <div class="mt-4 mb-4">
                        <div id="content">
                            <h1 style={{ marginLeft: "85px" }}>Book Appointment</h1>
                            <div class='container'>
                                <form method="POST" id="bookingForm">
                                    <div class='row'>
                                        <div class="col-3">
                                            <label id="labelName">Doctor's Name:</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="text" placeholder="Enter Doctor's Name" name="name" id="name"
                                                value={user.name}
                                                onChange={handleInputs} required />
                                        </div>
                                    </div>

                                    <div class='row'>
                                        <div class="col-3">
                                            <label id="labelName">Date of Appointment:</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="text" placeholder="YYYY-MM-DD" name="date" id="date"
                                                value={user.date}
                                                onChange={handleInputs} required />
                                        </div>
                                    </div>

                                    <div class='row'>
                                        <div class="col-3">
                                            <label id="labelName">Time of Appointment:</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="text" placeholder="Enter Time of Appointment" name="time" id="time"
                                                value={user.time}
                                                onChange={handleInputs} required />
                                        </div>
                                    </div>

                                    <div class='row'>
                                        <div class="col-3">
                                            <label id="labelName">Reason:</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="text" placeholder="Reason for appointment" name="reason" id="reason"
                                                value={user.reason}
                                                onChange={handleInputs} required />
                                        </div>
                                    </div>

                                    <div class="row">
                                        {/* <input type="submit" value="Submit" id="submit" /> */}
                                        <Button onClick={PostData} variant="primary" type="submit">Submit</Button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default YourAppointments2;
