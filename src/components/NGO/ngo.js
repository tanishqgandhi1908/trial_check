import { React } from 'react'
import Chart from "react-google-charts"
import Table from 'react-bootstrap/Table'
import "./NGO.css"
import Navbar from '../navbar/Navbar.js'



export const data_amount = [
  ["Month", "Recieved (kgs)", "Consumed (kgs)"],
  ["March", 30, 28],
  ["April", 50, 45],
  ["May", 24, 20],
];

export const options_amount = {
  chart: {
    title: "Monthly food recieved",
  },
  
};

export const data_age = [
  ["Month", "under 18", "18-60", "over 60"],
  ["March", 12, 14, 22],
  ["April", 10, 12, 20],
  ["May", 15, 20, 12],
];

export const options_age = {
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
export const data_benef = [
  ["Month", "Reached"],
  ["March", 48],
  ["June", 50],
  ["July", 47],
];
export const options_benef = {
  title: "Beneficiaries reached",
  curveType: "function",
  legend: { position: "bottom" },
};

export const data_gender = [
  ["Gender", "Women", "Men"],
  ["March", 8, 40],
  ["April", 12, 26],
  ["May", 12, 26],
];

export const options_gender = {
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
function NGO() {

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
