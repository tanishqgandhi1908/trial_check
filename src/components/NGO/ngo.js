import { React, useEffect, useState } from 'react'
import Chart from "react-google-charts"
import Table from 'react-bootstrap/Table'
import "./NGO.css"
import Navbar from '../navbar/Navbar.js'

import axios from "axios"













function NGO() {
  const [ngodata, setngodata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4001/dashboard").then((response) => {
      setngodata(response.data)
    });
  }, [])
  var data_gender = [
    ["Gender", "Women", "Men"],
  ];
  var data_benef = [
    ["Month", "Reached"],
  ];
  var data_age = [
    ["Month", "under 18", "18-60", "over 60"],
    ["March", 12, 14, 22],
    ["April", 10, 12, 20],
    ["May", 15, 20, 12],
  ];

  var data_amount = [
    ["Month", "Recieved (kgs)"],
  ];
  for (let i = 0; i < ngodata.length; i++) {
    if (ngodata[i].name === "NGO1" && ngodata[i].enrolledProgramme==="NGO Feeding Program") {
      data_gender.push([ngodata[i].month, ngodata[i].female, ngodata[i].totalBeneficiaries - ngodata[i].female]);
      data_benef.push([ngodata[i].month,ngodata[i].totalBeneficiaries]);
      data_amount.push([ngodata[i].month,ngodata[i].amtOfFood]);
      
    }
  }

  const options_age = {
    title: "Age wise disrtribution",
    chartArea: { width: "50%" },
    isStacked: true,
    hAxis: {
      title: "Total Beneficiaries",
      minValue: 0,
    },
    vAxis: {
      title: "Month",
    },
  };
  
  const options_benef = {
    title: "Beneficiaries reached",
    curveType: "function",
    legend: { position: "bottom" },
  };

  

  const options_amount = {
    chart: {
      title: "Monthly food recieved",
    },
  
  };

  const options_gender = {
    chartArea: { width: "50%" },
    isStacked: true,
    hAxis: {
      title: "Gender",
      minValue: 0,
    },
    vAxis: {
      title: "Months",
    },
  };

  return (
    <div className='ngo_details_page'>
      <nav className="navibar">
        <div className="navibar-container">
          <div className='dashboard-title'> Dashboard NGO1 </div>
        </div>
      </nav>
      <div className='tabluar_data'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Program Name</th>
              <th>Amount Recieved (Kgs)	</th>
              <th>Age Distribution</th>
              <th>Gender Distribution</th>
              <th>beneficiaries reached</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div className='program_name'> NGO Feeding Program</div>
              </td>
              <td> <Chart
                chartType="Bar"
                width="100%"
                height="200px"
                data={data_amount}
                options={options_amount}
              /></td>
              <td> <Chart
                chartType="BarChart"
                width="100%"
                height="200px"
                data={data_age}
                options={options_age}
              /></td>
              <td><Chart
                chartType="BarChart"
                width="100%"
                height="200px"
                data={data_gender}
                options={options_gender}
              /></td>
              <td><Chart
                chartType="LineChart"
                width="100%"
                height="200px"
                data={data_benef}
                options={options_benef}
              /></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><div className='program_name'>Food Rescue Program</div>

              </td>
              <td> <Chart
                chartType="Bar"
                width="100%"
                height="200px"
                data={data_amount}
                options={options_amount}
              /></td>
              <td> <Chart
                chartType="BarChart"
                width="100%"
                height="200px"
                data={data_age}
                options={options_age}
              /></td>
              <td><Chart
                chartType="BarChart"
                width="100%"
                height="200px"
                data={data_gender}
                options={options_gender}
              /></td>
              <td><Chart
                chartType="LineChart"
                width="100%"
                height="200px"
                data={data_benef}
                options={options_benef}
              /></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><div className='program_name'>Food Relief Program</div>


              </td>
              <td> <Chart
                chartType="Bar"
                width="100%"
                height="200px"
                data={data_amount}
                options={options_amount}
              /></td>
              <td> <Chart
                chartType="BarChart"
                width="100%"
                height="200px"
                data={data_age}
                options={options_age}
              /></td>
              <td><Chart
                chartType="BarChart"
                width="100%"
                height="200px"
                data={data_gender}
                options={options_gender}
              /></td>
              <td><Chart
                chartType="LineChart"
                width="100%"
                height="200px"
                data={data_benef}
                options={options_benef}
              /></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><div className='program_name'>Breakfast Feeding Program</div>


              </td>
              <td> <Chart
                chartType="Bar"
                width="100%"
                height="200px"
                data={data_amount}
                options={options_amount}
              /></td>
              <td> <Chart
                chartType="BarChart"
                width="100%"
                height="200px"
                data={data_age}
                options={options_age}
              /></td>
              <td><Chart
                chartType="BarChart"
                width="100%"
                height="200px"
                data={data_gender}
                options={options_gender}
              /></td>
              <td><Chart
                chartType="LineChart"
                width="100%"
                height="200px"
                data={data_benef}
                options={options_benef}
              /></td>
            </tr>

          </tbody>
        </Table>

      </div>


    </div>
  )
}
export default NGO;
