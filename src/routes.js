import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App.js';
import Main from './components/Main.js';
import GameList from './components/GameList.js';
import DemoJoin from './components/DemoJoin.js';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Main}/>
    <Route path="/games" component={GameList}></Route>
    <Route path="/demojoin" component={DemoJoin}></Route>
  </Route>
)
