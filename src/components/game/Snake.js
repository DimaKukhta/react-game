import React from 'react';

function Snake(props) {
    return (
        <div>
            {props.snakeBody.map((body, index) => {
                const style = {
                    left: `${body[0]}%`,
                    top: `${body[1]}%`
                }
                return (
                    <div className={JSON.parse(localStorage.getItem('default-mode')) === false ? 'snake-body' : 'snake-body default'} key={index} style={style} />
                )
            })}
        </div>   
    )
}

export default Snake;