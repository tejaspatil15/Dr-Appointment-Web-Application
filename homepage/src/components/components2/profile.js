import React, { useState, useEffect } from "react";
// import axios from 'axios'
import { useHistory, useLocation } from "react-router-dom";
import Sidebar from "./sidebar";


function ProfileD() {
  const history = useHistory();
  const [userData, setuserData] = useState({});

  // const getData = async () => {
  //   try {
  //     console.log(userData)
  //     const response = await axios.get('http://localhost:5000/profile1/')
  //     console.log(response)
  //     console.log(response.data)
  //     setuserData(response.data)
  //     console.log(userData)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }
  // useEffect(() => {
  //   axios.get('http://localhost:5000/profile1/')
  //     .then((response) => {
  //       setuserData(response.data)
  //       console.log(userData)
  //     }) 
  // },[])

  //   const userDataxyz = userData.map((element) => {
  //     return (  {element.name} 
  //     );
  // });

  // console.log(userDataxyz)



  const callprofileD = async () => {
    try {
      const res = await fetch('/profile1', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      console.log(data);
      setuserData(data);


      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    catch (err) {
      console.log(err);
      history.push('/login');

    }
  }

  useEffect(() => {
    callprofileD();
  }, []);


  return (
    <>
      <div class="row mt-4">

        <div class="col-sm-3">
          <Sidebar />
        </div>
        <div class="col-sm-9" >
          <div class="mt-4 mb-4">
            {/* <form method="GET" > */}

            <div style={{ backgroundColor: "#e5f4f9 ", borderRadius: "10px" }}>
              <div style={{ padding: "5px" }}>
                <h1>Doctor Profile</h1>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <h3>Name:</h3>

                      </td>
                      <td>
                        <h3>{userData.name}</h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Email Id:</h3>
                      </td>
                      <td>
                        <h3>{userData.email}</h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Contact No:</h3>
                      </td>
                      <td>
                        <h3>{userData.phone}</h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Specialization:</h3>
                      </td>
                      <td>
                        <h3>{userData.specilization}</h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Educational Qualification:</h3>
                      </td>
                      <td>
                        <h3>{userData.qualification}</h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {/* <button type="button" class="btn btn-primary">
                    Edit Profile{" "}
                  </button> */}
                      </td>
                      <td>
                        {/* <button type="button" class="btn btn-primary">
                    Change Password{" "}
                  </button> */}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* </form> */}

          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileD;
