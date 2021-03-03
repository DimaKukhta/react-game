import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {

    const onClickFullScreen = (event) => {
        if (document.fullscreenElement) {
            document.exitFullscreen()
              .then(() => console.log("Document Exited from Full screen mode"))
              .catch((err) => console.error(err))
          } else {
            document.documentElement.requestFullscreen();
          }
    }
     
    return (
        <div className="header">
            <NavLink to="/menu"><img className="back-arrow" src="https://img.icons8.com/carbon-copy/100/000000/circled-left.png"/></NavLink>
            <img className="full-screen" onClick={onClickFullScreen} src="https://img.icons8.com/wired/64/000000/full-screen.png" />
        </div>
    )
}

export default Header;