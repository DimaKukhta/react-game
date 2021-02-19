import React from 'react';
import Snake from './Snake';
import Food from './Food';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      snakeBody: [
        [0, 0],
        [2, 0]
      ],
      food: [5, 7]
    }
  }
    render() {
    return (
      <div className="game-field">
        <Snake snakeBody={this.state.snakeBody}/>
        <Food food={this.state.food} />
      </div>
    );
  }
}

export default App;
