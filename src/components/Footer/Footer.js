import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <span>Created by: &nbsp;</span>
            <a href="https://github.com/DimaKukhta">Dima Kukhta &nbsp;</a>
            <span>for &nbsp;</span>
            <a href="https://rs.school/js/">Rolling Scope School &nbsp;</a>
           <img className="logo-course" src="https://rs.school/images/rs_school_js.svg" alt="logo-course" /> 
        </div>
    )
}

export default Footer;