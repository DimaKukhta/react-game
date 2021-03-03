import React from 'react';
import './food.css'

function Food(props) {    
    const style = {
        left: `${props.food[0]}%`,
        top: `${props.food[1]}%`
    }
    return (
        <div className="food" style={style}/>
    )
}

export default Food;