import React from 'react';

const getBestGames = () => {
    return JSON.parse(localStorage.getItem('best-game')) || [];
}

const BestGame = () => {
    let bestGame = getBestGames();
    bestGame = bestGame.map((element, index) => <li key={index}>{index + 1}. Score: {element.score}, {element.date}</li>);
    return (
        <ul>
            <li>Best score / date</li>
            {bestGame}
        </ul>
    )
}

export default BestGame;