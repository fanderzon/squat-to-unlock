import { createStore, combineReducers } from 'redux';
import { gamesReducer } from './games-reducer.js';

export const reducer = combineReducers({
    games: gamesReducer
});
