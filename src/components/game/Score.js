import React from 'react';
import Snake from './Snake';

function Score(props) {
    return (
    <span>Your score: {props.counter}</span>
    )
}

export default Score;