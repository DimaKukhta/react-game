import React from 'react';
import { NavLink } from 'react-router-dom';
import './log.css'

function Log(props) {
    return (    
        <div className={props.lose ? 'log' : 'log none'}>
            <h2>You was lose</h2>
            <h3>Your score: {props.counter}</h3>
            <NavLink to='/menu'>
                Okay
            </NavLink>
        </div>
    )
}

export default Log;