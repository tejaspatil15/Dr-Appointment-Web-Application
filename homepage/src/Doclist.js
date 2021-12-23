// import React from "react";
import React, { useState, useEffect } from "react";
import "./App.css";
import { useHistory, useLocation } from "react-router-dom";
import femaleDr1 from './Assets/femaleDr1.png'
import maleDr1 from './Assets/maleDr1.png'

function Doclist() {
  const history = useHistory();
  const [userData, setuserData] = useState({});
  // const callprofileD = async () => {
  // try{
  //      const res = await fetch ('/profile1', {
  //       method: "GET",
  // headers: {
  //   Accept: "application/json",
  //   "Content-Type": "application/json"
  // },
  //         credentials: "include"
  //   });
  //      const data =  await res.json();
  //      console.log(data);
  //      setuserData(data);


  //      if (!res.status ===200) {
  //        const error = new Error(res.error);
  //        throw error;
  //      }
  //   } 

  // }

  // useEffect(() => {
  //   callprofileD();
  //  } ,[]);




  return (
    <>
      <div className="App">
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <div class="card">
                <img
                  src={femaleDr1}
                  class="card-img-top"
                  alt="Hello"
                  height="150px"
                  width="150px"
                />
                <div class="card-body">
                  <h5 class="card-title">Dr. Smita Gupta{userData.name}</h5>
                  <p class="card-text">
                    Dermatologist  ,<br /> 8 years of experience, <br />{" "}
                    Pune City {" "}
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
                  src={femaleDr1}
                  class="card-img-top"
                  alt="..."
                  height="150px"
                  width="150px"
                />
                <div class="card-body">
                  <h5 class="card-title"> Dr. Sanjana Verma</h5>
                  <p class="card-text">
                  General Physician,<br /> 12 years of experience,<br />{" "}
                   Mumbai City{" "}
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
                  src={maleDr1}
                  class="card-img-top"
                  alt="..."
                  height="150px"
                  width="150px"
                />
                <div class="card-body">
                  <h5 class="card-title">Dr. Ashutosh Pawar</h5>
                  <p class="card-text">
                  Homeopathy,<br />  11 years of experience<br />{" "}
                     Pune City{" "}
                  </p>
                  <a href="/login" class="btn btn-primary">
                    Book Appointment{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div class="card">
                <img
                  src={maleDr1}
                  class="card-img-top"
                  alt="..."
                  height="150px"
                  width="150px"
                />
                <div class="card-body">
                  <h5 class="card-title">Dr. Abhishek Singh</h5>
                  <p class="card-text">
                    Dermatologist ,<br /> 6 years of experience <br />{" "}
                    Mumbai City{" "}
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
                  src={maleDr1}
                  class="card-img-top"
                  alt="..."
                  height="150px"
                  width="150px"
                />
                <div class="card-body">
                  <h5 class="card-title">Dr. Sanjay Rathod</h5>
                  <p class="card-text">
                    Dermatologist ,<br /> 6 years of experience <br />{" "}
                    Mumbai City{" "}
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
                  src={femaleDr1}
                  class="card-img-top"
                  alt="..."
                  height="150px"
                  width="150px"
                />
                <div class="card-body">
                  <h5 class="card-title">Dr. Smita Kumari</h5>
                  <p class="card-text">
                    Dermatologist ,<br /> 6 years of experience <br />{" "}
                    Mumbai City{" "}
                  </p>
                  <a href="/login" class="btn btn-primary">
                    Book Appointment{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div class="card">
                <img
                  src={femaleDr1}
                  class="card-img-top"
                  alt="..."
                  height="150px"
                  width="150px"
                />
                <div class="card-body">
                  <h5 class="card-title">Dr. Smita Yadav</h5>
                  <p class="card-text">
                    Dermatologist ,<br /> 6 years of experience <br />{" "}
                    Mumbai City{" "}
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
                  src={maleDr1}
                  class="card-img-top"
                  alt="..."
                  height="150px"
                  width="150px"
                />
                <div class="card-body">
                  <h5 class="card-title">Dr. Piyush Singh</h5>
                  <p class="card-text">
                    Dermatologist ,<br /> 6 years of experience <br />{" "}
                    Mumbai City{" "}
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
                  src={maleDr1}
                  class="card-img-top"
                  alt="..."
                  height="150px"
                  width="150px"
                />
                <div class="card-body">
                  <h5 class="card-title">Dr. Suryakumar Gupta</h5>
                  <p class="card-text">
                    Dermatologist ,<br /> 6 years of experience <br />{" "}
                    Mumbai City{" "}
                  </p>
                  <a href="/login" class="btn btn-primary">
                    Book Appointment{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div class="card">
                <img
                  src={maleDr1}
                  class="card-img-top"
                  alt="..."
                  height="150px"
                  width="150px"
                />
                <div class="card-body">
                  <h5 class="card-title">Dr. Vinod Sharma</h5>
                  <p class="card-text">
                    Dermatologist ,<br /> 6 years of experience <br />{" "}
                    Mumbai City{" "}
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
                  src={femaleDr1}
                  class="card-img-top"
                  alt="..."
                  height="150px"
                  width="150px"
                />
                <div class="card-body">
                  <h5 class="card-title">Dr. Priti Kumari</h5>
                  <p class="card-text">
                    Dermatologist ,<br /> 6 years of experience <br />{" "}
                    Mumbai City{" "}
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
                  src={femaleDr1}
                  class="card-img-top"
                  alt="..."
                  height="150px"
                  width="150px"
                />
                <div class="card-body">
                  <h5 class="card-title">Dr. Smita Tiwar</h5>
                  <p class="card-text">
                    Dermatologist ,<br /> 6 years of experience <br />{" "}
                    Mumbai City{" "}
                  </p>
                  <a href="/login" class="btn btn-primary">
                    Book Appointment{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
      </div>
    </>
  );
}

export default Doclist;
