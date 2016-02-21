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
import { gamesReducer, playersReducer, userReducer, clientDbReducer } from './reducers/reducers.js';
import { setGames, setPlayers, setGuid } from './action-creators.js';
import remoteActionMiddleware from './remote-action-middleware.js';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas.js';
import { ClientDb } from './client-db.js';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
const clientDb = new ClientDb( socket );

const reducer = combineReducers({
  clientDb: clientDbReducer,
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

store.dispatch({
  type: 'SET_CLIENT_DB',
  clientDb: clientDb
});

reduxRouterMiddleware.listenForReplays(store);

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
