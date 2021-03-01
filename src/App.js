import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import StartGame from './components/game/StartGame';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BestGames from './components/BestGames/BestGames';
import AudioSettings from './components/AudioSettings/AudioSettings';
import GameMode from './components/GameMode/GameMode';
import { getInitialStateToLocalSotage } from './utils';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    getInitialStateToLocalSotage();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="game">
          <Header />
          <Route path="/new-game" render={() => <StartGame mode="new-game"/>}></Route>
          <Route path="/continue-game" render={() => <StartGame mode="continue-game" />}></Route>
          <Route path="/menu" component={Navigation}></Route>
          <Route path="/best-game" component={BestGames}></Route>
          <Route path="/audio-effect" component={AudioSettings}></Route>
          <Route path="/game-mode" component={GameMode}></Route>
          <Footer />
       </div>
      </BrowserRouter>
    );
  }
}

export default App;
