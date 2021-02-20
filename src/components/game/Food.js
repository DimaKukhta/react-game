import React from 'react';

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