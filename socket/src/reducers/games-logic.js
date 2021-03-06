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
    target,
    charity,
    dollars
  } = {
    type: 'running',
    mode: 'qty',
    target: 100,
    charity: 'girls-who-code',
    dollars: 1
  }
) {
  const gameId = getGameId();

  return [
    ...state,
    {
      gameId: gameId,
      gameHash: getGameHash( gameId ),
      createdBy: userId,
      type,
      mode,
      target,
      charity,
      dollars,
      players: [ userId ],
      status: 'pending',
      created: new Date(),
      readied: null,
      started: null,
      finished: null,
      score: [{
        playerId: userId,
        qty: 0
      }]
    }
  ];
}

export function incrementScore( state, gameId, playerId, qty ) {
  return state.map(function( game ) {
    if (game.gameId !== gameId || game.status === 'finished') {
      return game;
    }

    console.log('game score before', JSON.stringify(game.code));

    game.score = game.score.map( score => {
        if (score.playerId !== playerId) {
          return score;
        }
        score.qty += qty;
        return score;
    });

    console.log('game score after', JSON.stringify(game.code));

    return game;
  });
}

export function joinGame( state, gameHash, userId ) {
  return state.map(function( game ) {
    // Only add a player to the game with the matching gameHash
    // Also, if the game is no longer waiting for players/pending don't add a player
    if (game.gameHash !== gameHash || game.status !== 'pending') {
      return game;
    }

    // Let's make sure this player isn't already added
    if (game.players.indexOf(userId) === -1 && game.players.length < 4) {
      game.players.push(userId);
    }

    game.score.push({
      playerId: userId,
      qty: 0
    });

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
