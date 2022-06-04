import React from 'react'
import {Link, BrowserRouter, Route, withRouter  } from 'react-router-dom';
import './Card.css'


function Card(props) {
  return (
    <div className='card'>
        <img src={props.img} className='card--img' />
        <div className='card--body'>
            <h2 className='card--title'>{props.title}</h2>
            <p className='card--description'>'Check or Edit the statistics!'</p>
            
            <hr />
            <br />
            <div>
            <Link to={`/${props.dashboard}`} className='card--btn'>Check Statistics!</Link>
            </div>
            <br />
            <div>
            <Link to={`/${props.editForm}`}  className='card--btn'>Edit</Link>
            </div>
        </div>
    </div>
  )
}

export default Card