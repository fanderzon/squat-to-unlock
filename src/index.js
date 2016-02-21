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
import { gamesReducer, playersReducer, userReducer } from './reducers/reducers.js';
import { setGames, setPlayers, setGuid } from './action-creators.js';
import remoteActionMiddleware from './remote-action-middleware.js';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas.js';
import { ClientDb } from './client-db.js';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
const clientDb = new ClientDb( socket );
clientDb.send(
  'createUser',
  {
    username: 'Fredde Granberg',
    avatar: 'gubbe.png'
  },
  function( data ) {
    console.log( 'created user', data );
    clientDb.send(
      'getUser',
      data.generated_keys[0],
      function( user ) {
        console.log( 'retrieved user record', user );
      }
    )
  }
);

const reducer = combineReducers({
  routing: routeReducer,
  games: gamesReducer,
  players: playersReducer,
  user: userReducer
});

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(
  reduxRouterMiddleware,
  remoteActionMiddleware(socket)
)(createStore);

const store = createStoreWithMiddleware(reducer);

reduxRouterMiddleware.listenForReplays(store);

// store.dispatch({
//   type: 'SET_GAMES',
//   state: [
//     {
//       gameId: 1,
//       gameHash: 'Ky',
//       type: 'squats',
//       mode: 'qty',
//       target: 80,
//       players: [ 4 ],
//       status: 'pending',
//       created: new Date('Sat Feb 20 2016 18:13:52 GMT+0100 (CET)'),
//       readied: null,
//       started: null,
//       finished: null,
//       score: []
//     },
//     {
//       gameId: 2,
//       gameHash: '4n',
//       type: 'running',
//       mode: 'qty',
//       target: 50,
//       players: [ 3, 4 ],
//       status: 'pending',
//       created: new Date('Sat Feb 20 2016 18:13:52 GMT+0100 (CET)'),
//       readied: null,
//       started: null,
//       finished: null,
//       score: []
//     }
//   ]
// });
// store.dispatch({
//   type: 'SET_PLAYERS',
//   state: [
//     {
//       playerId: 3,
//       username: 'fanderzon'
//     },
//     {
//       playerId: 4,
//       username: 'planting'
//     }
//   ]
// });


socket.on('state', state => {
  store.dispatch( setGames(state.games) );
  store.dispatch( setPlayers(state.players) );
});

socket.on('connected', id => {
  console.log('connected id', id);
});

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById( 'app' )
);
