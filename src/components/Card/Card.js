import React from 'react'
import {Link, BrowserRouter, Route, withRouter  } from 'react-router-dom';
import NGO from '../NGO/ngo';
import './Card.css'


function Card(props) {
  return (
    < BrowserRouter >
    <div className='card'>
        <img src={props.img} className='card--img' />
        <div className='card--body'>
            <h2 className='card--title'>{props.title}</h2>
            <p className='card--description'>'Check or Edit the statistics!'</p>
            
            <hr />
            <br />
            <div>
            <Link to='/ngo' className='card--btn'>Check Statistics!</Link>
            </div>
            <br />
            <div>
            <Link to='/edit'  className='card--btn'>Edit</Link>
            </div>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default Card