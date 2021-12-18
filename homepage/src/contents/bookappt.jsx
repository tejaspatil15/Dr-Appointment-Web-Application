import React from "react";

export class BookApt extends React.Component{
        componentDidMount(){
            document.title = "Appointment"
        }     
        render(){
            return <div id="content">
            <h1>Book Appointment</h1>
            <div class='container'>
            <form id="bookingForm">
            <div class='row'>
                <div class="col-3">
                    <label id="labelName">Doctor's Name:</label>
                </div>
                <div class="col-9">
                    <input type="text" id="input" placeholder="Enter Doctor's Name" />
                </div>
            </div>

            <div class='row'>
                <div class="col-3">
                    <label id="labelName">Date of Appointment:</label>
                </div>
                <div class="col-9">
                    <input type="text" id="input" placeholder="Enter Date of Appointment" />
                </div>
            </div>

            <div class='row'>
                <div class="col-3">
                    <label id="labelName">Time of Appointment:</label>
                </div>
                <div class="col-9">
                    <input type="text" id="input" placeholder="Enter Time of Appointment" />
                </div>
            </div>

            <div class='row'>
                <div class="col-3">
                    <label id="labelName">Reason:</label>
                </div>
                <div class="col-9">
                    <input type="text" id="input" placeholder="Reason for appointment" />
                </div>
            </div>

            <div class="row">
                <input type="submit" value="Submit" id="submit"/>
            </div>
            </form>
            </div>
        </div>
        }
}