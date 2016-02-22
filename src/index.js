import './style/index.scss';
import 'babel-core/register';
import objectAssign from 'object-assign';
import * as storage from 'redux-storage';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
import routes from './routes.js';
import { Router, browserHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import { syncHistory, routeReducer , routeActions } from 'react-router-redux';
import { gamesReducer, playersReducer, userReducer, clientDbReducer } from './reducers/reducers.js';
import { setGames, setPlayers, setGuid, goTo, addPlayer } from './action-creators.js';
import remoteActionMiddleware from './remote-action-middleware.js';
import createEngine from 'redux-storage-engine-localStorage';
import filter from 'redux-storage-decorator-filter';
import { default as createSagaMiddleware, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { ClientDb } from './client-db.js';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
const clientDb = new ClientDb( socket );

const reducer = storage.reducer(
  combineReducers({
    routing: routeReducer,
    games: gamesReducer,
    players: playersReducer,
    user: userReducer
  })
);

let engine = createEngine('stu');
engine = filter(engine, ['user'] );
const storageMiddleware = storage.createMiddleware(engine);

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(
  reduxRouterMiddleware,
  storageMiddleware,
  createSagaMiddleware( watchCreateUserSaga, watchActiveGameSaga ),
  remoteActionMiddleware(socket)
)(createStore);

const store = createStoreWithMiddleware(reducer);

const load = storage.createLoader(engine);
load(store)
  .then((newState) => console.log('Loaded state:', newState))
  .catch(() => console.log('Failed to load previous state'));

reduxRouterMiddleware.listenForReplays(store);

socket.on('state', state => {
  store.dispatch( setGames(state.games) );
  store.dispatch( setPlayers(state.players) );
});

socket.on('connected', id => {
  console.log('connected id', id);
});

function* watchCreateUserSaga() {
  yield* takeLatest('CREATE_USER', createUserSaga);
}

export function* createUserSaga(action) {
   try {
      const payload = yield call(clientDb.createUser.bind(clientDb), { username: action.username, avatar: action.avatar });
      console.log('pushing route action');
      yield put(goTo('/games'));
      yield put({type: "CREATE_USER_SUCCEEDED", payload});
      yield put(addPlayer( payload ))
   } catch (error) {
      yield put({type: "CREATE_USER_FAILED", error});
   }
}

function* watchActiveGameSaga() {
  yield* takeLatest('SET_GAMES', checkActiveGameSaga);
}

function* checkActiveGameSaga( action ) {
  console.log('checkCreatedGameSaga', action, store.getState().user.id);
  const activeGame = Array.isArray(action.state) && action.state.filter( game => {
    return game.players.includes(store.getState().user.id) &&
      ( game.status === 'pending' || game.status === 'ready' || game.status === 'started');
  });
  console.log('active game', activeGame);
  if (activeGame.length > 0) {
    yield put( goTo('/game/' + activeGame[0].gameHash) );
  }
}

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById( 'app' )
);
