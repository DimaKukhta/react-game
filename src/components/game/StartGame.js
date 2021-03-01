import React from 'react';
import Snake from './Snake';
import Food from './Food';
import Score from './Score';
import Log from './Log';
import { saveToLocalStorageBestGame, getLocalStorage } from '../../utils'; 
import '../../App.css';

const getRandomNumbers = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x,y]
  }

  const getStateFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('state'));
  }

  const updateLocalStorage = (state) => {
    localStorage.setItem('state', JSON.stringify(state));
  }
  
  const startState = {
    snakeBody: [
      [0, 0],
      [2, 0]
    ],
    food: getRandomNumbers(),
    direction: 'RIGHT',
    speed: getLocalStorage('speed'),
    counter: 0,
    lose: false,
    autoPlay: false
  }

  const volumeOfSound = (value) => JSON.parse(localStorage.getItem(value)) / 10;

class StartGame extends React.Component {
  constructor(props) {
    super(props);
    if (!localStorage.getItem('state') || this.props.mode === 'new-game') {
      this.state = startState;
    }
    else if (this.props.mode === 'continue-game') { 
      this.state = getStateFromLocalStorage();
    }
    this.timer = null;
  }

  oneKeyDown = (e) => {
    e = e || window.event;
    if (e.keyCode === 38 && this.state.direction != 'DOWN') {
      this.setState({ direction: 'UP' });
    } else if (e.keyCode === 40 && this.state.direction != 'UP') {
      this.setState({ direction: 'DOWN'});
    } else if (e.keyCode === 37 && this.state.direction != 'RIGHT') {
      this.setState({ direction: 'LEFT' });
    } else if (e.keyCode === 39 && this.state.direction != 'LEFT') {
      this.setState({ direction: 'RIGHT' });
    }
  }

  checkTheBorder = () => {
    let head = this.state.snakeBody[this.state.snakeBody.length - 1];
    if (head[0] >= 100 || head[0] < 0 || head[1] >= 100 || head[1] < 0) {
      this.gameExit();
    }
  }

  checkToCrushByBody = () => {
    let snake = [...this.state.snakeBody];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((body, index) => {
      if (head[0] === body[0] && head[1] === body[1] && index < snake.length - 1) {
        console.log('crush by body')
        this.gameExit();
      }
    })  
  }

  checkIfEatFood = () => {
    let head = this.state.snakeBody[this.state.snakeBody.length - 1];
    let food = this.state.food;

    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: getRandomNumbers(),
        counter: this.state.counter + 1
      })
      this.enlargeSnake();
      if (getLocalStorage('audio-effect')) {
        this.audio.play();
      }
    }
  }

  enlargeSnake = () => {
    let newSnake = [...this.state.snakeBody];
    newSnake.unshift([]);
    this.setState({
      snakeBody: newSnake
    });
  }

  gameExit = () => {
    this.setState({ ...startState, lose: true, counter: this.state.counter });
    //alert('You lose');
    document.removeEventListener('keydown', this.oneKeyDown);
    clearInterval(this.timer);
    saveToLocalStorageBestGame(this.state.counter);
    this.backgroundAudio.muted = true;
    if (getLocalStorage('audio-effect')) {
      this.errorAudio.play();
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.moveSnake, this.state.speed);
    document.addEventListener('keydown', this.oneKeyDown);

    this.audio = new Audio('https://english-for-kids.netlify.app/static/media/correct.8e3d6124.mp3');
    this.backgroundAudio = new Audio('https://soundimage.org/wp-content/uploads/2014/08/Netherplace.mp3');
    this.errorAudio = new Audio('https://english-for-kids.netlify.app/static/media/error.32fc22b2.mp3');

    this.backgroundAudio.volume = volumeOfSound('background-audio-volume');
    this.audio.volume = volumeOfSound('audio-effect-volume');
    this.errorAudio.volume = volumeOfSound('audio-effect-volume');

    if (getLocalStorage('background-audio')) {
      this.backgroundAudio.play();
    }
  }

  componentDidUpdate() {
    this.checkIfEatFood();
    this.checkTheBorder();
    this.checkToCrushByBody();
    updateLocalStorage(this.state);
  }

  componentWillUnmount() {
    if (this.state.autoPlay === true) {
      this.setState({
        ...startState, autoPlay: true
      });
    }
    this.backgroundAudio.muted = true;
    this.audio.muted = true;
    this.errorAudio.muted = true;
  }

  moveSnake = () => {
    let body = [...this.state.snakeBody];
    let head = body[body.length - 1];
    let directionOfSnake = this.state.direction;
    let food = [...this.state.food];

    if (directionOfSnake === 'RIGHT') {
      head = [head[0] + 2, head[1]];
    } else if (directionOfSnake === 'LEFT') {
      head = [head[0] - 2, head[1]];
    } else if (directionOfSnake === 'UP') {
      head = [head[0], head[1] - 2];
    } else if (directionOfSnake === 'DOWN') {
      head = [head[0], head[1] + 2];
    }

    body.push(head);
    body.shift();
    this.setState({
      snakeBody: body
    })
    if (this.state.autoPlay === true) {
      if (head[0] === food[0] && head[1] < food[1]) {
        this.setState({
          direction: 'DOWN'
        });
      } else if (head[0] === food[0] && head[1] > food[1]) {
        this.setState({
        direction: 'UP'
        });
      } else if (head[0] < food[0]) {
        this.setState({
          direction: 'RIGHT'
        });
      }
      else if (head[0] > food[0]) {
        this.setState({
          direction: 'LEFT'
        });
      }
    }
  }

  render() {
    return (
      <div className="game-container">
        <div className="game-field">
          <Snake snakeBody={this.state.snakeBody}/>
          <Food food={this.state.food} />
          <Log lose={this.state.lose} counter={this.state.counter}/>
        </div>
        <div className="panel">
          <button disabled={this.state.lose} onClick={() => this.setState(startState)}>New game</button>
          <Score counter={this.state.counter} />
          <button disabled={this.state.lose} onClick={() => this.setState({...startState, autoPlay: true })}>Autoplay</button>
        </div>
      </div>
    );
  }
}

export default StartGame;
