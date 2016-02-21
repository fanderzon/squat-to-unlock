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
import { setGames, setPlayers, setGuid } from './action-creators.js';
import remoteActionMiddleware from './remote-action-middleware.js';
import { default as createSagaMiddleware, takeLatest } from 'redux-saga';
import createEngine from 'redux-storage-engine-localStorage';
import filter from 'redux-storage-decorator-filter';
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
  createSagaMiddleware( watchCreateUserSaga ),
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

function* watchUserCreateSaga() {
  yield* takeLatest('CREATE_USER', createUserSaga);
}

export function* createUserSaga(action) {
  console.log('createUserSaga', action);
   try {
      const payload = yield call(clientDb.createUser.bind(clientDb), { username: action.username, avatar: action.avatar });
      console.log('pushing route action');
      yield put(routeActions.push('/games'));
      yield put({type: "CREATE_USER_SUCCEEDED", payload});
   } catch (error) {
      yield put({type: "CREATE_USER_FAILED", error});
   }
}

function* watchCreateUserSaga() {
  yield* takeLatest('CREATE_USER', createUserSaga);
}

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById( 'app' )
);
