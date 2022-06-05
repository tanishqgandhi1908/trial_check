import {React, useEffect, useState} from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import Card from '../Card/Card';
import NGO1_image from '../images/NGO1.jpg'
import NGO2_image from '../images/NGO2.jpg'
import NGO3_image from '../images/NGO3.png'
import NGO4_image from '../images/NGO4.jpg'
import NGO5_image from '../images/NGO5.jpeg'
import NGO6_image from '../images/NGO6.jpg'
import NGO7_image from '../images/NGO7.png'
import NGO8_image from '../images/NGO8.png'
import NGO9_image from '../images/NGO9.png'
import NGO10_image from '../images/NGO10.jpg'
import '../Landing/landing.css';
import Upload from '../Upload';

function Landing() {
    const [ngodata, setngodata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:2001/dashboard").then((response) => {
      setngodata(response.data)
    });
  }, [])
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
let monthname = month[d.getMonth()-1];
var topPerformer;
  var max = 0;
  for (let i = 0; i < ngodata.length; i++) {
      if(ngodata[i].month===monthname && ngodata[i].totalBeneficiaries > max){
        max = ngodata[i].totalBeneficiaries;
        topPerformer = ngodata[i].name;
      }
  }

  var totalB=0;
  var totalF=0;
  for (let i = 0; i < ngodata.length; i++) {
      totalB = totalB + ngodata[i].totalBeneficiaries; 
      totalF = totalF + ngodata[i].amtOfFood;
    }


    return (
        <>
            <Navbar />
            <div className='row2'>
            <div className="uploadFile" >
                <Upload  />
            </div>

            <div className='topPerformer'>
                <div className='topPerformerTitle'>
                    <h4>TOP PERFORMER OF THIS MONTH!</h4>
                    <br />
                    <h4>{topPerformer}</h4>
                </div>
            </div>

            <div className='totalBen'>
                <div className='totalBenTitle'>
                    <h4>TOTAL BENEFICIARIES IMPACTED</h4>
                    <br />
                    <h4>{totalB}</h4>
                </div>
            </div>

            <div className='totalFood'>
                <div className='totalFoodTitle'>
                    <h4>TOTAL FOOD RECEIVED</h4>
                    <br />
                    <h4>{totalF}</h4>
                </div>
            </div>
            </div>



            <div className='wrapper'>
                <Card
                    img={NGO1_image}
                    title='NGO1'
                    

                />

                <Card
                    img={NGO2_image}
                    title='NGO2'
                    
                />

                <Card
                    img={NGO3_image}
                    title='NGO3'
                />

                <Card
                    img={NGO4_image}
                    title='NGO4'
                />

                <Card
                    img={NGO5_image}
                    title='NGO5'
                />

                <Card
                    img={NGO6_image}
                    title='NGO6'
                />

                <Card
                    img={NGO7_image}
                    title='NGO7'
                />

                <Card
                    img={NGO8_image}
                    title='NGO8'
                />

                <Card
                    img={NGO9_image}
                    title='NGO9'
                />

                <Card
                    img={NGO10_image}
                    title='NGO10'
                />

            </div>
        </>
    );
}

export default Landing;