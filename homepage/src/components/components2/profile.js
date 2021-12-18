import React, {useState, useEffect} from "react";
import axios from 'axios'

function Profile() {
 
const [userData, setuserData] = useState({});

const getData = async () => {
  try {
      console.log(userData)
     const response=await axios.get('http://localhost:5000/doctor/get/61bad3253ebc3b37af43a5e5')
      console.log(response)
      console.log(response.data)
      setuserData(response.data)
      console.log(userData)
  } catch (error) {
      console.log(error.message)
  }
}
useEffect(() => {
  getData();
 },[]);

  return (
    <div class="mt-4 mb-4">
      <div style={{ backgroundColor: "#e5f4f9 ", borderRadius: "10px" }}>
        <div style={{ padding: "5px" }}>
          <h1>Profile</h1>
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
                  <h3>{userData.contact_no}</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Specialization:</h3>
                </td>
                <td>
                  <h3>{userData.specialization}</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Educational Qualification:</h3>
                </td>
                <td>
                  <h3>{userData.educational_qualification}</h3>
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
    </div>
  );
}

export default Profile;
