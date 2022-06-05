import React from 'react'
import {Link} from 'react-router-dom';
import './Card.css'


function Card(props) {
  var ngolink = "/ngo" + "?name=" + `${props.title}`
  var editlink = "/edit" + "?name=" + `${props.title}`
  return (
    <div className='card'>
        <img src={props.img} className='card--img' />
        <div className='card--body'>
            <h2 className='card--title'>{props.title}</h2>
            <p className='card--description'>'Check or Edit the statistics!'</p>
            
            <hr />
            <br />
            
            <div>
            
            <Link to={ngolink} className='card--btn'>Check Statistics!</Link>
            </div>
            <br />
            <div>
            <Link to={editlink}  className='card--btn'>Edit</Link>
            </div>
        </div>
    </div>
  )
}

export default Card