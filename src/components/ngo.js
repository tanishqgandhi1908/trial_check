import { React } from 'react'
import Chart from "react-google-charts"
import Table from 'react-bootstrap/Table'
import "./NGO.css"
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
  ["March",12,14,22],
  ["April",10,12,20],
  ["May",15,20,12],
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
function NGO() {

  return (
    <div className='ngo_details_page'>
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
              <td>NGO Feeding Program
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
                chartType="Bar"
                width="100%"
                height="200px"
                data={data_amount}
                options={options_amount}
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
            <td>Food Rescue Program

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
                chartType="Bar"
                width="100%"
                height="200px"
                data={data_amount}
                options={options_amount}
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
            <td>Food Relief Program


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
                chartType="Bar"
                width="100%"
                height="200px"
                data={data_amount}
                options={options_amount}
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
            <td>Breakfast Feeding Program


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
                chartType="Bar"
                width="100%"
                height="200px"
                data={data_amount}
                options={options_amount}
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
