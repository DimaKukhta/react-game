class App extends React.Component {
    constructor() {
      super();
      this.state = startState;
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
      console.log(snake);
      snake.pop();
      console.log(snake);
      snake.forEach((body, index) => {
        if (head[0] === body[0] && head[1] === body[1] && index < snake.length - 1) {
          this.gameExit();
        }
      })  
    }
  
    checkIfEatFood = () => {
      let head = this.state.snakeBody[this.state.snakeBody.length - 1];
      let food = this.state.food;
  
      if (head[0] === food[0] && head[1] === food[1]) {
        this.setState({
          food: getRandomNumbers()
        })
        this.enlargeSnake();
        console.log('checkIfEatFunction --- result');
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
      alert('You lose');
      this.setState(startState);
    }
  
    componentDidMount() {
      setInterval(this.moveSnake, this.state.speed);
      document.addEventListener('keydown', this.oneKeyDown);
    }
  
    componentDidUpdate() {
      this.checkIfEatFood();
      this.checkTheBorder();
      this.checkToCrushByBody();
    }
  
    moveSnake = () => {
      let body = [...this.state.snakeBody];
      let head = body[body.length - 1];
      let directionOfSnake = this.state.direction;
  
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
  