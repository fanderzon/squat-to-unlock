import { createStore, combineReducers } from 'redux';
import { gamesReducer, playersReducer } from './reducers/reducers.js';

export const reducer = combineReducers({
    games: gamesReducer,
    players: playersReducer
});

export default function makeStore() {
  return createStore(reducer);
}
