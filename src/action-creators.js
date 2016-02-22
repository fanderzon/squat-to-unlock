export const CREATE_USER = 'CREATE_USER';
export const SET_GAMES = 'SET_GAMES';
export const SET_PLAYERS = 'SET_PLAYERS';
export const ADD_PLAYER = 'ADD_PLAYER';
export const SET_GUID = 'SET_GUID';
export const CREATE_GAME = 'CREATE_GAME';
export const JOIN_GAME = 'JOIN_GAME';
import { routeActions } from 'react-router-redux';

export function goTo( path ) {
  console.log( 'goTo', path );
  return routeActions.push( path );
}

export function setGames( state ) {
  return {
    type: SET_GAMES,
    state
  }
}

export function setPlayers( state ) {
  return {
    type: SET_PLAYERS,
    state
  }
}

export function addPlayer( player ) {
  console.log('addPlayer action creator', player);
  return {
    type: ADD_PLAYER,
    meta: {
      remote: true
    },
    player
  };
}

export function setGuid( state ) {
  return {
    type: SET_PLAYERS,
    state
  }
}

export function createUser( username, avatar ) {
  console.log('createPlayer action creator', username, avatar);
  return {
    type: CREATE_USER,
    meta: {
      remote: true
    },
    username,
    avatar
  };
}

export function createGame( userId, gameOptions ) {
  return {
    type: CREATE_GAME,
    meta: {
      remote: true
    },
    userId,
    gameOptions
  };
}

export function joinGame( userId, gameHash ) {
  return {
    type: JOIN_GAME,
    meta: {
      remote: true
    },
    userId,
    gameHash
  };
}
