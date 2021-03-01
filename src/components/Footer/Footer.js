import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            {/*<div className="footer-content"></div>*/}
            <span>Created by: &nbsp;</span>
            <a href="#">Dima Kukhta &nbsp;</a>
            <span>for &nbsp;</span>
            <a href="https://rs.school/js/">Rolling Scope School &nbsp;</a>
           <img className="logo-course" src="https://rs.school/images/rs_school_js.svg" alt="logo-course" /> 
        </div>
    )
}

export default Footer;