import { setGames, createGame, joinGame, readyGame, startGame } from './games-logic.js';
import { createPlayer } from './players-logic.js';

export function gamesReducer( state = [], action ) {
  switch (action.type) {
    case 'SET_GAMES':
      return setGames( state, action.games );
    case 'CREATE_GAME':
      console.log('CREATE_GAME', action);
      return createGame( state, action.userId, action.gameOptions );
    case 'JOIN_GAME':
      return joinGame( state, action.gameId, action.userId );
    case 'READY_GAME':
      return readyGame( state, action.gameId );
    case 'START_GAME':
      return startGame( state, action.gameId );
  }
  return state;
}

export function playersReducer( state = [], action ) {
  switch (action.type) {
    case 'CREATE_PLAYER':
      return createPlayer( state, action.username, action.avatar );
  }
  return state;
}
