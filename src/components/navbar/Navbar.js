import React from 'react';
import logo from './BFB.png'

import './Navbar.css';

function Navbar() {
    return (
    <>
        <nav className="navibar">
            <div className="navibar-container">
                    <img src={logo} height={60} alt='logo' />
            </div>
        </nav>
    </>
    )
}

export default Navbar