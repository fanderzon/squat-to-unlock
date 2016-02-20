import { List, Map } from 'immutable';
import Hashids from 'hashids';

const hashids = new Hashids('slalom platypus');

export const INITIAL_STATE = Map();
let gameCounter = 1;
export function getGameId() {
  return gameCounter++;
}
export function getGameHash( gameId ) {
  return hashids.encode(gameId);
}

// Sets the games loaded from persistant storage to memory on server reload
export function setGames( state, games ) {
  return games;
}

export function createGame(
  state,
  userId,
  {
    type,
    mode,
    target
  } = {
    type: 'running',
    mode: 'qty',
    target: 50
  }
) {
  const gameId = getGameId();

  return [
    ...state,
    {
      gameId: gameId,
      gameHash: getGameHash( gameId ),
      type,
      mode,
      target,
      players: [ userId ],
      status: 'pending',
      created: new Date(),
      readied: null,
      started: null,
      finished: null,
      score: []
    }
  ];
}

export function joinGame( state, gameId, userId ) {
  return state.map(function( game ) {
    // Only add a player to the game with the matching gameId
    // Also, if the game is no longer waiting for players/pending don't add a player
    if (game.gameId !== gameId || game.status !== 'pending') {
      return game;
    }

    // Let's make sure this player isn't already added
    if (game.players.indexOf(userId) === -1 && game.players.length < 4) {
      game.players.push(userId);
    }

    return game;
  });
}

export function readyGame( state, gameId ) {
  return state.map(function( game ) {
    if (game.gameId !== gameId || game.status !== 'pending') {
      return game;
    }

    game.status = 'ready';
    game.readied = new Date();
    game.score = game.players.map(function(playerId) {
      return {
        playerId,
        qty: 0,
        timestamp: new Date()
      }
    });

    return game;
  });
}

export function startGame( state, gameId ) {
  return state.map(function( state ) {
    if (game.gameId !== gameId || game.status !== 'ready') {
      return game;
    }

    game.status = 'started';
    game.started = new Date();
  });
}

export function incrementScore( state, gameId, playerId ) {
  return state.map(function() {

  });
}
