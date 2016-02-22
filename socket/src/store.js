import { createStore, combineReducers, applyMiddleware } from 'redux';
import { gamesReducer, playersReducer } from './reducers/reducers.js';
import { default as createSagaMiddleware, takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

export const reducer = combineReducers({
    games: gamesReducer,
    players: playersReducer
});



export default function makeStore() {
  const createStoreWithMiddleware = applyMiddleware(
    createSagaMiddleware( watchForWins )
  )( createStore );

  const store = createStoreWithMiddleware( reducer );

  function* watchForWins() {
    yield* takeEvery('INCREMENT_SCORE', checkForWin);
  }

  function* checkForWin( action ) {
    const game = store.getState().games.filter( game => game.gameId === action.gameId )[0];
    const target = game.target;
    const userScore = !Array.isArray(game.score) ? 0 :
      game.score.reduce( (acc, curr) => {
        return curr.playerId !== action.playerId ? curr.qty : acc;
    }, 0);

    if (userScore + action.qty >= target) {
      // game done
    }
  }

  return store;
}
