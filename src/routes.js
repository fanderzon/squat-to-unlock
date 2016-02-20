import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App.js';
import Main from './components/Main.js';
import GameList from './components/GameList.js';
import NewGame from './components/NewGame.js';
import Signup from './components/Signup.js';
import ActiveGame from './components/ActiveGame.js';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Main}/>
    <Route path="/games" component={GameList}></Route>
    <Route path="/new_game" component={NewGame}></Route>
    <Route path="/game/:id" component={ActiveGame}></Route>

    <Route path="/signup" component={Signup}></Route>
  </Route>
)
