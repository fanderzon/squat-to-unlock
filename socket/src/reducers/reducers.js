import { setGames, createGame, joinGame, readyGame, startGame, incrementScore } from './games-logic.js';
import { addPlayer } from './players-logic.js';

export function gamesReducer( state = [], action ) {
  switch (action.type) {
    case 'SET_GAMES':
      return setGames( state, action.games );
    case 'CREATE_GAME':
      console.log('CREATE_GAME', action);
      return createGame( state, action.userId, action.gameOptions );
    case 'JOIN_GAME':
      return joinGame( state, action.gameHash, action.userId );
    case 'READY_GAME':
      return readyGame( state, action.gameId );
    case 'START_GAME':
      return startGame( state, action.gameId );
    case 'INCREMENT_SCORE':
      console.log('INCREMENT_SCORE reducer', action);
      return incrementScore( state, action.gameId, action.playerId, action.qty );
  }
  return state;
}

export function playersReducer( state = [], action ) {
  switch (action.type) {
    case 'ADD_PLAYER':
      return addPlayer( state, action.player );
  }
  return state;
}
