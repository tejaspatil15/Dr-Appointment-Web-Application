import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import Sidebar from "./sidebar";

function Dashboard() {
  const data = [
    {
      name: 'Male',
      This_week: 1,
      This_month: 4,
      This_year: 6,
    },
    {
      name: 'Female',
      This_week: 2,
      This_month: 3,
      This_year: 8,
    },

  ];
  const data2 = [
    {
      Age: "0 to 25",
      This_week: 3,
      This_month: 5,
      This_year: 2,
    }, {
      Age: "25 to 50",
      This_week: 3,
      This_month: 5,
      This_year: 4,
    }, {
      Age: "50+",
      This_week: 1,
      This_month: 4,
      This_year: 5,
    },
  ];
  return (
    <>    <div class="row mt-4">
    <div class="col-sm-3">
      <Sidebar />
    </div>
    <div class="col-sm-9" >
    <div class="mt-4 mb-4">
      <div style={{ backgroundColor: "#e5f4f9 ", borderRadius: "10px" }}>
        <div style={{ padding: "10px" }}>
          <h1>Dashboard</h1>
          <div class="row" style={{ padding: "10px" }}>
            <div class="col-sm-6">
              <h3> Patients this month: 123</h3>
              <br />
              <h3>
                Appointments due
                <br />
                for this month: 34
              </h3>
              <br />
              <h3> Total Appointments : 157</h3>
            </div>
            <div class="col-sm-6">
              <h3> Patients Demographics</h3>
              <div>
                <BarChart
                  width={350}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="This_week" fill="#8884d8" />
                  <Bar dataKey="This_month" fill="#82ca9d" />
                  <Bar dataKey="This_year" fill="#ff7300" />
                </BarChart>
              </div>
            </div>
          </div>
          <br />
          <h3> Patients Demographics by Age</h3>
          <div>
            <BarChart
              width={350}
              height={300}
              data={data2}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray />
              <XAxis dataKey="Age" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="This_week" fill="#8884d8" />
              <Bar dataKey="This_month" fill="#82ca9d" />
              <Bar dataKey="This_year" fill="#ff7300" />
            </BarChart>          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Dashboard;
