import { createStore, combineReducers, applyMiddleware } from 'redux';
import { gamesReducer, playersReducer } from './reducers/reducers.js';
import { default as createSagaMiddleware, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

export const reducer = combineReducers({
    games: gamesReducer,
    players: playersReducer
});



export default function makeStore() {
  const createStoreWithMiddleware = applyMiddleware(
    createSagaMiddleware( watchCreateGameSaga )
  )( createStore );

  return createStoreWithMiddleware( reducer );
}

function* watchCreateGameSaga() {
  yield* takeLatest('CREATE_GAME', createGameSaga);
}

function* createGameSaga( action ) {

}
