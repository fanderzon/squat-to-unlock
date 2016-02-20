import './style/index.scss';
import objectAssign from 'object-assign';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
import routes from './routes.js';
import { Router, browserHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import { syncHistory, routeReducer } from 'react-router-redux';
import gamesReducer from './reducers/games-reducer.js';
import playersReducer from './reducers/players-reducer.js';

const reducer = combineReducers({
  routing: routeReducer,
  games: gamesReducer,
  players: playersReducer
});

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

reduxRouterMiddleware.listenForReplays(store);

store.dispatch({
  type: 'SET_GAMES',
  state: [
    {
      gameId: 1,
      gameHash: 'Ky',
      type: 'squats',
      mode: 'qty',
      target: 80,
      players: [ 4 ],
      status: 'pending',
      created: new Date('Sat Feb 20 2016 18:13:52 GMT+0100 (CET)'),
      readied: null,
      started: null,
      finished: null,
      score: []
    },
    {
      gameId: 2,
      gameHash: '4n',
      type: 'running',
      mode: 'qty',
      target: 50,
      players: [ 3, 4 ],
      status: 'pending',
      created: new Date('Sat Feb 20 2016 18:13:52 GMT+0100 (CET)'),
      readied: null,
      started: null,
      finished: null,
      score: []
    }
  ]
});
store.dispatch({
  type: 'SET_PLAYERS',
  state: [
    {
      playerId: 3,
      username: 'fanderzon'
    },
    {
      playerId: 4,
      username: 'planting'
    }
  ]
});

const socket = io(`${location.protocol}//${location.hostname}:8090`);

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById( 'app' )
);
