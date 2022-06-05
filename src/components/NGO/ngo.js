import { React, useEffect, useState } from 'react'
import Chart from "react-google-charts"
import Table from 'react-bootstrap/Table'
import "./NGO.css"
import Navbar from '../navbar/Navbar.js'

import axios from "axios"













function NGO() {
  const [ngodata, setngodata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:2001/dashboard").then((response) => {
      setngodata(response.data)
    });
  }, [])
  // var data_gender = [
  //   ["Gender", "Women", "Men"],
  // ];
  // var data_benef = [
  //   ["Month", "Reached"],
  // ];
  // var data_age = [
  //   ["Month", "under 18", "18-60", "over 60"],
  //   ["March", 12, 14, 22],
  //   ["April", 10, 12, 20],
  //   ["May", 15, 20, 12],
  // ];
  // var data_amount = [
  //   ["Month", "Recieved (kgs)"],
  // ];

  var data_gender_pg1 = [
    ["Gender", "Women", "Men"],
  ];
  var data_benef_pg1 = [
    ["Month", "Reached"],
  ];
  var data_age_pg1 = [
    ["Month", "under 18", "18-60", "over 60"],
  ];

  var data_amount_pg1 = [
    ["Month", "Recieved (kgs)"],
  ];

  var data_gender_pg2 = [
    ["Gender", "Women", "Men"],
  ];
  var data_benef_pg2 = [
    ["Month", "Reached"],
  ];
  var data_age_pg2 = [
    ["Month", "under 18", "18-60", "over 60"],

  ];

  var data_amount_pg2 = [
    ["Month", "Recieved (kgs)"],
  ];

  var data_gender_pg3 = [
    ["Gender", "Women", "Men"],
  ];
  var data_benef_pg3 = [
    ["Month", "Reached"],
  ];
  var data_age_pg3 = [
    ["Month", "under 18", "18-60", "over 60"],
  ];

  var data_amount_pg3 = [
    ["Month", "Recieved (kgs)"],
  ];

  var data_gender_pg4 = [
    ["Gender", "Women", "Men"],
  ];
  var data_benef_pg4 = [
    ["Month", "Reached"],
  ];
  var data_age_pg4 = [
    ["Month", "under 18", "18-60", "over 60"],
  ];
  
  var data_amount_pg4 = [
    ["Month", "Recieved (kgs)"],
  ];
// console.log(window.location.search.substring(6,11).toUpperCase());
  var Ngoname = window.location.search.substring(6,11).toUpperCase();
  
  // for (let i = 0; i < ngodata.length; i++) {
  //   if (ngodata[i].name === Ngoname && ngodata[i].enrolledProgramme==="NGO Feeding Program") {
  //     data_gender.push([ngodata[i].month, ngodata[i].female, ngodata[i].totalBeneficiaries - ngodata[i].female]);
  //     data_benef.push([ngodata[i].month,ngodata[i].totalBeneficiaries]);
  //     data_amount.push([ngodata[i].month,ngodata[i].amtOfFood]);
      
  //   }
  // }
  let pg1 = false;
  let pg2 = false;
  let pg3 = false;
  let pg4 = false;
  for (let i = 0; i < ngodata.length; i++) {
    if (ngodata[i].name === Ngoname && ngodata[i].enrolledProgramme==="NGO Feeding Program") {
      pg1=true;
      data_gender_pg1.push([ngodata[i].month, ngodata[i].female, ngodata[i].totalBeneficiaries - ngodata[i].female]);
      data_benef_pg1.push([ngodata[i].month,ngodata[i].totalBeneficiaries]);
      data_amount_pg1.push([ngodata[i].month,ngodata[i].amtOfFood]);
      data_age_pg1.push([ngodata[i].month,ngodata[i].under18,Math.abs(ngodata[i].over60-ngodata[i].under18),ngodata[i].over60]);
      
    }
  }

  for (let i = 0; i < ngodata.length; i++) {

    if (ngodata[i].name === Ngoname && ngodata[i].enrolledProgramme==="Food Rescue Program") {
    pg2=true;

      data_gender_pg2.push([ngodata[i].month, ngodata[i].female, ngodata[i].totalBeneficiaries - ngodata[i].female]);
      data_benef_pg2.push([ngodata[i].month,ngodata[i].totalBeneficiaries]);
      data_amount_pg2.push([ngodata[i].month,ngodata[i].amtOfFood]);
      data_age_pg2.push([ngodata[i].month,ngodata[i].under18,Math.abs(ngodata[i].over60-ngodata[i].under18),ngodata[i].over60]);
      
    }
  }

  for (let i = 0; i < ngodata.length; i++) {
    if (ngodata[i].name === Ngoname && ngodata[i].enrolledProgramme==="Food Relief Program") {
    pg3=true;

      data_gender_pg3.push([ngodata[i].month, ngodata[i].female, ngodata[i].totalBeneficiaries - ngodata[i].female]);
      data_benef_pg3.push([ngodata[i].month,ngodata[i].totalBeneficiaries]);
      data_amount_pg3.push([ngodata[i].month,ngodata[i].amtOfFood]);
      data_age_pg3.push([ngodata[i].month,ngodata[i].under18,Math.abs(ngodata[i].over60-ngodata[i].under18),ngodata[i].over60]);
      
    }
  }

  for (let i = 0; i < ngodata.length; i++) {
    if (ngodata[i].name === Ngoname && ngodata[i].enrolledProgramme==="Breakfast Feeding Program") {
      pg4=true;

      data_gender_pg4.push([ngodata[i].month, ngodata[i].female, ngodata[i].totalBeneficiaries - ngodata[i].female]);
      data_benef_pg4.push([ngodata[i].month,ngodata[i].totalBeneficiaries]);
      data_amount_pg4.push([ngodata[i].month,ngodata[i].amtOfFood]);
      data_age_pg4.push([ngodata[i].month,ngodata[i].under18,Math.abs(ngodata[i].over60-ngodata[i].under18),ngodata[i].over60]);
      
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
          <div className='dashboard-title'> Dashboard {Ngoname} </div>
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
              <th>Beneficiaries reached</th>
            </tr>
          </thead>
          <tbody>
          {pg1?
            <tr>
            
              <td><div className='program_name'> NGO Feeding Program</div>
              </td>
              
              <td> <Chart
                chartType="Bar"
                width="100%"
                height="200px"
                data={data_amount_pg1}
                options={options_amount}
              /></td>
              <td> <Chart
                chartType="BarChart"
                width="100%"
                height="200px"
                data={data_age_pg1}
                options={options_age}
              /></td>
              <td><Chart
                chartType="BarChart"
                width="100%"
                height="200px"
                data={data_gender_pg1}
                options={options_gender}
              /></td>
              <td><Chart
                chartType="LineChart"
                width="100%"
                height="200px"
                data={data_benef_pg1}
                options={options_benef}
              /></td>
            </tr>:
            <tr>
            
              <td><div className='program_name'> NGO Feeding Program</div>
              </td>
              <td>Not Enrolled</td>
              <td>Not Enrolled</td>
              <td>Not Enrolled</td>
              <td>Not Enrolled</td>
              </tr>
          }
            
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {pg2?
              <tr>
              
                <td><div className='program_name'> Food Rescue Program</div>
                </td>
                
                <td> <Chart
                  chartType="Bar"
                  width="100%"
                  height="200px"
                  data={data_amount_pg2}
                  options={options_amount}
                /></td>
                <td> <Chart
                  chartType="BarChart"
                  width="100%"
                  height="200px"
                  data={data_age_pg2}
                  options={options_age}
                /></td>
                <td><Chart
                  chartType="BarChart"
                  width="100%"
                  height="200px"
                  data={data_gender_pg2}
                  options={options_gender}
                /></td>
                <td><Chart
                  chartType="LineChart"
                  width="100%"
                  height="200px"
                  data={data_benef_pg2}
                  options={options_benef}
                /></td>
              </tr>:
              <tr>
              
                <td><div className='program_name'> Food Rescue Program</div>
                </td>
                <td>Not Enrolled</td>
                <td>Not Enrolled</td>
                <td>Not Enrolled</td>
                <td>Not Enrolled</td>
                </tr>
            }
            
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {pg3?
              <tr>
              
                <td><div className='program_name'> Food Relief Program</div>
                </td>
                
                <td> <Chart
                  chartType="Bar"
                  width="100%"
                  height="200px"
                  data={data_amount_pg3}
                  options={options_amount}
                /></td>
                <td> <Chart
                  chartType="BarChart"
                  width="100%"
                  height="200px"
                  data={data_age_pg3}
                  options={options_age}
                /></td>
                <td><Chart
                  chartType="BarChart"
                  width="100%"
                  height="200px"
                  data={data_gender_pg3}
                  options={options_gender}
                /></td>
                <td><Chart
                  chartType="LineChart"
                  width="100%"
                  height="200px"
                  data={data_benef_pg3}
                  options={options_benef}
                /></td>
              </tr>:
              <tr>
              
                <td><div className='program_name'> Food Relief Program</div>
                </td>
                <td>Not Enrolled</td>
                <td>Not Enrolled</td>
                <td>Not Enrolled</td>
                <td>Not Enrolled</td>
                </tr>
            }
            
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {pg4?
              <tr>
              
                <td><div className='program_name'> Breakfast Feeding Program</div>
                </td>
                
                <td> <Chart
                  chartType="Bar"
                  width="100%"
                  height="200px"
                  data={data_amount_pg4}
                  options={options_amount}
                /></td>
                <td> <Chart
                  chartType="BarChart"
                  width="100%"
                  height="200px"
                  data={data_age_pg4}
                  options={options_age}
                /></td>
                <td><Chart
                  chartType="BarChart"
                  width="100%"
                  height="200px"
                  data={data_gender_pg4}
                  options={options_gender}
                /></td>
                <td><Chart
                  chartType="LineChart"
                  width="100%"
                  height="200px"
                  data={data_benef_pg4}
                  options={options_benef}
                /></td>
              </tr>:
              <tr>
              
                <td><div className='program_name'> Breakfast Feeding Program</div>
                </td>
                <td>Not Enrolled</td>
                <td>Not Enrolled</td>
                <td>Not Enrolled</td>
                <td>Not Enrolled</td>
                </tr>
            }
            

          </tbody>
        </Table>

      </div>


    </div>
  )
}
export default NGO;
