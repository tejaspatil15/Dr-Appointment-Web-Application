// import logo from './logo.svg';
import React from "react";
import "./App.css";

function Doccard() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div class="card">
                            <img
                                src="https://media.istockphoto.com/photos/smiling-girl-student-wear-wireless-headphone-study-online-with-skype-picture-id1263848774"
                                class="card-img-top"
                                alt="Hello"
                                height="150px"
                                width="150px"
                            />
                            <div class="card-body">
                                <h5 class="card-title">Doctor's Name</h5>
                                <p class="card-text">
                                    Specialization = xyz ,<br /> Experience = X years <br />{" "}
                                    Location= xyz city{" "}
                                </p>
                                <a href="/login" class="btn btn-primary">
                                    Book Appointment{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                            <img
                                src="https://media.istockphoto.com/photos/young-woman-working-at-home-she-is-with-her-dogs-picture-id1130455930"
                                class="card-img-top"
                                alt="..."
                                height="150px"
                                width="150px"
                            />
                            <div class="card-body">
                                <h5 class="card-title">Doctor's Name</h5>
                                <p class="card-text">
                                    Specialization = xyz ,<br /> Experience = X years <br />{" "}
                                    Location= xyz city{" "}
                                </p>
                                <a href="/login" class="btn btn-primary">
                                    Book Appointment{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                            <img
                                src="https://media.istockphoto.com/photos/focused-african-businessman-wear-headphones-study-online-watching-picture-id1203044233"
                                class="card-img-top"
                                alt="..."
                                height="150px"
                                width="150px"
                            />
                            <div class="card-body">
                                <h5 class="card-title">Doctor's Name</h5>
                                <p class="card-text">
                                    Specialization = xyz ,<br /> Experience = X years <br />{" "}
                                    Location= xyz city{" "}
                                </p>
                                <a href="/login" class="btn btn-primary">
                                    Book Appointment{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
            );
}

            export default Doccard;
