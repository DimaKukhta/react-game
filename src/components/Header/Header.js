import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {

    return (
        <div className="header">
            <NavLink to="/menu"><img className="back-arrow" src="https://img.icons8.com/carbon-copy/100/000000/circled-left.png"/></NavLink>
            <img className="full-screen" src="https://img.icons8.com/wired/64/000000/full-screen.png" />
        </div>
    )
}

export default Header;