import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App.js';
import Main from './components/Main.js';
import GameList from './components/GameList.js';
import NewGame from './components/NewGame.js';
import Signup from './components/Signup.js';
import ActiveGame from './components/ActiveGame.js';
import FinishedGame from './components/FinishedGame.js';
import Credit from './components/Credit.js';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Main}/>
    <Route path="/games" component={GameList}></Route>
    <Route path="/new_game" component={NewGame}></Route>
    <Route path="/game/:hash" component={ActiveGame}></Route>
    <Route path="/finished_game" component={FinishedGame}></Route>
    <Route path="/signup" component={Signup}></Route>
    <Route path="/info" component={Credit}></Route>
  </Route>
)
