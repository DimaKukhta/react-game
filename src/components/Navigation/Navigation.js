import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

function Navigation () {
    return (
        <ul className="navigation">
            <li>
                <NavLink to="/new-game">Start Game</NavLink>
            </li>
            <li>
                <NavLink to="/continue-game">Continue Game</NavLink>
            </li>
            <li>
                <NavLink to="/game-mode">Game mode</NavLink>
            </li>
            <li>
                <NavLink to="/audio-effect">Settings</NavLink>
            </li>
            <li>
                <NavLink to="/best-game">Statistics</NavLink>
            </li>
             
        </ul>
    )
}

export default Navigation;